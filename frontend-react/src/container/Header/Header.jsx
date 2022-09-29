import './Header.scss'
import { motion } from 'framer-motion'
import { images } from '../../constants'

export function Header() {
    const scaleVariants = {
        whileInView: {
            scale: [0,1],
            opacity: [0,1],
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        }
    }
    return (
        <div id="home" className="app__header app__flex">
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1]}}
                transition={{ durantion: 0.9}}
                classsName="app__header-info"
            >

                <div className="app__header-badge">
                    <div className="badge-cmp app__flex">
                        
                        <div style={{ marginLeft: 0 }}>
                            <p className="p-text">Hello, I am</p>
                            <h1 className="head-text">Douglas Vinicio</h1>
                        </div>
                    </div>                

                    <div className="tag-cmp app__flex">
                        <p className="p-text"> Web Developer 🧑🏽‍💻</p>
                        <p className="p-text">Basketball Player 🏀</p>
                        <p className="p-text">Drone Pilot 🛸</p>                  
                    </div>
                </div>
            </motion.div>

            <motion.div 
            whileInView={{ opacity: [0, 1]}}
            transition={{ durantion: 0.5, delayChildren: 0.5}}
            className="app__header-img"
            >
                <img src={images.profile} alt="" />
                <motion.img
                 whileInView={{ scale : [ 0, 1 ]}}
                 transition={{ durantion: 1, ease: "easeInOut"}}
                 src={images.circle}
                 alt="profile-circle"
                 className="overlay_circle"
                />                
            </motion.div>

            <motion.div
            variant={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="app__header-circles"
            >
                {[images.flutter, images.redux, images.sass].map((circle, index) => (
                    <div className='circle-cmp app__flex' key={`circle-${index}`}>
                        <img src={circle} alt="circle" />
                    </div>
                ))}
            </motion.div>
        </div>
    )
}