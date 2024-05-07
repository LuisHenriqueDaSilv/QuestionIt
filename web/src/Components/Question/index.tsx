import { useState } from 'react'
import AnimateHeight from 'react-animate-height';

import "./styles.css"

export default function Question() {

  const [expanded, setExpanded] = useState<boolean>(false)
  
  return (
    <div className="question-container">
      <div className="question-area">
        <h1>xxxxxxxxxx</h1>
      </div>

      <AnimateHeight
        height={expanded ? 'auto':0}
        duration={500}
      >
        <div className="responses-container">
          <div className="responses-area">

            <div className="response">
              <img src="/arrow.svg" alt="Seta para direita"/>
              <p>teste</p>
            </div>
            <div className="response">
              <img src="/arrow.svg" alt="Seta para direita"/>
              <p>teste</p>
            </div>
          </div>

          <form className="post-response-form">

            <div className="floating-placeholder-input">
              <input type="text" required/>
              <span>escreva sua resposta</span>
            </div>

            <button>
              <img src="/exclamation.svg" alt="exclamação"/>
              responder
            </button>
          </form>
        </div>
      </AnimateHeight>
      <button onClick={() => { setExpanded(!expanded) }} >
        <img src="/expand.svg" alt="Expandir" />
      </button>
    </div>
  )
}