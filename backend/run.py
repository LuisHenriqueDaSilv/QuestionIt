from dotenv import dotenv_values
from app import app

config = dotenv_values('.flaskenv')
PORT=config.get('PORT') or 3000

if __name__ == "__main__": 
  app.run(port=PORT)
  print(f"APP running on port {PORT}")
  