import React from 'react'
import { DotNavigation, NetworkIcons } from '../components'

const Wrapper = (Component, idName, classNames) => function HOC(){
    return (
        <div id={idName} className={`app__container ${classNames}`}>
            <NetworkIcons />
            <div className='app__wrapper app__flex'>
                <Component />
            </div>
            <DotNavigation active={idName}/>
        </div>
    )
}

export default Wrapper