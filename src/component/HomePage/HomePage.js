import React from 'react';

import { Panel, Button, Div, Gradient, Title, Avatar, Text, Group, ModalCardBase, ButtonGroup } from '@vkontakte/vkui';

const HomePage = ({id, go}) => {
	const styles = {
		margin: 0,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		padding: 32,
	};
	return (
		<Panel id={id}>
		<Group>
        	<Gradient mode="tint" style={styles}>
				<Avatar size={96} />
				<Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="2">
					Елизавета Корчагина
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
		<Div>
			<ModalCardBase
				style={{ width: 320, margin: '0 auto' }}
				header="Заполни свою анкету"
				subheader="Указав свои навыки, тебе проще будет найти единомышленников для совместной работы и мероприятий"
				actions={
					<ButtonGroup mode="horizontal" gap="s" stretched>
						<Button size="l" mode="primary" stretched onClick={go} data-to="start">
							Попробовать
						</Button>
					</ButtonGroup>
				}
			/>
		</Div>
		<Div>
			<ModalCardBase
				style={{ width: 320, margin: '0 auto' }}
				header="Создай свой движ 🤙"
				subheader="Укажи, какие люди тебе необходимы для мероприятия"
				actions={
					<ButtonGroup mode="horizontal" gap="s" stretched>
						<Button size="l" mode="primary" stretched onClick={go} data-to="form">
							Попробовать
						</Button>
					</ButtonGroup>
				}
			/>
		</Div>
	</Panel>
	)
}

export default HomePage;
