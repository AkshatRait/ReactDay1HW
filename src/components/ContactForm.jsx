import React from 'react'
import styles from "../pages/ContactForm.css";

const ContactForm = () => {
  return (
    <form class ="form">
        <label class = "label">Name:
        <input type = "text"/>
        </label>
        <label class = "label">Email:
        <input type = "text"/>
        </label>
        <label class = "label">Message:
        <input type = "text"/> 
        </label>
        <button>Submit</button>
    </form>
  )
}

export default ContactForm