import React from "react";

const Contact: React.FC = () => {
  const email = "your-email@example.com";
  const subject = "Contact Request";
  const body = "Hi, I would like to get in touch with you regarding...";

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <section>
      <h2>Contact Us</h2>
      <p>
        If you have any questions, feel free to{" "}
        <a href={mailtoLink}>send us an email</a>.
      </p>
    </section>
  );
};

export default Contact;
