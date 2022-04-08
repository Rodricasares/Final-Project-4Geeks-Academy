"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Site, Comment, Recommend
from api.utils import generate_sitemap, APIException
from sqlalchemy import func
from sqlalchemy import or_

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/sites', methods=['POST'])
def list_sites():

    site= request.json.get("site")
    sites = Site.query.filter(or_(Site.city.ilike(f"%{site}%"),Site.place_name.ilike(f"%{site}%")))
    
    response = [site.serialize() for site in sites]
    return jsonify(response)

@api.route('/comments', methods=['POST'])
def list_comments():

    id_site= request.json.get("id_site")
    comments = Comment.query.filter_by(site_id = id_site )
    
    response = [comment.serialize() for comment in comments]
    return jsonify(response)

@api.route('/comments', methods=['GET'])
def all_comments():

    
    comments = Comment.query.all()
    
    response = [comment.serialize() for comment in comments]
    return jsonify(response)


@api.route('/sites', methods=['GET'])
def all_sites():

    
    sites = Site.query.all()
    
    response = [site.serialize() for site in sites]
    return jsonify(response)