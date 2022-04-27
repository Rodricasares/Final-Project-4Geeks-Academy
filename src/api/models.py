from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_admin = db.Column(db.Boolean(), unique=False, nullable=False, default=False)
    name = db.Column(db.String(80), unique=False, nullable=False)
    last_name = db.Column(db.String(80), unique=False, nullable=True)
    img = db.Column(db.String(150), unique=False, nullable=True)
    user_img = db.Column(db.String(250),unique=False, nullable=False)

    #relación
    role_id = db.Column(db.Integer, db.ForeignKey('role.id'),
        nullable=False)
    role = db.relationship('Role', backref='user', lazy=True)
        

    def __repr__(self):

        return '%r' % self.id


    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "is_admin": self.is_admin,
            "name": self.name,
            "last_name": self.last_name,
            "logo": self.img,
            "role": self.role.name,
            "avatar": self.user_img
            # do not serialize the password, its a security breach
        }


class Site(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    place_name = db.Column(db.String(200), unique=False, nullable=False)
    url_site = db.Column(db.String(1000), unique=False, nullable=False)
    city = db.Column(db.String(150), unique=False, nullable=False)
    description = db.Column(db.String(1000), unique=False, nullable=False)
    location = db.Column(db.String(200), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),nullable=False )
    user = db.relationship('User',backref='site', lazy=True)
    url_image = db.Column(db.String(1000), unique=False, nullable=True)
    

    def __repr__(self):
        return '%r' % self.id

    
    def serialize(self):
        return {
            "id": self.id,
            "place_name": self.place_name,
            "url_site": self.url_site,
            "url_img": self.url_image,
            "city": self.city,
            "description": self.description,
            "location": self.location,
            "user_id": self.user_id,
            
            
        }

class Role(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=False, nullable=False)

    def __repr__(self):
        return self.name 


    def serialize(self):
        return {
            "id": self.id,

            "place_name": self.place_name,
            "url_site": self.url_site,
            "url_img": self.url_image,
            "city": self.city,
            "description": self.description,
            "location": self.location,
            
        }

class Recommend(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    site_id = db.Column(db.Integer, db.ForeignKey('site.id'),nullable=False)
    site = db.relationship('Site',backref='recommend', lazy=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)
    user = db.relationship('User',backref='recommend', lazy=True)

    def __repr__(self):
        return '<Recommend %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "site_id": self.site_id,
            "user_id": self.user.name,
                
        }

class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(1000), nullable=False)
    site_id = db.Column(db.Integer, db.ForeignKey('site.id'),nullable=False)
    site = db.relationship('Site',backref='comment', lazy=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),nullable=False)
    user = db.relationship('User',backref='comment', lazy=True)

    def __repr__(self):
        return '<Comment %r>' % self.text

    def serialize(self):
        return {
            "id": self.id,
            "text": self.text,
            "site_id": self.site_id,
            "user_id": self.user.name,
            "avatar": self.user.user_img

                

        }