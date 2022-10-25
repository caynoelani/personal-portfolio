import React from 'react'

const DotNavigation = ({active}) => {
    return (
        <div className='app__navigation'>
            { ['home', 'about', 'work', 'skills', 'contact'].map( (item, index) => (
                <a 
                    href={`#${item}`}
                    key={item+index}
                    className="app__navigation-dot"
                    style={active === item ? {backgroundColor: '#0096E2' }: {}} />
            ))}
        </div>
    )
}

export default DotNavigation