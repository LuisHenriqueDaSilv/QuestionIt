from flask import request, jsonify

from app.database.models import Answer, Question
from app.database import db

class AnswerController():
  
  @staticmethod
  def create():
    answerContent = request.form.get("content")
    questionId = request.form.get("questionId")

    if not answerContent:
      return {"msg": 'required data *content* not provided'}, 400
    if not questionId:
      return {"msg": 'required data *questionId* not provided'},400
    
    try:
      questionAnswered = Question.query.get(questionId)
      if not questionAnswered:
        return {"msg": "Question not found"}, 400

      createdAnswer = Answer(
        content=answerContent,
        question_id=questionId
      )
      db.session.add(createdAnswer)
      db.session.commit()
    except:
      return {"msg": "error in database"}, 500
    
    return {"msg": "answer created"}, 200
  
  @staticmethod
  def list():

    questionId = request.args.get("questionId")
    if not questionId:
      return {"msg": "required data *questionId* not provided"}, 400
    
    try:
      answers = Answer.query.filter_by(question_id=questionId)
    except:
      return {"msg": "error in database"}, 500
    data = []
    for answer in answers:
      data.append({"content": answer.content, "id": answer.id})
    
    return data, 200
