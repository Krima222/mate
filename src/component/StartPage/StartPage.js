import React from 'react';

import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

const StartPage = ({id, go}) => (
    <Panel id={id}>
        <PanelHeader
			before={<PanelHeaderBack onClick={go} data-to="home"/>}
		>dddddddddddd</PanelHeader>
        
    </Panel>
)

export default StartPage;
