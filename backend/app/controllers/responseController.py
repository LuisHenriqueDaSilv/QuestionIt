from flask import request, jsonify

from app.database.models import Response, Question
from app.database import db

class ResponseController():
  
  @staticmethod
  def create():
    responseContent = request.form.get("content")
    questionId = request.form.get("questionId")

    if not responseContent:
      return {"msg": 'required data *content* not provided'}, 400
    if not questionId:
      return {"msg": 'required data *questionId* not provided'},400
    
    try:
      questionAnswered = Question.query.get(questionId)
      if not questionAnswered:
        return {"msg": "Question not found"}, 400

      createdResponse = Response(
        content=responseContent,
        question_id=questionId
      )
      db.session.add(createdResponse)
      db.session.commit()
    except:
      return {"msg": "error in database"}, 500
    
    return {"msg": "response created"}, 200
  
  @staticmethod
  def list(questionId):
    if not questionId:
      return {"msg": "required data *questionId* not provided"}, 400
    
    try:
      responses = Response.query.filter_by(question_id=questionId)
    except:
      return {"msg": "error in database"}, 500
    data = []
    for response in responses:
      data.append({"content": response.content, "id": response.id})
    
    return data, 200
