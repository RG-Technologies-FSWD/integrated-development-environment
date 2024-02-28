import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import Sk from "skulpt";

const IDEpython = ({ id, question, input, outPut, onBackClick }) => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const executeCode = () => {
    setOutput("");
    Sk.configure({
      output: (text) => setOutput((prevOutput) => prevOutput + text),
    });
    Sk.misceval.asyncToPromise(() =>
      Sk.importMainWithBody("<stdin>", false, code, true)
    );
    setTimeout(() => {
      setOutput(
        (prevOutput) =>
          `Output => ${prevOutput} [AT : ${new Date().toLocaleTimeString()}]`
      );
    }, 0);
  };

  return (
    <>
      <details style={{ padding: "10px" }}>
        <summary>
          [#Q{id}] : {question}
          &nbsp;
          <u style={{ color: "red" }} onClick={onBackClick}>
            [ back ]{" "}
          </u>
        </summary>
        <br />
        <div style={{marginTop:"-15px",paddingLeft:"40px"}}>
          <p style={{marginBottom:"-2px"}}>
            <b>Input : </b>
            {input}
          </p>
          <p>
            {" "}
            <b>Output :</b>
            {outPut}
          </p>
        </div>
      </details>
      <div className="ide-python">
        <div className="ide-python-editor">
          <AceEditor
            mode="python"
            theme="monokai"
            onChange={(newCode) => setCode(newCode)}
            value={code}
            editorProps={{ $blockScrolling: true }}
            width="100%"
            height="400px"
          />
          <button className="btn btn-primary w-100" onClick={executeCode}>
            Run Code
          </button>
        </div>
        <div className="ide-python-output">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid",
              padding: "8px",
            }}
          >
            <h4 style={{ textAlign: "center" }}>PYTHON OUTPUT</h4>
            <button
              className="ide-output-top"
              onClick={() => setOutput(() => "")}
            >
              Clear
            </button>
          </div>
          <pre>{output}</pre>
        </div>
      </div>
    </>
  );
};

export default IDEpython;
