from app.database import db

class Response(db.Model):
  __tablename__ = "responses"
  id = db.Column(db.Integer, primary_key=True)
  content = db.Column(db.String)

  question_id = db.column(db.Integer, db.ForeignKey('questions.id'))
  # question = db.relationship('Question', foreign_keys=question_id)

  def __init__(self, content, question_id):
    self.content = content
    self.question_id = question_id