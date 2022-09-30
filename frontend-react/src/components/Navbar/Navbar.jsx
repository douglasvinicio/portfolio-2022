import './Navbar.scss'
import { images } from '../../constants'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export function Navbar() {
    const [toogle, setToogle] = useState(false)
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }
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
                    <AnimatePresence>
                        <motion.div
                            transition={{ duration: 1, ease: 'easeOut' }}
                            initial="hidden"
                            animate="visible"
                            variants={variants}
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
                    </AnimatePresence>
                )}
            </div>
        </nav>
    )
}