import { useEffect, useState } from "react";
import "./styles/app.css"
import {AxiosResponse} from 'axios'
//Components
import Question from "./Components/Question";
import PostQuestionForm from './Components/PostQuestionForm'

import backendApi from './Services/axios'


interface QuestionInterface {
  id: number,
  title: string,
  description: string
}
interface ErrorFetchQuestionsInterface extends AxiosResponse{
  status: 500
  data: {
    msg: string
  }
}
interface SuccesfulFetchQuestionsInterface extends AxiosResponse {
  status:200
  data: QuestionInterface[]
}

export default function App() {

  const [questions, setQuestions] = useState<QuestionInterface[]>()

  async function fetchQuestions() {
    let response
    try {
      response = (await backendApi.get('/question/list')) as ErrorFetchQuestionsInterface | SuccesfulFetchQuestionsInterface
    } catch (error) {
      return alert('Algo de inesperado ocorreu enquanto carregavamos as perguntas existentes')
    }
    if(response.status == 200) setQuestions(response.data);
  }

  useEffect(() => {
    fetchQuestions()
  }, [])

  return (
    <div className="wrapper">
      <div className="app-container">
        <h1>perguntas</h1>

        <PostQuestionForm/>

        <div className="questions-container">
          {
            questions? (
              questions.map((question) => {
                
                return (
                  <Question
                  title={question.title}
                  id={question.id} 
                  description={question.description}
                  key={question.id}
                  />
                )
              })
            ): null
          }
        </div>
      </div>
    </div>
  )
}