import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import EditProject from "./EditProject";

export default function ProjectDetails() {
  const [project, setProject] = useState([]);

  const navigate = useNavigate();

  const { id } = useParams();

  const getAProject = async () => {
    const { data } = await axios.get(`http://127.0.0.1:8000/projects/${id}/`);
    setProject(data);
  };

  useEffect(() => {
    getAProject();
  }, []);

  const deleteProject = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/projects/${id}/`);
    navigate("/");
  };

  return (
    <>
      <div className="container-fluid bg-black h-100 flex justify-content-center">
        <img
          src={project.image}
          height="550"
          width="550"
          className="rounded mt-5"
        />
      </div>

      <div className="container-fluid bg-black h-100 flex text-center justify-content-center">
        <p className="text-white fs-1 text-uppercase mt-4 fw-bold">
          {project.name}
        </p>
      </div>

      <div className="container-fluid bg-black h-100 flex text-center justify-content-center">
        <p className="text-white fs-1 text-uppercase mt-4 fw-bold">
          {project.title}
        </p>
      </div>

      <div className="container-fluid bg-black h-100 flex text-center justify-content-center">
        <p className="text-white fs-4  mt-4 ">{project.description}</p>
      </div>

      <div className="container-fluid bg-black h-100 flex text-center justify-content-center p-3">
        <Link
          className="skill-btn btn btn-danger rounded p-3 "
          onClick={() => deleteProject(project.id)}
        >
          Delete
        </Link>
        <EditProject/>
      </div>
    </>
  );
}
