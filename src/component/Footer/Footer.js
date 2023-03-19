import React from 'react';

import { useAdaptivityConditionalRender, SplitCol, Epic, Tabbar, TabbarItem, Image } from '@vkontakte/vkui';
import { Icon28NewsfeedOutline, Icon28UserCircleOutline, Icon28MessageOutline } from '@vkontakte/icons';

import { ReactComponent as Hand } from './hand.svg';

import classes from './Footer.module.scss'


const Footer = ({ activePage, go }) => {
    const { viewWidth } = useAdaptivityConditionalRender();
    return (
        <SplitCol width="100%" maxWidth="560px" stretchedOnMobile autoSpaced>
            <Epic
                activeStory={activePage}
                tabbar={
                    viewWidth.tabletMinus && (
                    <Tabbar className={viewWidth.tabletMinus.className} style={{padding: '6px 0 10px'}}>
                        <TabbarItem
                            onClick={go}
                            selected={activePage === 'start'}
                            data-to="start"
                            text="Движ"
                        >
                        <div className={classes.img}>
                            <Hand />
                        </div>
                        </TabbarItem>
                        <TabbarItem
                            onClick={go}
                            selected={activePage === 'questionnaires'}
                            data-to="questionnaires"
                            text="Анкеты"
                        >
                        <Icon28NewsfeedOutline />
                        </TabbarItem>
                        <TabbarItem
                            onClick={go}
                            selected={activePage === 'home'}
                            data-to="home"
                            text="Чаты"
                        >
                        <Icon28MessageOutline />
                        </TabbarItem>
                        <TabbarItem
                            onClick={go}
                            selected={activePage === 'home'}
                            data-to="home"
                            text="Профиль"
                        >
                            <Icon28UserCircleOutline />
                        </TabbarItem>
                    </Tabbar>
                    )
                }
                >
            </Epic>
        </SplitCol>
    )
}

export default Footer;