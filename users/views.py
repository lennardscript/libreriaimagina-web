from rest_framework import serializers
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
from rest_framework import status

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from .models import User
from .serializers import UserSerializer, UserSerializerWithToken

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializers = UserSerializerWithToken(self.user).data

        for token, user in serializers.items():
            data[token] = user

        return data
    
# El usuario tiene la posibilidad de autentificarse    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

# El usuario tiene la posibilidad de registrarse
@api_view(['POST'])
def register(request):
    data = request.data

    try:
        user = User.objects.create(
            username = data['username'],
            email = data['email'],
            password = make_password(data['password'])
        )
        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except:
        message = {'detail': 'Something went wrong'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

# Obtener los datos del usuario que actualmente está autenticado
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

# Obtener un solo usuario autenticado por su ID
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getSoloUser(request, pk):
    user = User.objects.get(id=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


# Obtener todos los usuarios, ¡mala práctica!
"""

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUsers(request):
  users = User.objects.all()
  serializer = UserSerializer(users, many=True)
  return Response(serializer.data)

"""

# Actualizar los datos del usuario
"""

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def putUser(request):
    user = request.user
    serializer = UserSerializerWithToken(user, many=False)
    data = request.data
    user.username = data['username']
    user.email = data['email']
    return Response(serializer.data)

    
    #Actualizar contraseña

    if data['password'] != '':
      user.password = make_password(data['password'])
    user.save()
"""

# Actualizar foto de perfil 
"""

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def uploadImage(request):
  data = request.data
  user_id = data['user_id']
  user = User.objects.get(id=user_id)
  user.image = request.FILES.get('image')
  user.save()
  return Response('Imagen subida!')
"""