from flask import request
from app.database import db

from app.database.models import Question
from app.database import db

class QuestionController():

  @staticmethod
  def create():
    title = request.form.get('title')
    description = request.form.get('description')

    if not title:
      return {"msg": 'required data *title* not provided'}, 400

    try:
      question = Question(title, description)
      db.session.add(question)
      db.session.commit()
    except:
      return {"msg": "error while saving data"}, 500
    
    return {"msg": "Question created"}, 200
  
  @staticmethod
  def list():
    try:
      questions = Question.query.order_by(Question.id.desc()).all()
    except:
      return {"msg": "error in database"}, 500

    data = []
    for question in questions:
      data.append({
        "title":question.title,
        "description": question.description,
        "id": question.id
      })
    return data, 200

  @staticmethod
  def read(id):

    if not id:
      return {"msg": 'required data *id* not provided'}, 400
    
    try:
      question = Question.query.get(id)
    except:
        return {"msg": "error in database"}, 500
    
    if not question:
      return {"msg": "question not found"}, 404
    
    questionData = {
      "title": question.title,
      "description": question.description,
    }
    return questionData, 200