import React, { useState } from 'react'
import './Contact.css'

function ContactForm() {
    const [fname, setFname] =useState('')
    const [lname, setLname] =useState('')
    const [phone, setPhone] =useState('')
    const [email, setEmail] =useState('')
    const [subject, setSubject] =useState('')
    const [company, setCompany] =useState('')
    const [message, setMessage] =useState('')

    const [allValue, setAllValue] = useState([])

    const formSubmit = (e) => {
        e.preventDefault()
        setAllValue([...allValue, {fname, lname, phone, email, subject,company, message}])
        setFname('')
        setLname('')
        setFname('')
        setLname('')
        setPhone('')
        setEmail('')
        setSubject('')
        setCompany('')
        setMessage('')
        // const newValue = {fname, lname}
        // setAllValue([...allValue,newValue])
    }
  return (
    <>
        <section className='contact mtop'>
            <div className="container flex">
                <div className="main-content">
                    <h2>Contact Form</h2>
                    <p>Fill out the form below, we will get back you soon.</p>

                    <form onSubmit={formSubmit}>
                        <div className="grid1">
                            <div className="input">
                                <span>
                                    First Name<label>*</label>
                                </span>
                                <input type="text" name='fname' value={fname} onChange={(e) => setFname(e.target.value) }/>
                            </div>
                            <div className="input">
                                <span>
                                    Last Name<label>*</label>
                                </span>
                                <input type="text" name='fname' value={lname} onChange={(e) => setLname(e.target.value) }/>
                            </div>
                            <div className="input">
                                <span>
                                    Phone Numbere<label>*</label>
                                </span>
                                <input type="text" name='pnum' value={phone} onChange={(e) => setPhone(e.target.value) }/>
                            </div>
                            <div className="input">
                                <span>
                                    Email<label>*</label>
                                </span>
                                <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value) }/>
                            </div>
                            <div className="input">
                                <span>
                                    Subject<label>*</label>
                                </span>
                                <input type="text" name='subject' value={subject} onChange={(e) => setSubject(e.target.value) }/>
                            </div>
                            <div className="input">
                                <span>
                                    Company<label>*</label>
                                </span>
                                <input type="text" name='company' value={company} onChange={(e) => setCompany(e.target.value) }/>
                            </div>    
                            <div className="input">
                                <span>
                                    Message<label>*</label>
                                </span>
                                <input type="text" name='message' value={message} onChange={(e) => setMessage(e.target.value) }/>
                            </div>
                        </div>
                        <br />
                        <button className='primary-btn'>Submit Now</button>
                    </form>
                </div>

                <div className="side-content">
                    <br />
                    <h3>Visit our location</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id harum praesentium animi, optio delectus accusantium tempore qui. Reiciendis numquam at, sapiente fuga exercitationem, magni eaque veniam, dolorem voluptas voluptate consequuntur?</p>
                    <br />
                    <h3>Message Us</h3>
                    <span>info@example.com</span>
                    <br />
                    <span>011 45 6789 123</span>
                    <br />

                    <div className="icon">
                        <h3>Follow Us</h3>
                        <div className="flex-space">
                            <i className='fab fa-facebook-f'></i>
                            <i className='fab fa-twitter'></i>
                            <i className='fab fa-linkedin'></i>
                            <i className='fab fa-instagram'></i>
                            <i className='fab fa-pinterest'></i>
                            <i className='fab fa-youtube'></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className='show-data'>
            {allValue.map((currentValue) =>{
                const {fname, lname, phone, email, subject, company, message} = currentValue
                return(
                    <div className="sing-box">
                        <h2>Send Successfully</h2>
                        <h3>
                            First Name : <p>{fname}</p>
                        </h3>
                        <h3>
                            Last Name : <p>{lname}</p>
                        </h3>
                        <h3>Phone Number : <p>{phone}</p>
                        </h3>
                        <h3>
                            Email : <p>{email}</p>
                        </h3>
                        <h3>
                            Subject : <p>{subject}</p>
                        </h3>
                        <h3>
                            Company : <p>{company}</p>
                        </h3>
                        <h3>
                            Message : <p>{message}</p>
                        </h3>
                    </div>
                )
            })}
        </section>
    </>
  )
}

export default ContactForm