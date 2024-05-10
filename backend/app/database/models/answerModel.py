from app.database import db

class Answer(db.Model):
  __tablename__ = "answers"
  id = db.Column(db.Integer, primary_key=True)
  content = db.Column(db.String)
  question_id = db.Column(db.Integer, db.ForeignKey('questions.id'))

  def __init__(self, content, question_id):
    self.content = content
    self.question_id = question_id
