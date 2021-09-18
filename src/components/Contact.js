function Contact() {
  return (
    <div className="container">
      <label htmlFor="fname">Nom</label>
      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="Your name.."
      />

      <label htmlFor="lname">Prenom</label>
      <input
        type="text"
        id="lname"
        name="lastname"
        placeholder="Your last name.."
      />

      <label htmlFor="subject">Sujet</label>
      <textarea
        id="subject"
        name="subject"
        placeholder="Write something.."
      ></textarea>

      <input type="submit" value="Submit" />
    </div>
  );
}

export default Contact;
