import React from "react"
import Publication from "../components/publication"
import Navbar from "../components/navbar"
import { graphql } from "gatsby";

export default ({data}) => {
  const pubInfo = data.allPublicationsInfoJson.nodes;

  const publications = pubInfo.map(pub => {
    return (
      <div key={pub.id}>
        <Publication
          title={pub.title}
          authors={pub.authors}
          published={pub.published}
          abstract={pub.abstract}
          link={pub.link}
        ></Publication>
      </div>
    );
  });

  return (
    <div>
      <Navbar></Navbar>
      <div className="section">
        <div className="container">
          <h1 className="title has-text-centered">Publications</h1>
          {publications}
        </div>
      </div>
    </div>
  );
}

export const query = graphql`
  query PublicationQuery {
    allPublicationsInfoJson {
      nodes {
        id
        title
        authors
        published
        abstract
        link
      }
    }
  }
`