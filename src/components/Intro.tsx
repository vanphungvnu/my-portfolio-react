export default function Intro() {
  return (
    <section className="bg-light text-center py-4 mt-5">
      <div className="container">
        <img
          src="/my-photo.jpg"
          alt="Van Tri Phung"
          className="mb-3"
          width={200}
        />

        <h1 className="display-4 fw-bold">Van Tri Phung</h1>

        <p className="lead text-muted">
          Senior Full-Stack Engineer | React · Spring Boot · PHP · AWS
        </p>

        <p className="text-muted mb-1">
          Westminster, CA | U.S. Citizen | Authorized to work in the U.S. | Open
          to relocation
        </p>

        <p className="text-muted">
          Open to new full-time software engineering opportunities.
        </p>

        <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
          <a href="#projects" className="btn btn-main btn-lg">
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
