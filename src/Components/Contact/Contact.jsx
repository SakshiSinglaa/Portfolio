import { useState } from 'react';
import './Contact.css';
import mail_icon from '../../Assets/mail_icon.svg';
import location_icon from '../../Assets/location_icon.svg';
import call_icon from '../../Assets/call_icon.svg';

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append('access_key', '7a816a91-3e24-4bce-9d51-04ee0aeb6612');
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      setFormValues({ name: '', email: '', message: '' }); 
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let&apos;s talk!</h1>
          <p>I&apos;m currently available to take new projects, and get up new internships.</p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail_icon" /> <p>sakshisingla2803@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call_icon" /> <p>+91 9899543745</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location_icon" /> <p>Delhi, India</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />

          <label htmlFor="message">Write your message here</label>
          <textarea
            name="message"
            rows="4"
            placeholder="Enter your message"
            value={formValues.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
