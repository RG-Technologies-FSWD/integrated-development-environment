import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/theme-monokai";

const IDEsql = () => {
  const handleCodeChange = (newCode) => {
    // Handle code changes if needed
  };

  return (
    <>
      <AceEditor
        mode="sql"
        theme="monokai"
        onChange={handleCodeChange}
        name="your-editor"
        editorProps={{ $blockScrolling: true }}
        fontSize={14}
        width="100%"
        height="250px"
      />
      <button className="btn btn-warning w-100" onClick={()=>{}}>
        Run Query
      </button>
      <div style={{height:"150px",border:"1px dashed"}}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid",
              padding: "8px",
            }}
          >
            <h5 style={{ textAlign: "center" }}>SQL OUTPUT</h5>
            <button
              className="ide-output-top"
              onClick={() => {}}
            >
              Clear
            </button>
          </div>
          <pre>{'output'}</pre>
        </div>
    </>
  );
};

export default IDEsql;
