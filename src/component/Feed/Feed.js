import React from 'react';

import Slider from '../Slider/Slider';
import ActiveCard from '../ActiveCard/ActiveCard';
import Footer from '../Footer/Footer';

import { Panel } from '@vkontakte/vkui';

import img from './socialEng.png'
import cat from './cat.gif'
import icon from './dvij.svg'

const cards = [
    {
        img,
        title: 'Хакатон Ростов-на-дону 2023',
        description: 'Ищу команду для участия в хакатоне. Нужны программисты на плюсах, хочу подключить нейронки и там по идее будет очень много вкусной еды! Всех желающих жду в чатике ((:',
        tags: ['Программирование', 'С++', 'Еда', 'Data-Science', 'Менеджмент']
    },
    {
        img,
        title: 'Хакатон Ростов-на-дону 2023',
        description: 'Ищу команду для участия в хакатоне. Нужны программисты на плюсах, хочу подключить нейронки и там по идее будет очень много вкусной еды! Всех желающих жду в чатике ((:',
        tags: ['Программирование', 'С++', 'Еда', 'Data-Science', 'Менеджмент']
    },
    {
        img,
        title: 'Хакатон Ростов-на-дону 2023',
        description: 'Ищу команду для участия в хакатоне. Нужны программисты на плюсах, хочу подключить нейронки и там по идее будет очень много вкусной еды! Всех желающих жду в чатике ((:',
        tags: ['Программирование', 'С++', 'Еда', 'Data-Science', 'Менеджмент']
    },
    {
        img: cat,
        isLast: true,
        icon,
        title: 'Предложи свой движ',
        button: 'Создать движ',
        action: () => console.log('aaaaa'),
        description: 'Это весь движ, который мог подойти тебе, но ты можешь создать анкету своего мероприятия или проекта, чтобы другие люди присоединились к тебе',
    }
]

const Feed = ({ id, go, activePanel}) => (
    <Panel id={id}>
        <Slider>
            {cards.reverse().map(item => (
                <ActiveCard 
                    img={item.img}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    button={item.button}
                    action={go}
                    isLast={item.isLast}
                    tags={item.tags}
                />
            ))}
        </Slider>
        <Footer go={go} activePanel={activePanel} />
    </Panel>
);

export default Feed;
