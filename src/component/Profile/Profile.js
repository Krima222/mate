import React from 'react';

import { Panel } from '@vkontakte/vkui';
import Footer from '../Footer/Footer';
import classes from './Profile.module.scss'

const Profile = ({id, go, fetchedUser, userData}) => (
    <Panel id={id}>
        <div className={classes.card__wrapper}>
            <div className={classes.card}>
                <img className={classes.card__img} src={fetchedUser.photo_200} alt="thumbnail" />
                <div className={classes.card__content}>
                    <h2 className={classes.card__title}>{`${fetchedUser.first_name} ${fetchedUser.last_name}`}</h2>
                    <span className={classes.card__note}>{userData.city}, {userData.university}</span>
                    <span className={classes.card__description}>{userData.description}</span>
                    <div className={classes.card__tags}>
                        {userData.tags.map(tag => <span className={classes.card__tag}>{tag}</span>)}
                    </div>
                </div>
            </div>
        </div>
        <Footer go={go} />
    </Panel>
);

export default Profile
