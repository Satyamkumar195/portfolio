import profileImage from "../assets/Satyam.png"


function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="availability">
          <span className="availability-dot"></span>
          Available for opportunities
        </div>

        <p className="hero-greeting">Hello, I'm</p>

        <h1>Satyam Kumar</h1>

        <h2>
          MCA Student & <span>Data Analyst</span>
        </h2>

        <p className="hero-description">
          I build modern, responsive and user-friendly web applications
          using Java, JavaScript, React, Node.js and MongoDB.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            View My Work
          </a>

          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>

          <a
  href="/Satyam_resume.pdf"
  className="btn resume-btn"
  target="_blank"
  rel="noreferrer"
>
  Download Resume
</a>
        </div>
        <div className="hero-socials">
  <a
    href="https://github.com/Satyamkumar195"
    target="_blank"
    rel="noreferrer"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/satyam-kumar-84b682328"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn
  </a>

  <a
    href="https://leetcode.com/u/Satyamkumar195/"
    target="_blank"
    rel="noreferrer"
  >
    LeetCode
  </a>
</div>
      </div>

      <div className="hero-image">
  <img
    src={profileImage}
    alt="Satyam Kumar"
    className="profile-image"
  />
</div>
    </section>
  );
}

export default Hero;