import os
from app import app


PORT=os.environ.get("PORT", 3000)#Default: 3000
if __name__ == "__main__": 
  app.run(port=PORT, host="0.0.0.0")
