import { BsGithub, BsLinkedin } from 'react-icons/bs'

export function SocialMedia() {
    return (
        <div className="app__social">
            <a href="https://github.com/douglasvinicio" target="_blank">
                <div>
                    <BsGithub />

                </div>
            </a>
            <a href="https://linkedin.com/in/douglasvinicio" target="_blank">
                <div>
                    <BsLinkedin />
                </div>
            </a>
        </div>
    )
}