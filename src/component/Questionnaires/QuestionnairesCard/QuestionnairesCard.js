import React from 'react';

import { UsersStack } from '@vkontakte/vkui';

import classes from './QuestionnairesCard.module.scss'

const QuestionnairesCard = ({ img, title, description, photos }) => {
    const count = photos ? photos.length : 0
    let countMessage
    switch (count) { // надеюсь на это никто не смотрит
        case 0:
            countMessage = 'Новых заявок пока нет'
            break;
        case 1:
            countMessage = '1 заявка'
            break;
        case 2:
            countMessage = '2 заявки'
            break;
        case 3:
            countMessage = '3 заявки'
            break;
        case 4:
            countMessage = '4 заявки'
            break;
        default:
            countMessage = `${count} заявок`
            break;
    }
    return (
        <div className={classes.card}>
            <div className={classes.card__img}>
                <img src={img} alt="thumbnail" />
            </div>
            <div className={classes.card__contentWrapper}>
                <div className={classes.card__content}>
                    <h2 className={classes.card__title}>{title}</h2>
                    <span className={classes.card__description}>{description}</span>
                    <UsersStack photos={photos}>
                        <span className={classes.card__count}>{countMessage}</span>
                    </UsersStack> 
                </div>
            </div>
        </div>
    )
}

export default QuestionnairesCard
