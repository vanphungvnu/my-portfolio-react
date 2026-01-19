interface Project {
  title: string;
  description: string;
  github?: string;
  live?: string;
}

const projectsData: Project[] = [
  {
    title: "E-Commerce Platform (React SPA + Spring Boot API)",
    description:
      "Full-stack e-commerce application featuring a React Single Page Application frontend and a Spring Boot REST API backend. Includes user authentication, role-based access (User/Admin), Stripe payment integration, and a responsive UI built with Bootstrap 5. Deployed on AWS with CloudFront and EC2.",
    github: "https://github.com/vanphungvnu/ecommerce-react-spa",
    live: "https://app.vantriphung.dev",
  },
  {
    title: "Admin Management SPA",
    description:
      "Role-based admin dashboard for managing users, products, categories, and orders. Developed with reusable React components, Bootstrap 5, and context-based state management. Provides pagination, search, image upload, and order/refund processing capabilities.",
    github: "https://github.com/vanphungvnu/ecommerce-admin-react-spa",
    live: "https://admin.vantriphung.dev",
  },
  {
    title: "Spring Boot E-Commerce REST API",
    description:
      "Comprehensive backend API for the e-commerce platform. Implements JWT authentication, product/category management, shopping cart, order processing, payment & refund handling, email notifications via Thymeleaf templates, and CORS support for frontend integration. Includes unit and integration tests.",
    github: "https://github.com/vanphungvnu/spring-boot-ecommerce-rest-api",
    live: "https://api.vantriphung.dev/swagger-ui.html",
  },
  {
    title: "Portfolio Website",
    description:
      "Responsive personal portfolio to showcase projects and technical expertise. Built with React.js and Bootstrap 5, deployed on AWS CloudFront with a custom domain, and includes download links for resume and contact options.",
    github: "https://github.com/vanphungvnu/my-portfolio-react.git",
    live: "https://vantriphung.dev",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container py-4">
      <h2 className="fw-bold mb-4">Selected Projects</h2>
      <div className="row g-4">
        {projectsData.map((project) => (
          <div key={project.title} className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text flex-grow-1">{project.description}</p>
                <div className="d-flex gap-2 mt-3">
                  {project.live && (
                    <a
                      href={project.live}
                      className="btn btn-main btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      className="btn btn-outline-main btn-sm"
                      style={{ borderColor: "#003e87", color: "#003e87" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
