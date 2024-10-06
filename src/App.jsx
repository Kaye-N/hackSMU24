import { useEffect, useState, Image } from 'react'
import './App.css'

function App() {
  
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("/api/questions")
    .then(response => response.json())
    .then(data => setQuestions(data))
    .catch(err => console.log(err));     
  }, [])



  return (
    <>     

      {/* Questions - useState when component renders use setState*/}
      {questions.length === 0 ? (
      <p>Loading...</p>
    ) : (
      questions.map((question, i) => (
        <div key={i}>
          <p>{question.questions}</p> {/* Access the question */}
          <ul>
            {question.answers.map((answer, idx) => (
              <li key={idx}>{answer}</li>
            ))}
          </ul>
        </div>
      ))
    )}
    </>
  )
}

export default App
