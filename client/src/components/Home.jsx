import React from "react";

const Home = () => {
  return (
    <>
      <h3 style={{ margin: "20px", textAlign: "center" }}>
        Practice Your Code here{" "}
        <img
          style={{ width: "40px", height: "40px" }}
          src="https://cdn4.iconfinder.com/data/icons/developer-set-3/128/code-512.png"
          alt="logo"
        />
      </h3>
      <div className="container mt-5 mb-5">
        <div className="row">
          {/* <!-- Python IDE --> */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Python IDE</h5>
                <p className="card-text">
                  A web-based Python IDE for practicing Python code. Write and
                  execute Python scripts in a user-friendly environment.
                  <br />{" "}
                </p>
                <a href="/python">
                  <button type="button" class="btn btn-info">
                    Go To Python IDE
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* <!-- JavaScript IDE --> */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">JavaScript IDE</h5>
                <p className="card-text">
                  Practice JavaScript coding with our IDE. Write and run
                  JavaScript code snippets <b>NOTE :</b>{" "}
                  <i>We are currently working on handling async functions</i>
                </p>
                <a href="/javascript">
                  <button type="button" class="btn btn-warning">
                    Go To JavaScript IDE
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* <!-- SQL IDE --> */}
          {/* <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">SQL IDE</h5>
                <p className="card-text">
                  An SQL query editor for honing your database skills. Write and
                  test SQL queries in a convenient online environment.
                </p>
                <a href="/sql">
                  <button type="button" class="btn btn-success">
                   Go To SQL IDE
                  </button>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <hr />
    </>
  );
};

export default Home;
