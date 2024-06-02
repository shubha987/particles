import React from 'react'
import classes from '../App.module.css'

const Header = () => {
    return (
        <>
            <div className={`row ${classes.header}`}>
                <div className={`col-12 ${classes.title}`}>
                    <p>
                      Coming Soon
                    </p>
                </div>
            </div>
        </>
    )
}

export default Header