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
            email: email,
            message: message
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
                Let's chat
            </h2>
            <div className="app__footer-cards">
                <div className="app__footer-card">
                    <img src={images.email} alt="Email" />
                    <a href="mailto:douglas.vinicio@hotmail.com" className="p-text">douglas.vinicio@hotmail.com</a>
                </div>
                <div className="app__footer-card">
                    <img src={images.mobile} alt="Mobile" />
                    <a href="tel:+1 (514) 502-1191" className="p-text">514-502-1191</a>
                </div>
            </div>

            {!isFormSubmitted ?
                <div className="app__footer-form app__flex">
                    <div className="app__flex">
                        <input type="text" className="p-text" placeholder='Your Name' name='name' value={name} onClick={handleChangeInput} />
                    </div>                    
                        <div className="app__flex">
                            <input type="email" className="p-text" placeholder='Your Email' name='name' value={email} onClick={handleChangeInput} />
                        </div>                    
                    <div>
                        <textarea className='p-text' placeholder='Your Message' value={message} name="" onChange={handleChangeInput} />
                    </div>
                    <button type="button" className='' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
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