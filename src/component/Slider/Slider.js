import React from 'react';

import { Gallery } from '@vkontakte/vkui';

import classes from './Slider.module.scss'

const Slider = ({children}) => {
    return (
        <div className={classes.slider__wrapper}>
            <Gallery slideWidth="100%" className={classes.slider} align="center">
                {children}
            </Gallery>
        </div>
    )
}

export default Slider
