import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Place       { name: string; imageUrl: string; visits: number; }
interface Reputation  { label: string; score: number; }
interface StatusOption { label: string; cssClass: string; }

interface Thought {
  id: string;
  text: string;
  createdAt: number;   // timestamp ms
  timeLabel: string;
  expiresLabel: string;
}

interface UserProfile {
  name: string; handle: string; avatarUrl: string;
  status: string; followers: number; following: number;
  places: Place[];
  reputation: Reputation[];
}

const STORAGE_KEY = 'livvi_thoughts';

@Component({
  selector: 'app-profile-user',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './profileUser.component.html',
  styleUrl: './profileUser.component.css'
})
export class ProfileUserComponent implements OnInit, OnDestroy {

  @ViewChild('avatarInput') avatarInput!: ElementRef<HTMLInputElement>;

  sidebarExpanded = false;
  statusMenuOpen  = false;
  thoughtModalOpen = false;
  newThoughtText  = '';

  thoughts: Thought[] = [];
  private tickInterval: any;

  statusOptions: StatusOption[] = [
    { label: 'Procurando rolê',   cssClass: 'dot-green'  },
    { label: 'Já estou num rolê', cssClass: 'dot-yellow' },
    { label: 'To de boa',         cssClass: 'dot-blue'   },
    { label: 'Indisponível',      cssClass: 'dot-gray'   },
  ];

  user: UserProfile = {
    name: 'Lucas Almeida',
    handle: 'lucasma',
    avatarUrl: '',
    status: 'Procurando rolê',
    followers: 850,
    following: 420,
    places: [
      { name: 'Bar do Zé',      imageUrl: '', visits: 5 },
      { name: 'Boteco Carioca', imageUrl: '', visits: 3 },
      { name: 'Boteco Carioca', imageUrl: '', visits: 3 },
      { name: 'Boteco Carioca', imageUrl: '', visits: 3 },
      { name: 'Boteco Carioca', imageUrl: '', visits: 3 },
      { name: 'Boteco Carioca', imageUrl: '', visits: 3 },
    ],
    reputation: [
      { label: 'Companhia',    score: 5 },
      { label: 'Pontualidade', score: 5 },
      { label: 'Animação',     score: 5 },
      { label: 'Sumiço',       score: 2 },
    ],
  };

  // ── Getters ──────────────────────────────

  get statusClass(): string {
    const map: Record<string, string> = {
      'Procurando rolê':   'status-green',
      'Já estou num rolê': 'status-yellow',
      'To de boa':          'status-blue',
      'Indisponível':       'status-gray',
    };
    return map[this.user.status] ?? 'status-green';
  }

  get latestThought(): Thought | null {
    return this.thoughts.length > 0 ? this.thoughts[0] : null;
  }

  // ── Lifecycle ────────────────────────────

  ngOnInit() {
    this.loadThoughts();
    // Atualiza labels a cada minuto
    this.tickInterval = setInterval(() => this.refreshLabels(), 60_000);
  }

  ngOnDestroy() { clearInterval(this.tickInterval); }

  // ── Status ───────────────────────────────

  toggleStatusMenu() { this.statusMenuOpen = !this.statusMenuOpen; }

  setStatus(s: StatusOption) {
    this.user.status = s.label;
    this.statusMenuOpen = false;
  }

  // ── Avatar ───────────────────────────────

  triggerAvatarUpload() { this.avatarInput.nativeElement.click(); }

  onAvatarChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => { this.user.avatarUrl = reader.result as string; };
    reader.readAsDataURL(file);
  }

  // ── Pensamentos ──────────────────────────

  openThoughtModal()  { this.thoughtModalOpen = true; }
  closeThoughtModal() { this.thoughtModalOpen = false; }

  postThought() {
    const text = this.newThoughtText.trim();
    if (!text) return;

    const now = Date.now();
    const thought: Thought = {
      id: now.toString(),
      text,
      createdAt: now,
      timeLabel:    'agora mesmo',
      expiresLabel: '24h',
    };

    this.thoughts.unshift(thought);
    this.saveThoughts();
    this.newThoughtText = '';
  }

  private loadThoughts() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const all: Thought[] = raw ? JSON.parse(raw) : [];
      const now = Date.now();
      // Filtra expirados (> 24h)
      this.thoughts = all
        .filter(t => now - t.createdAt < 24 * 60 * 60 * 1000)
        .map(t => this.withLabels(t));
    } catch { this.thoughts = []; }
  }

  private saveThoughts() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.thoughts));
  }

  private refreshLabels() {
    const now = Date.now();
    this.thoughts = this.thoughts
      .filter(t => now - t.createdAt < 24 * 60 * 60 * 1000)
      .map(t => this.withLabels(t));
    this.saveThoughts();
  }

  private withLabels(t: Thought): Thought {
    const now      = Date.now();
    const diffMs   = now - t.createdAt;
    const diffMin  = Math.floor(diffMs / 60_000);
    const diffH    = Math.floor(diffMin / 60);
    const remaining = 24 * 60 - diffMin;
    const remH      = Math.floor(remaining / 60);
    const remMin    = remaining % 60;

    let timeLabel: string;
    if (diffMin < 1)       timeLabel = 'agora mesmo';
    else if (diffMin < 60) timeLabel = `${diffMin}min atrás`;
    else                   timeLabel = `${diffH}h atrás`;

    const expiresLabel = remH > 0 ? `${remH}h ${remMin}min` : `${remMin}min`;

    return { ...t, timeLabel, expiresLabel };
  }

  // ── Helpers ──────────────────────────────

  range(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i);
  }
}