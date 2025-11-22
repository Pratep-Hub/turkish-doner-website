import "../Components/Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function ContactPage() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ht7bx1e",     // ✅ Your EmailJS Service ID
      "template_63toc8r",    // ✅ Your EmailJS Template ID
      formRef.current,
      "a6HX75_ArS94zXXWO"    // ✅ Your Public Key
    )
    .then(
      () => {
        alert("Message sent successfully! ✔");
        formRef.current.reset();
      },
      (error) => {
        alert("Failed to send message ❌");
        console.log(error);
      }
    );
  };

  return (
    <section id="contact" className="contact-section">

      {/* MAIN HEADING */}
      <div className="contact-header">
        <h1 className="contact-title">
          <span className="blue-text">Contact</span>
          <span className="orange-text"> Us</span>
        </h1>
        <p className="contact-subtext">
          We’re here to help you! Reach out anytime.
        </p>
      </div>

      <div className="contact-container">

        {/* ================= LEFT SIDE ================= */}
        <div className="contact-info">
          <h2 className="info-main-title">Get In Touch</h2>

          <div className="info-card">
            <h3>📍 Address</h3>
            <p>Poly jn, Near Indoor Stadium, Triprayer, Kerala 680567</p>
          </div>

          <div className="info-card">
            <h3>📞 Phone</h3>
            <p>+91 70255 34268</p>
          </div>

          <div className="info-card">
            <h3>✉ Email</h3>
            <p>turkishdoner@gmail.com</p>
          </div>

          <div className="info-card timing-card">
            <h3>⏰ Shop Timing</h3>
            <p><strong>Open:</strong> 11:00 AM</p>
            <p><strong>Close:</strong> 12:00 AM</p>
          </div>
        </div>

        {/* ================= RIGHT SIDE (FORM) ================= */}
        <div className="right-side-form">
          <h2 className="form-title">Your Details</h2>

          <form ref={formRef} onSubmit={sendEmail} className="contact-form">

            <div className="input-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>

            <div className="input-group">
              <input type="email" name="email" placeholder="Your Email" required />
            </div>

            <div className="input-group">
              <input type="text" name="phone" placeholder="Phone Number" required />
            </div>

            <div className="input-group">
              <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            </div>

            <button className="send-btn" type="submit">
              Send Message ✉
            </button>

          </form>
        </div>

      </div>

      {/* ================= MAP SECTION ================= */}
    {/* MAP SECTION */}
<div className="map-box">
  <div className="map-responsive">
    <iframe
      title="Turkish Doner - Triprayer"
      src="https://www.google.com/maps?q=Poly+jn,+Near+Indoor+Stadium,+Triprayer,+Kerala+680567&output=embed"
      width="100%"
      height="350"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>


    </section>
  );
}

export default ContactPage;
