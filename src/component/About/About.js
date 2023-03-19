import React from 'react';
import { Panel, Text, AdaptivityProvider, ModalCardBase, Image, ButtonGroup, Button, ViewWidth } from '@vkontakte/vkui';

import smile from './smile.png'
const About = ({ go }) => {
    return (
        <Panel>
            <AdaptivityProvider viewWidth={ViewWidth.MOBILE}>
                <ModalCardBase
                style={{ width: 320, margin: '80px auto 0' }}
                icon={<Image borderRadius="m" src={smile} size={72} />}
                header="Расскажи о себе"
                subheader="Опиши свои умения и навыки, расскажи, что тебе интересно и чем ты можешь быть полезен другим, а мы поможем найти движ для тебя :)"
                actions={
                        <ButtonGroup mode="horizontal" gap="s" stretched>
                            <Button size="l" mode="primary" stretched onClick={go} data-to="start">
                                Заполнить профиль
                            </Button>
                        </ButtonGroup>
                    }
                />
            </AdaptivityProvider>
        </Panel>
    )
}

export default About;