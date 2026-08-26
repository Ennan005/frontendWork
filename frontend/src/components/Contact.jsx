function Contact() {
  function sendMessage(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href =
      `mailto:aimanamour89@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section className="contact photo-page">
      <div className="contact-content">
        <p className="section-title">Let&apos;s Connect</p>
        <h1>Contact Me</h1>
        <p>
          Have a project or opportunity in mind? Send me a message and I&apos;ll
          get back to you soon.
        </p>

        <div className="contact-info">
          <a href="mailto:aimanamour89@gmail.com">
            <strong>Email</strong>
            <span>aimanamour89@gmail.com</span>
          </a>
          <a href="tel:0696224399">
            <strong>Phone</strong>
            <span>0696 224 399</span>
          </a>
        </div>

        <form className="contact-form" onSubmit={sendMessage}>
          <label>
            Name
            <input type="text" name="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required />
          </label>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;