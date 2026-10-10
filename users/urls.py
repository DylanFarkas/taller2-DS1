from rest_framework import routers
from .views import UserViewSet, RoleViewSet
from django.urls import path, include

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'roles', RoleViewSet)

urlpatterns = [
    path('', include(router.urls)),
]