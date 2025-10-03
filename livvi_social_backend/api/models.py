from django.db import models

# Em livvi_social_backend/api/models.py

from django.db import models

# Esta classe é o "espelho" da sua tabela 'usuario' no banco de dados.
class Usuario(models.Model):
    # Cada linha aqui representa uma coluna da sua tabela.
    
    # O Django não precisa que a gente defina o 'id', ele faz isso sozinho.
    
    nome_user = models.CharField(max_length=100)
    email_user = models.EmailField(max_length=150, unique=True)
    password_user = models.CharField(max_length=150)

    # Esta funçãozinha extra é só para o Django mostrar o email do usuário
    # em vez de "Usuario object (1)" quando a gente for testar no futuro.
    def __str__(self):
        return self.email_user
