import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <p className="section-subtitle">My Recent Work</p>

        <h2>Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
  className={`project-card ${project.featured ? "featured-project" : ""}`}
  key={project.id}
>
              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="all-projects">
  <a
    href="https://github.com/Satyamkumar195?tab=repositories"
    target="_blank"
    rel="noreferrer"
    className="btn secondary-btn"
  >
    View All Projects on GitHub
  </a>
</div>
      </div>
    </section>
  );
}

export default Projects;