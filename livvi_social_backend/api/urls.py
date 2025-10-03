# Em livvi_social_backend/api/urls.py

from django.urls import path
from . import views

urlpatterns = [
    # A rota que já tínhamos
    path('', views.api_overview, name='api-overview'),
    
    # ESTA FOI A LINHA QUE ADICIONAMOS:
    path('login/', views.login_view, name='api-login'),
]