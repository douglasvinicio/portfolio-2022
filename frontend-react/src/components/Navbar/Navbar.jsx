import './Navbar.scss'
import { images } from '../../constants'

export function Navbar() {
    return (
        <nav>
            <div>
                <img src={images.logoDV} alt="Logo - Douglas Vinicio " />
            </div>
        </nav>
    )
}