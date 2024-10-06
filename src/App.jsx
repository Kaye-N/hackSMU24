import { useEffect, useState, Image } from 'react'
import './App.css'
import backgroundImage from '../public/bkgd.png'

function App() {
  
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/api/questions")
    .then(response => response.json())
    .then(data => setQuestions(data))
    .catch(err => console.log(err));     
  }, [])

  return (
    <div className='app-container' style={{ backgroundImage: `url(${backgroundImage})` }}>     
      {/* Questions - useState when component renders use setState*/}
      {questions.length === 0 ? (
      <p>Loading...</p>
    ) : (
      questions.map((question, i) => (
        <div key={i} className='question-container'>
          <p>{question.questions}</p> {/* Access the question */}
          <ul>
            {question.answers.map((answer, idx) => (
              <button>{answer}</button>
            ))}
          </ul>
        </div>
      ))
    )}
    </div>
  )
}

export default App
