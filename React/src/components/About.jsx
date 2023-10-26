import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="container-fluid bg-black">
        <div className="row p-5">
          <div className="col-xl-5 col-lg-4 col-md-4 col-sm-6">
            <img
              className="rounded-circle p-5 ms-3 opacity-80 img-responsive"
              src="images/image2.jpg"
            />
          </div>
          <div className="col-xl-7 col-lg-8 col-md-8 col-sm-6 mt-5">
            <p>
              <span className="about-maintext mt-5 text-secondary text-decoration-underline fs-5 fw-bold ">
                INTRO
              </span>
              <br />
              <span className="about-maintext text-white fw-bold ">
                ABOUT ME
              </span>
            </p>
            <p className="about-text text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              molestiae magnam cum fugiat, illum veniam nemo recusandae
              consequatur minima corporis laudantium optio doloremque nam
              pariatur eum quidem? Fugit, sequi maxime. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Maxime vero repudiandae optio
              corporis commodi officia quis tempore nesciunt, beatae architecto
              praesentium perferendis dolores veritatis! Voluptatibus ipsam
              nesciunt officia quia dolorem!
            </p>
            <Link to="/pdf/Test.pdf" target="_blank">
              <button className="about-btn mt-2 no-underline bg-blue-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                View My Resume
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
