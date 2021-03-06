from django.conf.urls import url
from django.conf.urls import include
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register('profile', views.UserProfileViewSet)  # infers base_name from model via serializer
router.register('login', views.LoginViewSet, base_name='login')
router.register('logout', views.LogoutViewSet, base_name='logout')

urlpatterns = [
    url(r'', include(router.urls))
]
