"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import jwt_required, create_access_token, jwt_required, get_jwt_identity



api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200



#Login
@api.route('/login', methods=['POST'])
def login():
    email = request.json.get('email')
    password = request.json.get('password')

    user = User.query.filter_by(email=email, password=password).first()
    
    if not user:
        return jsonify({"message": "El usuario no fue encontrado"}), 401

    token = create_access_token(identity=user.id)

    data_response = {
        "token": token,
        "email": user.email,
        "user_id": user.id
    }
    return jsonify(data_response), 200





    #Listado de roles

@api.route('/role', methods=['GET'])
def list_role():
    roles = Role.query.all()
    response = [role.serialize() for role in roles]
    return jsonify(response), 200 

   #Listado de users

@api.route('/user', methods=['GET'])
def list_user():
    users = User.query.all()
    response = [user.serialize() for user in users]
    return jsonify(response), 200
 #Registro de users
@api.route('/user', methods=['POST'])
def add_user():
    data = request.json
    img = data.get('img')
    name = data.get('name')
    last_name =data.get('last_name')
    email = data.get('email')
    password = data.get('password')
    user = User(img=img, name=name, last_name=last_name, email=email, password=password, is_admin=False, role_id=2)

    if not name or not email or not password:
        return jsonify({"message": "Es necesario completar los campos (Nombre, email y password)", 'color': 'alert-danger', 'ok': False}), 401 

    user = User(img=img, name=name, last_name=last_name, email=email, password=password, is_admin=False, role_id=2)
    db.session.add(user)
    db.session.commit()

    if not user:
        return jsonify({"message": "Error al crear el usuario", 'color': 'alert-danger', 'ok': False}), 401
        
    return jsonify({"message": "Usuario creado", 'color': 'alert-success', 'ok': True}), 200
    db.session.add(user)
    db.session.commit()
    token = create_access_token(identity=user.id)
    return jsonify({"token": token}), 200



@api.route('/validate', methods=['GET'])
@jwt_required()
def handle_validate():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    if user: 
        return jsonify({"validate" : True}), 200
    else:
        return jsonify({"validate" : False}), 400


    
