import React from 'react';

import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

import QuestionnairesCard from './QuestionnairesCard/QuestionnairesCard';
import Footer from '../Footer/Footer';

import classes from './Questionnaires.module.scss'

const Questionnaires = ({ id, go, data, activePanel }) => {
    return (
        <Panel id={id}>
            {/* <PanelHeader before={<PanelHeaderBack onClick={go} data-to="home"/>}>
                Анкеты
            </PanelHeader> */}
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
            <Footer go={go} activePage={activePanel} />
        </Panel>
    )
}

export default Questionnaires
