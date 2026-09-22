import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setSending(true);
    setStatus(null);

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/singhs85680@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
            _subject: "New Portfolio Contact Message",
            _captcha: "false",
            _template: "table",
          }),
        }
      );

      const data = await res.json();

      if (!res.ok || data.success === "false") {
        throw new Error(data.message || "Failed to send message.");
      }

      form.reset();
      setStatus({
        type: "success",
        text: "Thanks! Your message has been sent.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        text: error.message,
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <p className="section-subtitle">Get In Touch</p>

        <h2>Contact Me</h2>

        <p className="contact-description">
          Have a project, opportunity, or just want to connect? Feel free to
          reach out to me.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div>
              <strong>Email</strong>
              <a href="mailto:singhs85680@gmail.com">
                singhs85680@gmail.com
              </a>
            </div>

            <div>
              <strong>GitHub</strong>
              <a
               href="https://github.com/Satyamkumar195"
               target="_blank"
                rel="noreferrer"
                 className="github-btn"
              >
                github.com/Satyamkumar195
              </a>
            </div>

            <div>
              <strong>LinkedIn</strong>
              <a
                href="https://www.linkedin.com/in/satyam-kumar-84b682328"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/satyam-kumar-84b682328
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
            ></textarea>

            <button type="submit" disabled={sending}>
              {sending ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p
                role="status"
                aria-live="polite"
                style={{
                  margin: 0,
                  fontSize: "13px",
                  fontWeight: 600,
                  color:
                    status.type === "success"
                      ? "var(--accent)"
                      : "#ff6b6b",
                }}
              >
                {status.text}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;