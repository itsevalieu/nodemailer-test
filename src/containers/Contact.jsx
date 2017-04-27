import React from "react";

class Contact extends React.Component {
	render() {
		return (
			<main>
                <div className="contact" id="contact-content">
                    <div>
                        <br/><br/><br/>
                        <h2 className="contact-title">CONTACT</h2>
                        <p>Email: itsevalieu@gmail.com</p>
                        <p>
                            Wanna contact me? Shoot me an email directly!
                        </p><br/><br/>
                        <div>
                            <form className="contact-form" action="/" method="post" onSubmit={this.handleSubmit}>
                                <input ref="subject" type="text" name="subject" placeholder="Name" value={this.state.subject} onChange={this.subjectChange}/><br/>
                                <input ref="email" type="email" name="email" placeholder="Email Address" value={this.state.email} onChange={this.emailChange}/><br/><br/>
                                
                                <textarea placeholder="Your Message" ref="text" type="text" name="text" value={this.state.text} onChange={this.textChange}></textarea>
                                <button id="contact-form" type="submit">Send</button>
                            </form>             
                        </div>
                    </div>
                </div>  
            </main>
		);
	}
}
export default Contact;












