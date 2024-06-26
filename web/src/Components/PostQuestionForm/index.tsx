import { FormEvent, useState } from 'react'

import backendApi from '../../Services/axios'

import './styles.css'


export default function Question() {

  const [newQuestionTitleInputData, setNewQuestionTitleInputData] = useState<string>("")
  const [newQuestionDescriptionInputData, setNewQuestionDescriptionInputData] = useState<string>("")

  async function postNewQuestion(event: FormEvent) {
    if (!newQuestionTitleInputData) {
      alert("Você não escreveu uma pergunta a enviada.")
      event.preventDefault()
    }
    try {
      const postData = new FormData()
      postData.append("title", newQuestionTitleInputData)
      postData.append("description", newQuestionDescriptionInputData)
      await backendApi.post("/question/create", postData)
    } catch {
      alert("Algo deu errado enquanto enviavamos sua pergunta")
      event.preventDefault()
    }
  }

  return (
    <form onSubmit={postNewQuestion} className="post-question-form">

      <div className="create-question-input">
        <input
          value={newQuestionTitleInputData}
          onInput={e => setNewQuestionTitleInputData(e.target.value)}
          type="text" required
        />
        <span>faça sua pergunta</span>
      </div>

      <div className="create-question-input">
        <input
          value={newQuestionDescriptionInputData}
          onInput={e => setNewQuestionDescriptionInputData(e.target.value)}
          type="text" required
        />
        <span>descrição da pergunta</span>
      </div>

      <button type="submit">
        <img alt="Interrogação" src="/question.svg" />
        <label>perguntar</label>
      </button>

    </form>

  )
} 