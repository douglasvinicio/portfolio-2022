import { useState } from 'react'
import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'

import './Footer.scss'

const Footer = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [loading, setloading] = useState(false)

    const { name, email, message } = formData

    function handleChangeInput(e) {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value })
    }

    function handleSubmit() {
        setloading(true)

        const contact = {
            _type: 'contact',
            name: formData.name,
            email: formData.email,
            message: formData.message
        }

        client.create(contact)
            .then(() => {
                setloading(false);
                setIsFormSubmitted(true);
            })
    }

    return (
        <>
            <h2 className="head-text">
                Let's chat :)
            </h2>
            <div className="app__footer-cards">
            <a href="mailto:douglas.vinicio@hotmail.com" className="p-text">
                <div className="app__footer-card">
                    <img src={images.email} alt="Email" />
                    douglas.vinicio@hotmail.com
                </div>
                </a>
                <a href="tel:+1 (514) 502-1191" className="p-text">
                <div className="app__footer-card">
                    <img src={images.mobile} alt="Mobile" />
                    514-502-1191
                </div>
                </a>
            </div>

            {!isFormSubmitted ?
                <div className="app__footer-form app__flex">
                    <div className="app__flex">
                        <input type="text" className="p-text" placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} />
                    </div>                    
                        <div className="app__flex">
                            <input type="email" className="p-text" placeholder='Your Email' name='email' value={email} onChange={handleChangeInput} />
                        </div>                    
                    <div>
                        <textarea className='p-text' placeholder='Your Message' value={message} name="message" onChange={handleChangeInput} />
                    </div>
                    <button type="button" className='app__footer-button' onClick={handleSubmit}><span>{loading ? 'Sending' : 'Send Message'}</span></button>
                </div>
                :
                <div>
                    <h3 className='head-text'>Thank you, I'll get back to you as soon as I can ;)</h3>
                </div>
            }
        </>
    )
}

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg'
)