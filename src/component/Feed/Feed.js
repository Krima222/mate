import React from 'react';

import Slider from '../Slider/Slider';
import ActiveCard from '../ActiveCard/ActiveCard';
import Footer from '../Footer/Footer';

import { Panel, Div } from '@vkontakte/vkui';

import cat from './cat.gif'
import icon from './dvij.svg'
import rel from './rel.jpg'
import colb from './colb.jpg'
import dogs from './dogs.jpeg'
import sport from './sport.jpg'
import emo from './emo.jpg'

const cards = [
    {
        img: rel,
        title: 'Points',
        description: 'Привет мы создаем сиартап о релокации и лигализации людей в новые страны. Мы ищем разработчиков, проджект менеджеров и дизайнеров. Мы обязательно рассмотрим твою заявку',
        tags: ['Программирование', 'С++']
    },
    {
        img: colb,
        title: 'Пробирка',
        description: 'Ищем команду для разработки стартапа. В планах реализовать сервис для удобной сдачи анализов',
        tags: ['Программирование', 'Менеджмент']
    },
    {
        img: dogs,
        title: 'Doggy',
        description: 'Ищем разработчиков для создания инновационного сервиса случки собак. Мы создаем тиндер для собак и ждем тебя в нашу команду ',
        tags: ['Программирование', 'Data-Science']
    },
    {
        img: sport,
        title: 'ProSport',
        description: 'Самая спортивная команда нуждается во фронтендере для сайта про спорт! Вознаграждение - бесплатный поход в зал))))',
        tags: ['Программирование', 'Еда', 'Дизайн']
    },
    {
        img: emo,
        title: 'Aniemore',
        description: 'Хочешь научиться управлять своими эмоциями? Наш ИИ поможет тебе! Приходи на наш крутой тренинг',
        tags: ['Data-Science']
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
        <div style={{height: '40px'}}></div>
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
