from flask import Blueprint

router = Blueprint(
  'router',
  __name__
)

@router.get("/")
def index():
  return {
    "msg": "hello world"
  }
