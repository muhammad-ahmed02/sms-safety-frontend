import { useState } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

import useWindowDimensions from "../assets/Dimensions";
import "./Contact.scss";
import contactForm from "../hooks/contact";

const Contact = () => {
  const { height } = useWindowDimensions();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");

  return (
    <>
      <section className="contact-section" style={{ minHeight: height }}>
        <div className="contact-page">
          <div className="contact-details">
            <section className="details-section">
              <h1>Contact Us</h1>
              <span className="details">
                <p>
                  PLOT NO 402,412 SECTOR 7/A KORANGI INDUSTRIAL AREA KARACHI,
                  PAKISTAN.
                </p>
                <p>+92 333 2119419</p>
                <p>+92 021 35054323</p>
                <p>smsleather@gmail.com</p>
              </span>
            </section>
          </div>
          <div className="contact-form">
            <form onSubmit={(e) => {
              e.preventDefault();
              contactForm(name, email, subject, msg);
              setName("");
              setEmail("");
              setSubject("");
              setMsg("");
              alert("Your message is sent!");
            }}>
              <div className="form-group name">
                <TextField
                  required
                  id="outlined-required"
                  label="Name"
                  style={{ width: "38%" }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Email"
                  type="email"
                  style={{ width: "60%" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <TextField
                  required
                  fullWidth
                  id="outlined-required"
                  label="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="form-group">
                <TextField
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows={5}
                  fullWidth
                  required
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                />
              </div>
              <Button variant="outlined" fullWidth type="submit">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
