const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express() 
app.use(cors())
app.use(express.json())

const questions = [
    {
        "_id": '1',
        "questions": "What is a stock?",
        "answers": [
          "A loan to a company",
          "A savings account",
          "Partial ownership of a company",
          "A government bond"
        ],
        "correct": "Partial ownership of a company"
    }, 
];

// Welcome Page
app.get('/', (req, res) => {
    res.send('Welcome to the Invest Quest!')
})

// Display Questions
app.get('/api/questions', (req, res) => {
    // List all questions
    console.log(questions);
    res.send(questions);
});

app.listen(3001, () => {
    console.log('Server running...')
})