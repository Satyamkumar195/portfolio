import LeetCodeStats from "./LeetCodeStats.jsx"

function About() {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <p className="section-subtitle">Get To Know Me</p>

        <h2>About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I'm Satyam Kumar, an MCA student and aspiring Software Developer
              who enjoys turning ideas into useful web applications.
            </p>

            <p>
              I mainly work with Python and the MERN stack, while
              continuously strengthening my Java, SQL and Data Structures &
              Algorithms skills.
            </p>

            <p>
              I enjoy building real-world projects, learning new technologies
              and improving my problem-solving skills.
            </p>
          </div>

          <div className="about-info">
            <div className="info-card">
              <span>Education</span>
              <strong>Master of Computer Applications</strong>
            </div>

            <div className="info-card">
              <span>University</span>
              <strong>Galgotias University</strong>
            </div>

            <div className="info-card">
              <span>Focus</span>
              <strong>Data Analysis</strong>
            </div>

            <div className="info-card">
              <span>Currently</span>
              <strong>Building Projects & Preparing for SDE Roles</strong>
            </div>
          </div>

          <div className="about-services">
            <div className="service-item">
              <span>01</span>
              <div>
                <h3>Data Analysis</h3>
                <p>
                  Building responsive web applications using React, Node.js,
                  Express.js and databases.
                </p>
              </div>
            </div>

            <div className="service-item">
              <span>02</span>
              <div>
                <h3>Backend Development</h3>
                <p>
                  Creating REST APIs, authentication systems and server-side
                  functionality.
                </p>
              </div>
            </div>

            <div className="service-item">
              <span>03</span>
              <div>
                <h3>Problem Solving</h3>
                <p>
                  Practicing Data Structures and Algorithms to improve
                  programming and problem-solving skills.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="quick-stats">
          <div className="stat">
            <strong>3+</strong>
            <span>Projects Built</span>
          </div>

          <div className="stat">
            <strong>11+</strong>
            <span>Technical Skills</span>
          </div>

          <div className="stat">
            <strong>1</strong>
            <span>Internship Experience</span>
          </div>

          <div className="stat">
            <strong>∞</strong>
            <span>Learning & Growing</span>
          </div>
        </div>

        <div className="leetcode-card">
  <div>
    <span className="leetcode-label">Coding Profile</span>

    <h3>LeetCode</h3>

    <p>
      Solving Data Structures & Algorithms problems and continuously
      improving my problem-solving skills.
    </p>

    <LeetCodeStats />
  </div>

  <a
    href="https://leetcode.com/u/satyam195/"
    target="_blank"
    rel="noreferrer"
    className="leetcode-btn"
  >
    View LeetCode Profile →
  </a>
</div>
      </div>
    </section>
  );
}

export default About;
