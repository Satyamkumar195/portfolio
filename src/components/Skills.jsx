function Skills() {
  const skills = [
    "Python",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "Data Analysis",
    "HTML",
    "CSS",
    "Git & GitHub",
    "Data Structures & Algorithms",
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <p className="section-subtitle">What I Work With</p>

        <h2>Skills</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;