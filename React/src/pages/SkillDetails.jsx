import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import EditSkill from "./EditSkill";

export default function SkillDetails() {
  const [skill, setSkill] = useState([]);

  const navigate = useNavigate();

  const { id } = useParams();

  const getASkill = async () => {
    const { data } = await axios.get(`http://127.0.0.1:8000/skills/${id}/`);
    setSkill(data);
  };

  useEffect(() => {
    getASkill();
  }, []);

  const deleteSkill = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/skills/${id}/`);
    navigate("/")
  }

  return (
    <>
      <div className="container-fluid bg-black h-100 flex justify-content-center">
        <img
          src={skill.image}
          height="550"
          width="550"
          className="rounded mt-5"
        />
      </div>

      <div className="container-fluid bg-black h-100 flex text-center justify-content-center">
        <p className="text-white fs-1 text-uppercase mt-4 fw-bold">{skill.title}</p>
      </div>

      <div className="container-fluid bg-black h-100 flex text-center justify-content-center">
        <p className="text-white fs-4  mt-4 ">{skill.description}</p>
        
      </div>

      <div className="container-fluid bg-black h-100 flex text-center justify-content-center p-3">
      <Link
        className="skill-btn btn btn-danger rounded p-3 "
        onClick={() => deleteSkill(skill.id)}
      >
        Delete
      </Link>
      <EditSkill />
      </div>

      
    </>
  );
}
