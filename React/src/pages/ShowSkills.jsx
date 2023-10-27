import axios from "axios";
import { useEffect, useState } from "react";
import SkillDetails from "./SkillDetails";
import { Link } from "react-router-dom";

export default function ShowSkills() {
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
      <div className="container d-flex align-items-center justify-content-center ">
        <div id="carouselExample" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            {skills.map((skill, index) => (
              <>
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
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
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
