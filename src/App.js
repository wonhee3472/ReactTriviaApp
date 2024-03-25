import React, {useState} from 'react';

const Question = ({question}) => {
  return <p>{question}</p>;
}

const Options = ({options, handleAnswerSelect}) => {
  return (
    <div>
      {options.map((option, index) => (
        <button key={index} onClick={() => handleAnswerSelect(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

const Navigation = ({ moveToPreviousQuestion, moveToNextQuestion, isFirstQuestion, isLastQuestion }) => {
  return (
    <div>
      <button onClick={moveToPreviousQuestion} disabled={isFirstQuestion}>
        Previous
      </button>
      <button onClick={moveToNextQuestion} disabled={isLastQuestion}>
        Next
      </button>
    </div>
  );
};

const EndOfQuiz = ({ score, totalQuestions }) => {
  return <p>Quiz ended! Your score is {score}/{totalQuestions}</p>;
};

const TriviaApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);
  
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Berlin', 'Madrid'],
      correctAnswer: 'Paris'
    },
    {
      question: 'Who wrote "Romeo and Juliet"?',
      options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'],
      correctAnswer: 'William Shakespeare'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Jupiter', 'Mars', 'Saturn'],
      correctAnswer: 'Mars'
    },
    {
      question: 'What is the largest mammal in the world?',
      options: ['Elephant', 'Blue whale', 'Giraffe', 'Hippopotamus'],
      correctAnswer: 'Blue whale'
    },
    {
      question: 'What is the chemical symbol for water?',
      options: ['H2O', 'CO2', 'O2', 'NaCl'],
      correctAnswer: 'H2O'
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: ['Leonardo da Vinci', 'Vincent van Gogh', 'Pablo Picasso', 'Claude Monet'],
      correctAnswer: 'Leonardo da Vinci'
    },
    {
      question: 'What is the largest ocean on Earth?',
      options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      correctAnswer: 'Pacific Ocean'
    },
    {
      question: 'Which famous scientist developed the theory of relativity?',
      options: ['Isaac Newton', 'Galileo Galilei', 'Albert Einstein', 'Stephen Hawking'],
      correctAnswer: 'Albert Einstein'
    },
    {
      question: 'In which year did the Titanic sink?',
      options: ['1912', '1923', '1907', '1931'],
      correctAnswer: '1912'
    },
    {
      question: 'What is the tallest mountain in the world?',
      options: ['K2', 'Kangchenjunga', 'Mount Everest', 'Lhotse'],
      correctAnswer: 'Mount Everest'
    },
    {
      question: 'What is the currency of Japan?',
      options: ['Yuan', 'Dollar', 'Yen', 'Euro'],
      correctAnswer: 'Yen'
    },
    {
      question: 'Who is known as the "Father of Computers"?',
      options: ['Charles Babbage', 'Alan Turing', 'Ada Lovelace', 'Bill Gates'],
      correctAnswer: 'Charles Babbage'
    },
    {
      question: 'Which gas is most abundant in the Earth’s atmosphere?',
      options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'],
      correctAnswer: 'Nitrogen'
    },
    {
      question: 'What is the chemical symbol for gold?',
      options: ['Au', 'Ag', 'Pb', 'Fe'],
      correctAnswer: 'Au'
    },
    {
      question: 'What is the main ingredient in guacamole?',
      options: ['Tomato', 'Onion', 'Avocado', 'Lemon'],
      correctAnswer: 'Avocado'
    },
    {
      question: 'Who is the Greek god of thunder?',
      options: ['Zeus', 'Poseidon', 'Hades', 'Ares'],
      correctAnswer: 'Zeus'
    },
    {
      question: 'Which country is famous for producing maple syrup?',
      options: ['Canada', 'USA', 'Australia', 'New Zealand'],
      correctAnswer: 'Canada'
    },
    {
      question: 'What is the chemical symbol for silver?',
      options: ['Ag', 'Au', 'Pb', 'Fe'],
      correctAnswer: 'Ag'
    },
    {
      question: 'Who wrote "To Kill a Mockingbird"?',
      options: ['Harper Lee', 'J.K. Rowling', 'J.D. Salinger', 'F. Scott Fitzgerald'],
      correctAnswer: 'Harper Lee'
    },
    {
      question: 'What is the largest organ in the human body?',
      options: ['Heart', 'Liver', 'Lungs', 'Skin'],
      correctAnswer: 'Skin'
    }
  ];  

  const handleAnswerSelect = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score+1);
    } 
    
    const nextQuestionIndex = currentQuestionIndex + 1;

    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setQuizEnded(true);
    }
  }

  const moveToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const moveToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };


  return (
    <div>
      <h1>Trivia Quiz</h1>
      {quizEnded ? (
        <EndOfQuiz score={score} totalQuestions={questions.length}/>
      ) : (
        <div>
          <Question question={questions[currentQuestionIndex].question}/>
          <Options
            options={questions[currentQuestionIndex].options}
            handleAnswerSelect={handleAnswerSelect}
          />
          <p></p>
          <Navigation
            moveToPreviousQuestion={moveToPreviousQuestion}
            moveToNextQuestion={moveToNextQuestion}
            isFirstQuestion={currentQuestionIndex === 0}
            isLastQuestion={currentQuestionIndex === questions.length - 1}
          />
        </div>
      )}
    </div>
  );
};

export default TriviaApp;