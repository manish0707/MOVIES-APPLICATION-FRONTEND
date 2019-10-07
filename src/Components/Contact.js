import React from 'react';
import '../CSS/Contact.css';

export default function Contact() {
    return (
        <div className="contact-page">
            <div className="front">
                <h1>Contact Us</h1>
            </div>
            <div className="contact-form">
                    <table className="contact-table">
                            <tr>
                                <td><h3>Fill the form</h3></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="firstName">First Name </label></td>
                                <td><input type="text" /></td>
                            </tr>

                            <tr>
                                <td><label htmlFor="lastName">Last Name </label></td>
                                <td><input type="text" /></td>
                            </tr>

                            <tr>
                                <td> <label htmlFor="email">Email</label></td>
                                <td> <input type="Email" /></td>
                            </tr>

                            <tr>
                                <td><label htmlFor="message">Enter your Message</label></td>
                                <td><textarea />/</td>
                            </tr>
                            <tr>
                                <input type="submit" value="Submit"/>
                            </tr>
                    </table>
            </div>
        </div>
    )
}
