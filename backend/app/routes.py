from flask import Blueprint

from app.controllers import QuestionController, AnswerController

router = Blueprint(
  'router',
  __name__
)

@router.get("/")
def index():
  return {"msg": "hello world"}

@router.post("/question/create")
def questionCreate():
  return QuestionController.create()

@router.get("/question/<id>")
def questionRead(id):
  return QuestionController.read(id)

@router.get("/question/list")
def questionList():
  return QuestionController.list()

@router.post("/answer/create")
def answerCreate():
  return AnswerController.create()

@router.get("/answer/list")
def answerList():
  return AnswerController.list()