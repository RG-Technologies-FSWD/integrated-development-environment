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
        <div style={{ marginTop: "-15px", paddingLeft: "40px" }}>
          <p style={{ marginBottom: "-2px" }}>
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
          <button disabled className="btn btn-primary w-100 mt-1">Save Code</button>
        </div>
        <div className="js-ide-output">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid",
              padding: "0 0 5px 0",
            }}
          >
            <div style={{ display: "flex",justifyContent:"center", alignItems: "center" ,gap:"3px"}}>
              <img
                style={{ width: "30px",borderRadius:"5%" }}
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/javascript-programming-language-icon.png"
                alt="js"
              />
              <h4 style={{marginTop:"8px"}}>OUTPUT</h4>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <button className="btn btn-success w-10" onClick={onRunCode}>
                Run Code
              </button>
              <button
                className="ide-output-top"
                onClick={() => setOutput(() => "")}
              >
                clear
              </button>
            </div>
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
