from flask import Blueprint

from app.controllers import QuestionController, ResponseController

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

@router.post("/response/create")
def responseCreate():
  return ResponseController.create()

@router.get("/response/list")
def responseList():
  return ResponseController.list()