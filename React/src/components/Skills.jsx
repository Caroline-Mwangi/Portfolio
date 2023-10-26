import AddSkill from "../pages/AddSkill";
import ShowSkills from "../pages/ShowSkills";

export default function Skills() {
  return (
    <>
      <div className="p-5 container-fluid bg-black">
        <p className="text-center">
          <span className="about-maintext mt-5 text-secondary text-decoration-underline fs-5 fw-bold ">
            WHAT I OFFER
          </span>
          <br />
          <span className="about-maintext text-white fw-bold ">SKILLS</span>
        </p>
        <ShowSkills />
        <br />
        <div className="container d-flex justify-content-center ">
          <AddSkill />
        </div>
      </div>
    </>
  );
}
