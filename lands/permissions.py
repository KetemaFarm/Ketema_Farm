from rest_framework.permissions import BasePermission


class IsLandOwner(BasePermission):
    def has_permission(self, request, view):
        # For create operations
        if request.method == 'POST':
            return request.user.is_authenticated and request.user.role == 'LANDOWNER'
        return True

    def has_object_permission(self, request, view, obj):
        # For update/delete operations
        return request.user.is_authenticated and obj.owner == request.user


class IsFarmer(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role == 'FARMER'
