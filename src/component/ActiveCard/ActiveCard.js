import React from 'react';

import { Gallery } from '@vkontakte/vkui';

import classes from './ActiveCard.module.scss'

const ActiveCard = ({children}) => {
    return (
        <div className={classes.slider__wrapper}>
            <Gallery slideWidth="100%" className={classes.slider} align="center">
                {children}
            </Gallery>
        </div>
    )
}

{/* <ModalCardBase
    header="ffffffffffffffffffffffffffff"
    subheader="asdsadsadsadsadsadsadsadsad"
/> */}

export default Slider