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
      {/* <DisplayQuestions props={{ id, question, input, outPut, onBackClick }} /> */}
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
        </div>
        <DisplayOutput props={{ executeCode, setOutput, output }} />
      </div>
    </>
  );
};

export default IDEpython;

export function DisplayQuestions({props}) {
  const { id, question, onBackClick, input, outPut } = props;
  return (
    <details style={{ padding: "10px" }}>
      <summary>
        [#Q{id}] : {question}
        &nbsp;
        <u style={{ color: "red" }} onClick={onBackClick}>
          [ back ]{" "}
        </u>
      </summary>
      <br />
      <div style={{ marginTop: "-15px", paddingLeft: "40px" }}>
        <p style={{ marginBottom: "-2px" }}>
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
  );
}

export function DisplayOutput({props}) {
  const { executeCode, setOutput, output } = props;
  return (
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
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ width: "50px" }}
            src="https://qph.cf2.quoracdn.net/main-qimg-dca3cd734f5eb8c4854f00af58e534ff"
            alt="py"
          />
          <h4 style={{ textAlign: "center" }}>OUTPUT</h4>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <button className="btn btn-success w-10" onClick={executeCode}>
            Run Code
          </button>{" "}
          <button
            className="ide-output-top"
            onClick={() => setOutput(() => "")}
          >
            Clear
          </button>
        </div>
      </div>
      <pre>{output}</pre>
    </div>
  );
}
