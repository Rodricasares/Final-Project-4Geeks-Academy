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
    #relación
    role_id = db.Column(db.Integer, db.ForeignKey('role.id'),
        nullable=False)
    role = db.relationship('Role', backref='user', lazy=True)
        

    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "is_admin": self.is_admin,
            "name": self.name,
            "last_name": self.last_name,
            "logo": self.img,
            "role": self.role.name

            # do not serialize the password, its a security breach
        }

class Role(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=False, nullable=False)

    def __repr__(self):
        return self.name 

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name
        }