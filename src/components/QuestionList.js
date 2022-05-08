import React, { useState, useEffect  } from "react";
import QuestionItem from "./QuestionItem.js";


function QuestionList() {
  const [questions, setQuestions] = useState([]);
  // const [isSett, setIsest] = useState(false)
  useEffect(() => {
    fetch("http://localhost:3000/questions")
    .then(res => res.json())
    .then(res => {
      setQuestions(res);
      // setIsest(true);
    });
  }, [])

  const questionItem = questions.map(quest => (
    <QuestionItem question = { quest}/>
  ))
  console.log(questions)
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questionItem}
      </ul>
    </section>
  );
}

export default QuestionList;
