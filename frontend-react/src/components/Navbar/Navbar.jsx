import './Navbar.scss'
import { images } from '../../constants'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export function Navbar() {    
    const [toogle, setToogle] = useState(false)
    console.log(toogle)      
    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={images.logoDV} alt="Logo - Douglas Vinicio " />
            </div>
            <ul className='app__navbar-links'>
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                    <li className='app__flex p-text' key={`link-${item}`}>
                        <div></div>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>

            <div className='app__navbar-menu'>
                <HiMenuAlt4 onClick={() => setToogle(true)} />

                {toogle && (                                                                          
                    <motion.div
                    layout
                    whileInView={{ x: [100, 0]}}
                    transition={{ duration: 0.8, ease: 'easeOut'}}                    
                    >
                        <HiX onClick={() => setToogle(false)} />
                        <ul>
                        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                            <li key={item}>                                
                                <a href={`#${item}`} onClick={() => setToogle(false)}>{item}</a>
                            </li>
                ))}
                        </ul>
                    </motion.div>                    
                )}                
            </div>
        </nav>
    )
}