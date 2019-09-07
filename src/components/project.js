import React from "react"

const project = props => {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title is-centered">
          {props.name}
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          {props.description}
        </div>
      </div>
      <footer className="card-footer">
        <a href={props.sourceLink} className="card-footer-item">View Source</a>
        {/* if a demo link address has been given then render the hyperlink*/}
        {
          props.demoLink
            ? <a href={props.demoLink} className="card-footer-item">View Demo</a>
            : null
        }
      </footer>
    </div>
  );
}

export default project
