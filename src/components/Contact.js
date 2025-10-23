import React, { useState } from "react";
import "../styles/contact.css";
import { db } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Contact() {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!msg.trim()) return;

    setLoading(true);
    try {
      await addDoc(collection(db, "contactMessages"), {
        message: msg,
        timestamp: serverTimestamp(),
      });

      alert("Message sent successfully! 🚀");
      setMsg("");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message ❌ Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-wrap">
        <h2>Contact</h2>
        <form className="contact-form" onSubmit={onSubmit}>
          <textarea
            placeholder="Feel free to ask anything..."
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            required
          />
          <button className="send-btn" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="social-row">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="social"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="social"
          >
            GitHub
          </a>
          <a href="mailto:vignesh1974@gmail.com" className="social">
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
