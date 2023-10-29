import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ShowProjects() {
  const [projects, setProjects] = useState([]);
  
  const getProjects = async () => {
    const response = await axios.get("http://127.0.0.1:8000/projects/");
    setProjects(response.data);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <div className="container mt-5">
        {projects.map((project, index) => (
          <div key={index} className="row mb-5">
            <div className={`col-xl-4 col-lg-4 col-md-5 col-sm-6 ${index % 2 === 0 ? '' : 'order-last'}`}>
              <img src={project.image} className="rounded" alt={`Project ${index}`} />
            </div>
            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-6">
              <p className="about-maintext text-secondary fs-5 fw-bold text-uppercase">
                {project.name}
              </p>
              <p className="text-white fs-3 fw-bold">{project.title}</p>
              <p className="text-secondary fs-5">{project.description}</p>
              <Link to={"/projects/" + project.id}>
                <p className="text-primary">Read More</p>
              </Link>
            </div>
          </div>
          
        ))}
      </div>
    </>
  );
}
