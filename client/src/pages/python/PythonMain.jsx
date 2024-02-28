import React, { useEffect, useState } from "react";
import QuestionList from "../utils/Questionlist";
import IDEpython from "./IDEpython";
import { useNavigate } from "react-router-dom";

const q = [
  {
    id: 1,
    question: "Count the number of vowels in a given string",
    input: "'hello'",
    output: "2",
  },
  {
    id: 2,
    question: "Check if a given year is a leap year",
    input: "2024",
    output: "Leap year",
  },
  {
    id: 3,
    question: "Reverse a given string",
    input: "'world'",
    output: "'dlrow'",
  },
  {
    id: 4,
    question: "Find the maximum number in a given array",
    input: "[3, 7, 2, 9, 5]",
    output: "9",
  },
  {
    id: 5,
    question: "Calculate the area of a rectangle given its length and width",
    input: "{ length: 6, width: 4 }",
    output: "24",
  },
];

const PythonMain = () => {
  const token = localStorage.getItem("rg-ide-token");

  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);
  const handleSolveClick = (index) => {
    setSelectedQuestionIndex(index);
  };

  const handleBackClick = () => {
    setSelectedQuestionIndex(null);
  };
  return (
    <div>
      {selectedQuestionIndex === null ? (
        <div>
          <h4 style={{ textAlign: "center", padding: "10px" }}>
            Python Problem Statements
          </h4>
          <QuestionList questions={q} onSolveClick={handleSolveClick} />
        </div>
      ) : (
        <IDEpython
          id={q[selectedQuestionIndex].id}
          question={q[selectedQuestionIndex].question}
          input={q[selectedQuestionIndex].input}
          outPut={q[selectedQuestionIndex].output}
          onBackClick={handleBackClick}
        />
      )}
    </div>
  );
};

export default PythonMain;
