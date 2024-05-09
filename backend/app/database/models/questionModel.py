from app.database import db

class Question(db.Model):
  __tablename__ = "questions"
  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String)
  description = db.Column(db.String, nullable=True)

  def __init__(self, title, description=""):
    self.title = title
    self.description = description
