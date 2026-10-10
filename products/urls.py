from rest_framework import routers
from .views import CategoryViewSet, ProductViewSet
from django.urls import path, include

router = routers.DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'categories', CategoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
]