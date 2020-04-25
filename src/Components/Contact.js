import React, { useState } from "react";
import axios from 'axios'
import "../CSS/Contact.css";

const apiUrl = "contact";

export default function Contact() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [email, setemail] = useState("")
  const [message, setmessage] = useState("")

  console.log(firstName, lastName, email, message);
  async function handleFormSubmit() {
      if(!firstName || !lastName || !email || !message) {
          alert("Please fill the form!")
      } else {
        try {
            const response = await axios.post(apiUrl, {
                firstName,
                lastName,
                email,
                message
            })
            alert(response.data.message)
        } catch(e) {
            console.error('Form NOt submitted')
        }
      }
      setFirstName('')
      setlastName('')
      setemail('')
      setmessage('')
  }

  return (
    <div className="contact-page">
      <div className="contact-form">
        <table className="contact-table">
          <tr>
            <td>
              <h3>Fill the form</h3>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="firstName">First Name </label>
            </td>
            <td>
              <input value={firstName} type="text" name="firstName" onChange={(evt) => setFirstName(evt.target.value)} />
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="lastName">Last Name </label>
            </td>
            <td>
              <input value={lastName} type="text" name="lastName" onChange={(evt) => setlastName(evt.target.value)} />
            </td>
          </tr>

          <tr>
            <td>
              {" "}
              <label htmlFor="email">Email</label>
            </td>
            <td>
              {" "}
              <input value={email} type="Email" name="email" onChange={(evt) => setemail(evt.target.value)}/>
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="message">Enter your Message</label>
            </td>
            <td>
              <textarea value={message} name="message" onChange={(evt) => setmessage(evt.target.value)}/>
            </td>
          </tr>
          <tr>
            <input type="submit" value="Submit" onClick={handleFormSubmit} />
          </tr>
        </table>
      </div>
    </div>
  );
}
