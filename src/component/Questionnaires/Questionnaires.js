import React from 'react';

import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

import QuestionnairesCard from './QuestionnairesCard/QuestionnairesCard';

import classes from './Questionnaires.module.scss'

import card1 from './imgs/card1.png'

const data = [
    {
        img: card1,
        title: 'Хакатон Ростов-на-дону 2023',
        description: 'Ищу команду для участия в хакато и тут ещё много текста',
        photos: [card1, card1, card1, card1, card1, card1]
    },
    {
        img: card1,
        title: 'Хакатон Ростов-на-дону 2023',
        description: 'Ищу команду для участия в хакато и тут ещё много текста',
        photos: []
    }
]

const Questionnaires = ({ id, go }) => {
    return (
        <Panel id={id}>
            <PanelHeader before={<PanelHeaderBack onClick={go} data-to="home"/>}>
                Анкеты
            </PanelHeader>
            <div className={classes.cards}>
                {data.map(item => (
                    <QuestionnairesCard
                        img={item.img}
                        title={item.title}
                        description={item.description}
                        photos={item.photos}
                    />
                ))}
            </div>
        </Panel>
    )
}

export default Questionnaires
