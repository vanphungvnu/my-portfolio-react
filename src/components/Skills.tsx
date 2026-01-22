interface Skill {
  title: string;
  items: string[];
}

const skillsData: Skill[] = [
  {
    title: "Backend Systems",
    items: [
      "PHP (Laravel, CakePHP)",
      "Spring Boot",
      "REST APIs",
      "Auth & Data Modeling",
    ],
  },
  {
    title: "Frontend Applications",
    items: ["React.js SPA", "JavaScript (ES6+)", "Bootstrap", "Vue 3"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS EC2", "S3 & CloudFront", "Docker", "CI/CD Basics"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="container py-4">
      <h2 className="fw-bold mb-4">What I Build</h2>
      <div className="row g-4">
        {skillsData.map((skill) => (
          <div key={skill.title} className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{skill.title}</h5>
                <ul>
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
