import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Project from "../components/project"

export default ({data}) => {
  // Get data from query
  const projectsInfo = data.allProjectsInfoJson.nodes;
  // chunk length is also the number of projects to go in a column
  const chunkLength = 2;
  // Turn the array of project info into an array of arrays with length of the previously defined chunkLength
  const chunkedProjectsInfo = projectsInfo.reduce((acc, curr, index, array) => {
    if (index % chunkLength === 0) {
      let arraySlice = array.slice(index, index + chunkLength);
      // If this slice has less than the chunk length then we want to add some dummy objects
      // This way each row of projects will have the same number of columns and sizing will be consistent
      while (arraySlice.length < chunkLength){
        // Dummy object will be used to create column divs and React will still want these to have keys
        arraySlice.push({"key": arraySlice.length});
      }
      acc.push(arraySlice);
    }
    return acc;
  }, []);

  // Turn our array of chunked projects into something React can render
  const projects = chunkedProjectsInfo.map((projectArray, index) => {
    return (
      // each project array represents a columns div (row in Bulma)
      <div key={index} className="columns">
        { projectArray.map((project)=> {
            // for every project in this project array
            // check to see if it has the key property making it a dummy object
            if (!project.hasOwnProperty("key")){
              // if it's not a dummy object then use Project component to render
              const {id, name, description, sourceLink, demoLink} = project;
              return (
                <div className="column" key={id}>
                  <Project
                    name={name}
                    description={description}
                    sourceLink={sourceLink}
                    demoLink={demoLink} >
                  </Project>
                </div>
              );
            // otherwise just return an empty column with the dummy object's key
            } else {
              return (
                <div className="column" key={project.key}></div>
              );
            }
          })
        }
      </div>
    );
  });

  return (
    <div>
      <Header></Header>
      <div className="section">
        <div className="container">
          <h3 className="title is-3 has-text-centered">Projects</h3>
          {projects}
        </div>
      </div>
    </div>
  );
}

export const query = graphql`
  query projectInfoQuery {
    allProjectsInfoJson {
      nodes {
        id
        name
        description
        sourceLink
        demoLink
      }
    }
  }
`