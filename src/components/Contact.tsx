import React from "react";

const Contact: React.FC = () => {
  const email = "KDhorsemanship.idaho@gmail.com";
  const subject = "Contact Request";
  const body = "Hi, I would like to get in touch with you regarding...";

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <section>
      {/* <h2>Contact Us</h2> */}
      <p>
        We are operate year-round, but there are times when the weather inhibits
        lessons.
      </p>
      <p>
        All scheduling must be made personally via email, text, or phone. Please
        reach out soon if you'd like to book with us.
      </p>
      <p>
        Email: <a href={mailtoLink}>{email}</a>
        <br />
        Phone/Text: 208.860.2660
        <br />
        Address: 6619 Kuna Rd. Nampa, ID
        <br />
      </p>
    </section>
  );
};

export default Contact;
