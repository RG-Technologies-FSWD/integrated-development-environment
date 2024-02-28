import React from "react";

const QuestionList = ({ questions, onSolveClick }) => {
  return (
    <div style={{ height: "410px", overflow: "auto" }}>
      {questions.map((ele, index) => (
        <div className="questions-main" key={index}>
          <p>
            #Q{index + 1} : <b>{ele.question}</b>{" "}
          </p>
          <button onClick={() => onSolveClick(index)}>Solve</button>
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
