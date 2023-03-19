import React, {useState} from 'react';

import { Panel, PanelHeader, usePlatform, useAdaptivityConditionalRender, Platform, Counter, Group, SplitLayout, SplitCol, Cell, Epic, Tabbar, TabbarItem } from '@vkontakte/vkui';
import { Icon28NewsfeedOutline, Icon28UserCircleOutline, Icon28MessageOutline } from '@vkontakte/icons';
const Footer = () => {
    const platform = usePlatform();
    const { viewWidth } = useAdaptivityConditionalRender();
    const [activeStory, setActiveStory] = useState('home');
    const onStoryChange = (e) => setActiveStory(e.currentTarget.dataset.story);
    const isVKCOM = platform !== Platform.VKCOM;
    return (
            <SplitLayout
                // header={isVKCOM && <PanelHeader separator={false} />}
                style={{ justifyContent: 'center' }}
            >
            {viewWidth.tabletPlus && (
                <SplitCol className={viewWidth.tabletPlus.className} fixed width={280} maxWidth={280}>
                <Panel>
                    {isVKCOM && <PanelHeader />}
                    <Group>
                    <Cell
                        disabled={activeStory === 'start'}
                        style={
                        activeStory === 'start'
                            ? {
                                backgroundColor: 'var(--vkui--color_background_secondary)',
                                borderRadius: 8,
                            }
                            : {}
                        }
                        data-story="start"
                        onClick={onStoryChange}
                        before={<Icon28NewsfeedOutline />}
                    >
                        start
                    </Cell>
                    <Cell
                        disabled={activeStory === 'form'}
                        style={
                        activeStory === 'form'
                            ? {
                                backgroundColor: 'var(--vkui--color_background_secondary)',
                                borderRadius: 8,
                            }
                            : {}
                        }
                        data-story="form"
                        onClick={onStoryChange}
                        before={<Icon28NewsfeedOutline />}
                    >
                        form
                    </Cell>
                    <Cell
                        disabled={activeStory === 'home'}
                        style={
                        activeStory === 'home'
                            ? {
                                backgroundColor: 'var(--vkui--color_background_secondary)',
                                borderRadius: 8,
                            }
                            : {}
                        }
                        data-story="home"
                        onClick={onStoryChange}
                        before={<Icon28MessageOutline />}
                    >
                        messages
                    </Cell>
                    <Cell
                        disabled={activeStory === 'home'}
                        style={
                        activeStory === 'home'
                            ? {
                                backgroundColor: 'var(--vkui--color_background_secondary)',
                                borderRadius: 8,
                            }
                            : {}
                        }
                        data-story="home"
                        onClick={onStoryChange}
                        before={<Icon28UserCircleOutline />}
                    >
                        profile
                    </Cell>
                    </Group>
                </Panel>
                </SplitCol>
            )}

            <SplitCol width="100%" maxWidth="560px" stretchedOnMobile autoSpaced>
                <Epic
                    activeStory={activeStory}
                    tabbar={
                        viewWidth.tabletMinus && (
                        <Tabbar className={viewWidth.tabletMinus.className}>
                            <TabbarItem
                                onClick={onStoryChange}
                                selected={activeStory === 'start'}
                                data-story="start"
                                text="Движ"
                            >
                            <Icon28NewsfeedOutline />
                            </TabbarItem>
                            <TabbarItem
                                onClick={onStoryChange}
                                selected={activeStory === 'form'}
                                data-story="form"
                                text="Анкеты"
                            >
                            <Icon28NewsfeedOutline />
                            </TabbarItem>
                            <TabbarItem
                                onClick={onStoryChange}
                                selected={activeStory === 'home'}
                                data-story="home"
                                indicator={
                                    <Counter size="s" mode="prominent">
                                        12
                                    </Counter>
                                }
                            text="Чаты"
                            >
                            <Icon28MessageOutline />
                            </TabbarItem>
                            <TabbarItem
                                onClick={onStoryChange}
                                selected={activeStory === 'home'}
                                data-story="home"
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
        </SplitLayout>
    )
}

export default Footer;