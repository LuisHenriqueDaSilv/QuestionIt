import "./styles/app.css"

//Components
import Question from "./Components/Question";

export default function App() {

  return (
    <div className="wrapper">
      <h1>perguntas</h1>

      <form className="post-question-form">
        <div className="post-question-input">
          <input type="text" required/>
          <span>faça sua pergunta</span>
        </div>

        <button type="submit">
          <img alt="Interrogação" src="/question.svg"/>
          perguntar
        </button>

      </form>
      
      <div className="questions-container">
        <Question/>
        <Question/>
      </div>
    </div>
  )
}