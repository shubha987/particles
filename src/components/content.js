import React from 'react'
import classes from '../App.module.css'
import Header from './header'


const Content = () => {
    return (
        <div className={`row ${classes.contentContainer}`}>
            <div className={`col-12 ${classes.content}`}>
                <Header />
            </div>
        </div>
    )
}

export default Content