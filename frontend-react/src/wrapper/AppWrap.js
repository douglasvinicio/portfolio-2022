import React from 'react'
import { NavigationDots, SocialMedia } from '../components'

// export function AppWrap(Component, idName, classNames ) {function HOC(){
//         return (
//             <></>
//         )
//     }
// }

const AppWrap = (Component, idName, classNames) => function HOC(){
    return (
        <div id={idName} className={`app__container ${classNames}`}>
            <SocialMedia />

            <div className="app__wrapper app__flex">
                <Component />

                 <div className='copywright'>
                    <p className="p-text">@2022 Douglas</p>
                    <p className="p-text">All rights reserved</p>
                 </div>
               
            </div> 
          <NavigationDots active={idName} />
        </div>
    )
}

export default AppWrap