from flask import request
from app.database import db

from app.database.models import Question

class QuestionControler():

  @staticmethod
  def create():
    title = request.form.get('title')
    description = request.form.get('description')

    if not title:
      return {
        "status": "error",
        "msg": "Expected data not provided"
      }, 400

    # Salva pergunta
    try:
      question = Question(title, description)
      db.session.add(question)
      db.session.commit()
    except:
      return {
        "status": "error",
        "msg": "error while saving data"
      }, 500
    
    return {
      "status": "ok",
      "msg": "successful"
    }