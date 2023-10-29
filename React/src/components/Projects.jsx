import AddProject from "../pages/AddProject";
import ShowProjects from "../pages/ShowProjects";

export default function Projects() {
  return (
    <>
      <div className="p-5 container-fluid bg-black">
        <p className="text-center">
          <span className="about-maintext mt-5 text-secondary text-decoration-underline fs-5 fw-bold ">
            MY WORK
          </span>
          <br />
          <span className="about-maintext text-white fw-bold ">PROJECTS</span>
        </p>
        <ShowProjects />
        <br />
        <div className="container d-flex justify-content-center ">
          <AddProject />
        </div>
      </div>
    </>
  );
}
