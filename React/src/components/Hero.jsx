export default function Hero() {
  return (
    <>
      <div className="container-fluid p-0 position-relative">
        <div className="z-0 absolute bg-success bg-black opacity-60 w-100 h-100"></div>
        <div className="z-1 text-white text-center position-absolute top-50 start-50 translate-middle fs-1 fw-bold">
          <p>
            <span className="hero-maintext">CAROLINE MWANGI</span>
             <br />
            <span className="hero-minitext text-secondary font-monospace">
              Software Engineer
            </span>
          </p>
        </div>
        <img src="images/image.png" className="w-100 z-2" alt="Your Alt Text"></img>
      </div>
    </>
  );
}
