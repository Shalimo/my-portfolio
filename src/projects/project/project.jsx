import "./project.css";

const Project = (props) => {
    return (
      <div className="project">
        <div className="project-container" style={props.style} />
        <div className="project-info">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <button className="btn">
            <a href={props.linkName} className="link" target="_blank" rel="noreferrer">
              VIEW PROJECT
            </a>
          </button>
        </div>
      </div>
    );
  }
  
  export default Project;