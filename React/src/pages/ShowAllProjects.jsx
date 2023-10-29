import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ShowAllProjects() {
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
    
      <div className="container-fluid  bg-black ">
        <div>
        <p className="text-center mb-3">
          <span className="about-maintext mt-5 text-secondary text-decoration-underline fs-5 fw-bold ">
            MY WORK
          </span>
          <br />
          <span className="about-maintext text-white fw-bold ">PROJECTS</span>
        </p>
        </div>
        <div className="row d-flex p-5">
          {projects.map((project) => (
            <>
              <div className="col-lg-2 col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-5">
                <div class="card border-secondary">
                  <img src={project.image} class="card-img-top" alt="..." />
                  <div class="card-body bg-black  text-center ">
                  <p class="card-title fs-5 text-secondary text-decoration-underline">{project.name}</p>
                    <p class="card-title fs-3 text-white">{project.title}</p>
                    <Link to={"/projects/" + project.id}>
                      <p className="text-primary">Read More</p>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
