import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'

export function SocialMedia() {
    return (
        <div className="app__social">
            <div>
                <BsInstagram/>
            </div>        
            <div>
                <BsLinkedin/>
            </div>        
            <div>
                <FaFacebook/>
            </div>        
        </div>
    )
}