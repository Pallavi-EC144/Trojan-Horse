from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('surrogacy/', views.surrogacy, name='surrogacy'),
    path('pregnancy/', views.pregnancy, name='pregnancy'),
    path('new-mothers/', views.new_mothers, name='new_mothers'),
    path('menopause/', views.menopause, name='menopause'),
    path('legal-support/', views.legal_support, name='legal_support'),
    path('adoption/', views.adoption, name='adoption'),
    path('beyond-surrogacy/', views.beyond_surrogacy, name='beyond_surrogacy'),
    path('emotional-support/', views.emotional_support, name='emotional_support'),
]
