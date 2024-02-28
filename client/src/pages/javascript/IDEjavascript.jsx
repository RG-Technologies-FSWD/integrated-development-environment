import React from "react";
import MonacoEditor from "react-monaco-editor";

const IDEjavascript = ({
  id,
  question,
  input,
  outPut,
  code,
  output,
  onCodeChange,
  onRunCode,
  onBackClick,
  setOutput,
}) => {
  const options = {
    selectOnLineNumbers: true,
    fontSize: 14,
    automaticLayout: true,
  };

  return (
    <>
      <details style={{ padding: "10px" }}>
        <summary>
          [{id}]. Problem Statement : <b>{question}</b>
          &nbsp;
          <u style={{ color: "red" }} onClick={onBackClick}>
            [ back ]{" "}
          </u>
        </summary>
        <br />
        <div>
          <p>
            Input : <b>{input}</b>
          </p>
          <p>
            Output : <b>{outPut}</b>
          </p>
        </div>
      </details>
      <div className="js-ide-main">
        <div className="js-ide-input">
          <MonacoEditor
            width="100%"
            height={400}
            language="javascript"
            theme="hc-black"
            value={code}
            options={options}
            onChange={onCodeChange}
            className="ide"
          />
          <button className="btn btn-primary w-100 mt-1" onClick={onRunCode}>
            Run Code
          </button>
        </div>
        <div className="js-ide-output">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid",
            }}
          >
            <h2>JS OUTPUT</h2>
            <button
              className="ide-output-top"
              onClick={() => setOutput(() => "")}
            >
              clear
            </button>
          </div>
          <div>
            <pre>{output}</pre>
          </div>
        </div>
      </div>
    </>
  );
};

export default IDEjavascript;
