import React from "react"

const Publication = props => {
  return (
    <section className="section">
      <div className="card">
        <div className="card-content">
          <p className="title is-3">{props.title}</p>
          <hr></hr>
          <p className="is-5"><span className="has-text-weight-bold">Authors:</span> {props.authors}</p>
          <hr></hr>
          <p className="is-5"><span className="has-text-weight-bold">Published in:</span> {props.published}</p>
          <hr></hr>
          <p className="is-5"><span className="has-text-weight-bold">Abstract:</span> {props.abstract}</p>
        </div>
        {/* If there is a link to the publication, then add it as a card footer */}
        {
          props.link &&
          <div className="card-footer">
            <a href={props.link} className="card-footer-item">View more details</a>
          </div>
        }
        
      </div>
    </section>
  );
}

export default Publication