import {  FormEvent, useState } from 'react'
import AnimateHeight from 'react-animate-height';
import { AxiosResponse } from 'axios'

import backendApi from "../../Services/axios"

import "./styles.css"

interface QuestionComponentParams {
  title: string,
  description: string,
  id: number
}

interface answersInterface {
  id: number,
  content: string
}
interface errorFetchAnswersResponse extends AxiosResponse {
  status: 500
  data: {
    msg: string
  }
}
interface SuccesfulFetchAnswersResponse extends AxiosResponse {
  status: 200
  data: answersInterface[]
}

export default function Question(params: QuestionComponentParams) {

  const [answers, setAnswers] = useState<answersInterface[]>([])
  const [loadingAnswers, setLoadingAnswers] = useState<Boolean>(false)
  const [expanded, setExpanded] = useState<boolean>(false)
  const [answerInputValue, setAnswerInputValue] = useState<string>("")

  async function fetchAnswers(){
    const answearsResponse = (
      await backendApi.get(`/answer/list?questionId=${params.id}`)
    ) as errorFetchAnswersResponse | SuccesfulFetchAnswersResponse
    if (answearsResponse.status != 200) {
      return alert('Algo de inesperado ocorreu enquanto buscavamos as respostas para esta pergunta')
    }
    setAnswers(answearsResponse.data)
  }

  async function handleExpand() {
    if (!expanded && answers.length == 0) { // Fetch answers
      setLoadingAnswers(true)
      await fetchAnswers()
      setLoadingAnswers(false)
    }
    setExpanded(!expanded)
  }

  async function postAnswer(event: FormEvent) {
    event.preventDefault()

    if(!answerInputValue){
      return alert("Resposta não escrita")
    }
    const postAnswerData = new FormData()
    postAnswerData.append('content', answerInputValue)
    postAnswerData.append('questionId', params.id.toString())
    
    try {
      await backendApi.post('/answer/create', postAnswerData)
    } catch {
      return alert("Algo de inesperado ocorreu enquanto enviavamos sua resposta")
    }
    setAnswerInputValue("")
    fetchAnswers()
  }

  return (
    <div className="question-container">
      <div className="question-area">
        <h1>{params.title}</h1>
      </div>

      <AnimateHeight
        height={expanded ? 'auto' : 0}
        duration={500}
      >
        <div className="description-container">
          <p>{params.description}</p>
        </div>
        <div className="responses-container">
          {
            answers.length > 0 ? (
              <div className="responses-area">
                {
                  answers.map(answer => {
                    return (
                      <div className="response" key={answer.id}>
                        <img src="/arrow.svg" alt="Seta para direita" />
                        <p>{answer.content}</p>
                      </div>
                    )
                  })
                }

              </div>
            ) : null
          }

          <form onSubmit={postAnswer} className="post-response-form">

            <div className="floating-placeholder-input">
              <input 
                value={answerInputValue}
                onInput={e => setAnswerInputValue(e.target.value)}
                id="answer-form-input" type="text" 
                required 
              />
              <span>escreva sua resposta</span>
            </div>

            <button>
              <img src="/exclamation.svg" alt="exclamação" />
              responder
            </button>
          </form>
        </div>

      </AnimateHeight>
      <button onClick={handleExpand} >
        {
          loadingAnswers ? (
            <img src="/loading.svg" alt="carregando" id="loading-icon" />
          ) : (
            <img src="/expand.svg" alt="Expandir" id={expanded ? "retract" : "expand"} />
          )
        }
      </button>
    </div>
  )
}