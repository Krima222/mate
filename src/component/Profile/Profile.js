import React from 'react';

import { Panel, PanelHeader, PanelHeaderBack, Group, Gradient, Avatar, Title, Text, AdaptivityProvider, ModalCardBase, Div, ViewWidth } from '@vkontakte/vkui';
import Footer from '../Footer/Footer';

const Profile = ({id, go, fetchedUser, userData}) => (
    <Panel id={id}>
        <PanelHeader
			before={<PanelHeaderBack onClick={go} data-to="feed"/>}
		>Назад</PanelHeader>
        <Group>
        	<Gradient mode="tint" style={styles}>
				<Avatar size={96} src={!fetchedUser ? null : fetchedUser.photo_200} />
				<Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="2">
					{!fetchedUser ? null : `${fetchedUser.first_name} ${fetchedUser.last_name}`}
				</Title>
				<Text
					style={{
						marginBottom: 24,
						color: 'var(--vkui--color_text_secondary)',
					}}
				>
					Ростов-на-Дону, ДГТУ
				</Text>
        	</Gradient>
		</Group>
        <Text style={{ marginBottom: 10 }}>Мобильная версия</Text>
            <AdaptivityProvider viewWidth={ViewWidth.MOBILE}>
                <ModalCardBase
                style={{ width: 320, margin: '0 auto' }}
                subheader={userData.description}
                />
                <Div>
                    <div className={classes.card__tags}>
                        {userData.tags.map(tag => <span className={classes.card__tag}>{tag}</span>)}
                    </div>
                </Div>
            </AdaptivityProvider>
        <Footer/>
    </Panel>
);

export default Profile
