import React from 'react'

const Contact = () => {
    return (
        <div className="row my-5">
            <div className="col-sm-8 about-background p-4">
                <h1 className="about-header">Contact</h1>
                <hr />
                <form className="col-sm-10">
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" className="form-control" placeholder="First Name" />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control" placeholder="Last Name" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" placeholder="@email address" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea className="form-control" id="formTextArea" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn color-btn">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;