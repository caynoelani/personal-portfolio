import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'

const NetworkIcons = () => {
    return (
        <div className='app__social'>
            <a href="">
                <div>
                    <BsLinkedin/>
                </div>
            </a>
            <a href="">
                <div>
                    <FaGithubSquare/>
                </div>
            </a>
        </div>
    )
}

export default NetworkIcons