import React, { useContext } from 'react';
import clsx from 'clsx'

import sliderContext from '../Slider/Context';

import classes from './ActiveCard.module.scss'

import like from './like.svg'
import dislike from './dislike.svg'

const ActiveCard = ({ img, icon, title, description, tags, button, isLast, action }) => {
    const { swipe } = useContext(sliderContext)
    return (
        <div className={classes.card__wrapper}>
            <div className={classes.card}>
                {img ? <img className={clsx(classes.card__img, {[classes.card__img_last]: isLast})} src={img} alt="thumbnail" /> : null}
                <div className={classes.card__content}>
                    {!icon ? null : (
                        <div className={classes.card__icon}>
                            <img src={icon} alt="icon" />
                        </div>
                    )}
                    <h2 className={classes.card__title}>{title}</h2>
                    <span className={classes.card__description}>{description}</span>
                    {!tags ? null : (
                        <div className={classes.card__tags}>
                            {tags.map(tag => <span className={classes.card__tag}>{tag}</span>)}
                        </div>
                    )}
                    {button ? (
                        <button className={classes.card__btn}>
                            {button}
                        </button>
                    ) : (
                        <>
                            <div 
                                className={classes.card__dislike}
                                onClick={() => swipe('left')}
                                onTouchEnd={() => swipe('left')}
                            >
                                <img src={dislike} alt="dislike" />
                            </div>
                            <div 
                                className={classes.card__like} 
                                onClick={() => swipe('right')}
                                onTouchEnd={() => swipe('right')}
                            >
                                <img src={like} alt="like" />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ActiveCard
