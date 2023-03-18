import React, { useMemo } from 'react';

import TinderCard from 'react-tinder-card'

import sliderContext from './Context'

import classes from './Slider.module.scss'

const Slider = ({ children }) => {
    const childRefs = useMemo(
        () =>
          Array(children.length)
            .fill(0)
            .map((i) => React.createRef()),
        []
      )
    
    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }

    return (
        <div className={classes.slider__wrapper}>
            <div className={classes.slider}>
                {children.map((item, i) => (
                    <sliderContext.Provider value={{
                        swipe: dir => {
                            childRefs[i].current.swipe(dir)
                        }
                    }}>
                        {console.log(i === children.length - 1)}
                        <TinderCard
                            key={i}
                            ref={childRefs[i]}
                            className={classes.slider__card}
                            onSwipe={onSwipe}
                            preventSwipe={i === 0 ? ['up', 'down', 'left', 'right'] : ['up', 'down']}
                            flickOnSwipe
                        >
                            {item}
                        </TinderCard>
                    </sliderContext.Provider>
                ))}
            </div>
        </div>
    )
}

export default Slider
