import React, { Component } from "react";
import mail from "./mail";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            from: "",
            to: "itsevalieu@gmail.com",
            subject: "",
            body: ""
        }
    }
    handleChange(event) {
        if(event.target.id === "from") {
            this.setState({
                from: event.target.value
            });
        } else if(event.target.id === "subject") {
            this.setState({
                subject: event.target.value
            });
        } else if(event.target.id === "body") {
            this.setState({
                body: event.target.value
            });
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log("Clicking Submit to Send Email");
        mail.sendMail(this.state.from, this.state.to, this.state.subject, this.state.body).then((response) => {
            console.log("Sending Mail from Contact Component", response);
            this.setState({
                from: "",
                to: "itsevalieu@gmail.com",
                subject: "",
                body: ""
            });
        });
        console.log("Submit completed from Contact Component");
    }
	render() {
		return (
			<main>
                <div className="contact" id="contact-content">
                    <div>
                        <h2 className="contact-title">CONTACT</h2>
                        <p>Email: itsevalieu@gmail.com</p>
                        <p>
                            Wanna contact me? Shoot me an email directly!
                        </p><br/><br/>
                        <div>
                            <form className="contact-form" onSubmit={this.handleSubmit} >
                                <input ref="email" type="email" name="email" placeholder="Email Address" id="from" value={this.state.from} onChange={this.handleChange} required/><br/><br/>
                                
                                <input ref="subject" type="text" name="subject" placeholder="Name" id="subject" value={this.state.subject} onChange={this.handleChange} required/><br/>
                                
                                <textarea ref="text" type="text" name="text" placeholder="Your Message" id="body" value={this.state.body} onChange={this.handleChange} required></textarea>
                                <button id="contact-form" type="submit" name="action">Send</button>
                            </form>             
                        </div>
                    </div>
                </div>  
            </main>
		);
	}
}
export default Contact;