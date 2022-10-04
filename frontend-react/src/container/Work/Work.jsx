import './Work.scss'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AiFillEye, AiFillGithub, AiFillVideoCamera } from 'react-icons/ai'

import { AppWrap } from 'framer-motion'
import { urlFor, client } from '../../client'

export function Work() {
    const [ activeFilter, setActiveFilter ] = useState('All')
    const [ animateCard, setAnimateCard ] = useState({ y:0, opacity: 1})
    const [ works, setWorks ] = useState([])
    const [ filterWorks, setFilterWorks ] = useState([])

    useEffect(()=> {
        const query = '*[_type == "works"]'

        client.fetch(query)
        .then((data) => {
            setWorks(data)
            setFilterWorks(data)
        })
    }, [])

    const handleWorkFilter = (item) => {

    }
    return (
        <>
           <h2 className="head-text">               
            My creative <span>portfolio</span>
            </h2> 
            <div className="app__work-filter">
                {['Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleWorkFilter(item)}
                        className={`app__work-filter app__flex p-text ${activeFilter === item ?'item-active' : '' }`}
                    >
                        {item}
                    </div>
                ))}
            </div>
            
            <motion.div
                animate={animateCard}
                transition={{duration: 0.5, delayChildren: 0.5}}
                clasName="app__work-portfolio"
            >
                {filterWorks.map((work, index) => (
                    <div className="app__work-item app__flex" key={index}>
                        <div className="app__work-img app__flex">
                            <img src={work.imgUrl} alt={work.name} />
                        </div>
                    </div>
                ))}
            </motion.div>
        </>
    )
}