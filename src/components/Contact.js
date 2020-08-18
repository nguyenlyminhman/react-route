import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false,
            ctName: '',
            ctEmail: '',
            ctPhone: '',
            ctMessage: '',
            fDate: 'monday',
            fFile: ''
        }
    }

    submitForm = (event) => {
        event.preventDefault();
        this.setState({
            isRedirect: true
        })
    }

    isChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({
            //array name
            [name]: value
        })
    }

    isFileChange = (event) => {
        let objFile = event.target.files

        this.setState({
            fFile: objFile
        })
    }

    render() {
        console.log(this.state);
        if (this.state.isRedirect) {
            return <Redirect to='/' />
        }

        return (
            <div>
                <header className="masthead tintuc">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-12 my-auto">
                                <div className="header-content mx-auto">
                                    <h1 className="mb-1 text-center">Contact Me</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="page-section" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.*/}
                                <form id="contactForm" name="sentMessage" noValidate="novalidate">
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Name</label>
                                            <input name="ctName" onChange={(event) => this.isChange(event)} className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Email Address</label>
                                            <input name="ctEmail" onChange={(event) => this.isChange(event)} className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Phone Number</label>
                                            <input name="ctPhone" onChange={(event) => this.isChange(event)} className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Message</label>
                                            <textarea name="ctMessage" onChange={(event) => this.isChange(event)} className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Day</label>
                                        <select value={this.state.fDate} name="fDate" onChange={(event) => this.isChange(event)} className="form-control" >
                                            <option value="sunday" >Sun</option>
                                            <option value="monday">Mon</option>
                                            <option value="tuesday">Tue</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Files</label>
                                        <input name="fFile" onChange={(event) => this.isFileChange(event)} className="form-control" id="file" type="file" />
                                    </div>
                                    <div id="success" />
                                    <div className="form-group">
                                        <button onClick={(event) => this.submitForm(event)} className="btn btn-primary btn-xl" id="sendMessageButton" type="submit">
                                            Send
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Contact;