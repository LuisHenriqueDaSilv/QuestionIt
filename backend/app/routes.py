from flask import Blueprint

from app.controllers import QuestionControler

router = Blueprint(
  'router',
  __name__
)

@router.get("/")
def index():
  return {
    "msg": "hello world"
  }

@router.post("/question/create")
def create():
  return QuestionControler.create()