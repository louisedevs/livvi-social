import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface BizEvent { name: string; day: string; month: string; time: string; goingCount: number; userGoing: boolean; location: string; limited: boolean; capacity?: number; }
interface Promo    { tag: string; title: string; until: string; }
interface Hours    { day: string; time: string; closed: boolean; isToday: boolean; }
interface Photo    { url: string; caption: string; author: string; likes: number; featured: boolean; source: 'business'|'clients'; }
interface KPI      { icon: string; value: string; label: string; delta: string; deltaUp: boolean; }
interface Source   { name: string; pct: number; }
interface Pending  { author: string; time: string; color: string; }

interface BizStatus { id: string; label: string; emoji: string; cssClass: string; }

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileBusinessComponent {

  @ViewChild('coverInput')  coverInput!:  ElementRef<HTMLInputElement>;
  @ViewChild('avatarInput') avatarInput!: ElementRef<HTMLInputElement>;

  isOwner      = true;
  isFollowing  = false;
  activeTab    = 'fotos';       // ← começa em fotos
  photoFilter  = 'all';
  dashPeriod   = '30d';
  statusMenuOpen    = false;

  // Modais
  eventModalOpen = false;
  promoModalOpen = false;
  highlightEditing = false;

  // Formulário novo evento
  newEvent: Partial<BizEvent> = { name: '', day: '', month: '', time: '', location: '', limited: false, capacity: undefined };

  // Formulário nova promo
  newPromo: Partial<Promo> = { tag: '', title: '', until: '' };

  // Status do negócio
  statusOptions: BizStatus[] = [
    { id: 'open',         label: 'Aberto',        emoji: '🟢', cssClass: 'status-open'     },
    { id: 'closed',       label: 'Fechado',        emoji: '🔴', cssClass: 'status-closed'   },
    { id: 'fervendo',     label: 'Fervendo 🔥',    emoji: '🔥', cssClass: 'status-hot'      },
    { id: 'evento',       label: 'Tem evento!',    emoji: '🎉', cssClass: 'status-event'    },
    { id: 'inauguracao',  label: 'Inauguração',    emoji: '🎊', cssClass: 'status-inaug'    },
    { id: 'manutencao',   label: 'Manutenção',     emoji: '🔧', cssClass: 'status-maint'    },
    { id: 'lotado',       label: 'Casa cheia!',    emoji: '🚫', cssClass: 'status-full'     },
    { id: 'happyhour',    label: 'Happy Hour',     emoji: '🍺', cssClass: 'status-happy'    },
    { id: 'reservas',     label: 'Só com reserva', emoji: '📋', cssClass: 'status-reserve'  },
    { id: 'surpresa',     label: 'Tem surpresa 👀',emoji: '👀', cssClass: 'status-surprise' },
  ];

  currentStatus: BizStatus = { id: 'open', label: 'Aberto', emoji: '🟢', cssClass: 'status-open' };

  publicTabs = [
    { id: 'fotos',    label: 'Fotos'    },
    { id: 'inicio',   label: 'Sobre'    },
    { id: 'eventos',  label: 'Eventos'  },
  ];

  business = {
    name:       'Decker Rooftop Bar',
    type:       'Lounge / Rooftop',
    address:    'Av. Paulista, 1000 · São Paulo, SP',
    avatarUrl:  'assets/placeholder.png',
    coverUrl:   'assets/placeholder-cover.png',
    followers:  2840,
    checkins:   1247,
    highlight:  'Toda sexta — DJ set ao vivo a partir das 20h. Vista panorâmica, drinks autorais e a melhor energia da Paulista. ✨',
    about:      'Rooftop bar no coração de São Paulo. Aqui o rolê começa cedo e vai longe. Drinks autorais, música boa e uma vista que você não esquece.',
    tags:       ['rooftop', 'drinkspecials', 'dj', 'vistadasp', 'livvi'],

    events: [
      { name: 'DJ Set — Sexta de Abertura', day: '06', month: 'JUN', time: '20h', location: 'Piso Rooftop', goingCount: 134, userGoing: false, limited: true,  capacity: 200 },
      { name: 'Open Bar — Aniversário Decker', day: '14', month: 'JUN', time: '19h', location: 'Área VIP',  goingCount: 289, userGoing: false, limited: true,  capacity: 150 },
      { name: 'Sunset Sessions',             day: '21', month: 'JUN', time: '17h', location: 'Terraço',    goingCount: 97,  userGoing: false, limited: false },
    ] as BizEvent[],

    promos: [
      { tag: 'Quinta',  title: 'Cerveja em dobro das 18h às 21h',  until: '31/07' },
      { tag: 'Sexta',   title: 'Entrada gratuita antes das 21h',   until: '30/06' },
      { tag: 'Sempre',  title: 'Desconto de 15% para estudantes',  until: '31/12' },
    ] as Promo[],

    hours: [
      { day: 'Seg', time: 'Fechado',   closed: true,  isToday: false },
      { day: 'Ter', time: '17h–00h',   closed: false, isToday: false },
      { day: 'Qua', time: '17h–00h',   closed: false, isToday: false },
      { day: 'Qui', time: '17h–01h',   closed: false, isToday: false },
      { day: 'Sex', time: '17h–02h',   closed: false, isToday: true  },
      { day: 'Sáb', time: '15h–02h',   closed: false, isToday: false },
      { day: 'Dom', time: '15h–23h',   closed: false, isToday: false },
    ] as Hours[],

    photos: [
      { url: 'assets/placeholder.png', caption: '', author: '@decker',  likes: 142, featured: true,  source: 'business' },
      { url: 'assets/placeholder.png', caption: '', author: '@user1',   likes: 87,  featured: false, source: 'clients'  },
      { url: 'assets/placeholder.png', caption: '', author: '@user2',   likes: 64,  featured: true,  source: 'clients'  },
      { url: 'assets/placeholder.png', caption: '', author: '@decker',  likes: 201, featured: false, source: 'business' },
      { url: 'assets/placeholder.png', caption: '', author: '@user3',   likes: 33,  featured: false, source: 'clients'  },
      { url: 'assets/placeholder.png', caption: '', author: '@decker',  likes: 118, featured: false, source: 'business' },
    ] as Photo[],
  };

  kpis: KPI[] = [
    { icon: '👁️', value: '12.4k', label: 'Visualizações',    delta: '18%', deltaUp: true  },
    { icon: '📍', value: '1.2k',  label: 'Check-ins',         delta: '9%',  deltaUp: true  },
    { icon: '❤️', value: '340',   label: 'Favoritos',         delta: '5%',  deltaUp: true  },
    { icon: '📅', value: '520',   label: 'Confirmados',       delta: '22%', deltaUp: true  },
    { icon: '📸', value: '89',    label: 'Fotos de clientes', delta: '31%', deltaUp: true  },
    { icon: '🔁', value: '74%',   label: 'Taxa Vou→Fui',      delta: '3%',  deltaUp: true  },
  ];

  checkinChart = [
    { label: 'S1', pct: 40,  highlight: false },
    { label: 'S2', pct: 55,  highlight: false },
    { label: 'S3', pct: 35,  highlight: false },
    { label: 'S4', pct: 70,  highlight: false },
    { label: 'S5', pct: 60,  highlight: false },
    { label: 'S6', pct: 80,  highlight: false },
    { label: 'S7', pct: 65,  highlight: false },
    { label: 'S8', pct: 100, highlight: true  },
  ];

  dash = {
    goingCount: 520, wentCount: 389, convRate: 74,
    sources: [
      { name: 'Busca no Livvi', pct: 48 },
      { name: 'Feed de amigos', pct: 27 },
      { name: 'Perfil direto',  pct: 15 },
      { name: 'Outros',         pct: 10 },
    ] as Source[],
    pendingPhotos: [
      { author: '@julia.r',  time: 'há 2h',    color: '#2a2a2a' },
      { author: '@pedro_bh', time: 'há 5h',    color: '#1e1e1e' },
      { author: '@nanda.sp', time: 'há 1 dia', color: '#252525' },
    ] as Pending[],
  };

  get filteredPhotos(): Photo[] {
    if (this.photoFilter === 'all') return this.business.photos;
    return this.business.photos.filter(p => p.source === this.photoFilter);
  }

  // ── Ações públicas
  toggleFollow()          { this.isFollowing = !this.isFollowing; }
  doCheckin()             { this.business.checkins++; }
  toggleGoing(ev: BizEvent) { ev.userGoing = !ev.userGoing; ev.goingCount += ev.userGoing ? 1 : -1; }

  // ── Status
  toggleStatusMenu()              { this.statusMenuOpen = !this.statusMenuOpen; }
  setStatus(s: BizStatus)         { this.currentStatus = s; this.statusMenuOpen = false; }

  // ── Modais
  openEventModal()  { this.newEvent = { name:'', day:'', month:'', time:'', location:'', limited:false }; this.eventModalOpen = true; }
  closeEventModal() { this.eventModalOpen = false; }
  saveEvent() {
    if (!this.newEvent.name || !this.newEvent.day || !this.newEvent.month) return;
    this.business.events.unshift({ ...this.newEvent, goingCount: 0, userGoing: false } as BizEvent);
    this.closeEventModal();
  }

  openPromoModal()  { this.newPromo = { tag:'', title:'', until:'' }; this.promoModalOpen = true; }
  closePromoModal() { this.promoModalOpen = false; }
  savePromo() {
    if (!this.newPromo.title) return;
    this.business.promos.unshift({ ...this.newPromo } as Promo);
    this.closePromoModal();
  }

  // ── Destaque inline
  startHighlightEdit() { this.highlightEditing = true; }
  saveHighlight()      { this.highlightEditing = false; }

  // ── Dashboard
  approvePhoto(p: Pending) { this.dash.pendingPhotos = this.dash.pendingPhotos.filter(x => x !== p); }
  rejectPhoto(p: Pending)  { this.dash.pendingPhotos = this.dash.pendingPhotos.filter(x => x !== p); }

  // ── Upload
  triggerCoverUpload()  { this.coverInput.nativeElement.click(); }
  triggerAvatarUpload() { this.avatarInput.nativeElement.click(); }

  onCoverChange(e: globalThis.Event) {
    const f = (e.target as HTMLInputElement).files?.[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = () => { this.business.coverUrl = r.result as string; };
    r.readAsDataURL(f);
  }

  onAvatarChange(e: globalThis.Event) {
    const f = (e.target as HTMLInputElement).files?.[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = () => { this.business.avatarUrl = r.result as string; };
    r.readAsDataURL(f);
  }

  range(n: number): number[] { return Array.from({ length: n }, (_, i) => i); }

  months = ['JAN','FEV','MAR','ABR','MAI','JUN','JUL','AGO','SET','OUT','NOV','DEZ'];
}