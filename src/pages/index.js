import React from "react"
import Header from "../components/header"
import Project from "../components/project"

export default () => {
  return (
    <div>
      <Header></Header>
      {/* Put this project component into a container */}
      <div className="section">
        <div className="container">
          <h3 className="title is-3 has-text-centered">Projects</h3>
          <div className="columns">
            <div className="column">
              <Project
                name="Test"
                description="blah blah balah"
                sourceLink="#"
                demoLink="#">
              </Project>
            </div>
            <div className="column">
              <Project
                name="Test 2"
                description="blah blah balah"
                sourceLink="#">
              </Project>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
