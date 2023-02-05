from django.urls import path
from . import views
from .views import *
urlpatterns = [
    path('',views.api_home),
    path('phishing/',Phishing.as_view()),
    path('xss/',XSS.as_view()),
    path('cvss/',CVSS.as_view()),

]