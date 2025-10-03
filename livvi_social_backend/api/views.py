# Em livvi_social_backend/api/views.py

# --- FERRAMENTAS DO DJANGO ---
from django.http import JsonResponse

# --- FERRAMENTAS DO DJANGO REST FRAMEWORK ---
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# --- NOSSOS "ESPELHOS" (MODELS) ---
from .models import Usuario


# --- NOSSAS "RECEITAS" (VIEWS) ---

# Receita para a visão geral da API (continua igual)
def api_overview(request):
    api_urls = {
        'Status': 'O backend do Livvi está no ar!',
        'Documentação': 'Em breve...',
    }
    return JsonResponse(api_urls)


# Receita para o login (agora inteligente!)
@api_view(['POST'])
def login_view(request):
    email = request.data.get('email_user')
    password = request.data.get('password_user')

    try:
        usuario = Usuario.objects.get(email_user=email)

        if usuario.password_user == password:
            return Response({'message': 'Login realizado com sucesso!'})
        else:
            return Response({'error': 'Senha incorreta.'}, status=status.HTTP_400_BAD_REQUEST)

    except Usuario.DoesNotExist:
        return Response({'error': 'Usuário não encontrado.'}, status=status.HTTP_404_NOT_FOUND)