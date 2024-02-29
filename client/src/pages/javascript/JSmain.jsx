import { useEffect, useState } from "react";
import QuestionList from "../utils/Questionlist";
import IDEjavascript from "./IDEjavascript";
import { useNavigate } from "react-router-dom";

// const q = [
//   {
//     id: 1,
//     question: "Check if a given number is a prime number",
//     input: "7",
//     output: "Prime",
//   },
//   {
//     id: 2,
//     question: "Calculate the square of a given number",
//     input: "4",
//     output: "16",
//   },
//   {
//     id: 3,
//     question: "Check if a string is a palindrome",
//     input: "'level'",
//     output: "Palindrome",
//   },
//   {
//     id: 4,
//     question: "Find the sum of all numbers from 1 to a given number",
//     input: "5",
//     output: "15",
//   },
//   {
//     id: 5,
//     question: "Calculate the factorial of a given number",
//     input: "3",
//     output: "6",
//   },
// ];

function JSmain() {
  const token = localStorage.getItem("rg-ide-token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  //const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const handleRunCode = async () => {
    try {
      const containsFunctionKeyword = /(\bfunction\b)/.test(code);
      let result;
      let capturedLogs = [];
      const customLog = (...args) => {
        capturedLogs.push(args.map((arg) => JSON.stringify(arg)).join(" "));
      };
      const originalConsoleLog = console.log;
      console.log = customLog;
      const asyncEval = async () => {
        if (containsFunctionKeyword) {
          result = await eval(`${code}`);
        } else {
          result = await eval(`(async function() { ${code} })()`);
        }

        return result;
      };
      result = await asyncEval();
      console.log = originalConsoleLog;

      if (capturedLogs && capturedLogs.length > 0) {
        setOutput(`=> Output : ${capturedLogs.join("\n")} \n[AT : ${new Date().toLocaleTimeString()}]`);
      } else if (typeof result !== "undefined" && result !== null) {
        setOutput(`=> Output : ${result} \n[AT : ${new Date().toLocaleTimeString()}]`);
      } else {
        setOutput(
          <span style={{ color: "orange" }}>
            {`Code execution result is undefined or null. \n[AT : ${new Date().toLocaleTimeString()}]`}
          </span>
        );
      }
    } catch (error) {
      setOutput(() => (
        <span style={{ color: "red" }}>Error: {error.message}m</span>
      ));
    }
  };

  // const handleSolveClick = (index) => {
  //   setSelectedQuestionIndex(index);
  //   setCode("");
  //   setOutput("");
  // };

  const handleBackClick = () => {
    // setSelectedQuestionIndex(null);
    setCode("");
    setOutput("");
  };

  return (
    <>
      {/* {selectedQuestionIndex === null ? (
        <div>
          <h4 style={{ textAlign: "center", padding: "10px" }}>
            JavaScript Problem Statements
          </h4>
          <QuestionList questions={q} onSolveClick={handleSolveClick} />
        </div>
      ) : */}
      
        <IDEjavascript
          // id={q[selectedQuestionIndex].id}
          // question={q[selectedQuestionIndex].question}
          // input={q[selectedQuestionIndex].input}
          // outPut={q[selectedQuestionIndex].output}
          setOutput={setOutput}
          code={code}
          output={output}
          onCodeChange={handleCodeChange}
          onRunCode={handleRunCode}
          onBackClick={handleBackClick}
        />
      {/* )} */}
    </>
  );
}

export default JSmain;
