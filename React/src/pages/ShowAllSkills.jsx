import axios from "axios";
import { useEffect, useState } from "react";
import SkillDetails from "./SkillDetails";
import { Link } from "react-router-dom";

export default function ShowAllSkills() {
  const [skills, setSkills] = useState([]);
  const getSkills = async () => {
    const response = await axios.get("http://127.0.0.1:8000/skills/");
    setSkills(response.data);
  };

  useEffect(() => {
    getSkills();
  }, []);

  return (
    <>
    
      <div className="container-fluid  bg-black ">
        <div>
        <p className="text-center mb-3">
          <span className="about-maintext mt-5 text-secondary text-decoration-underline fs-5 fw-bold ">
            WHAT I OFFER
          </span>
          <br />
          <span className="about-maintext text-white fw-bold ">SKILLS</span>
        </p>
        </div>
        <div className="row d-flex p-5">
          {skills.map((skill, index) => (
            <>
              <div className="col-lg-2 col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-5">
                <div class="card border-secondary">
                  <img src={skill.image} class="card-img-top" alt="..." />
                  <div class="card-body bg-black text-white text-center ">
                    <p class="card-title">{skill.title}</p>
                    <Link to={"/skills/" + skill.id}>
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
