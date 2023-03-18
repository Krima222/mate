import React from 'react';

import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

const FormPage = ({id, go}) => (
    <Panel id={id}>
        <PanelHeader
			before={<PanelHeaderBack onClick={go} data-to="feed"/>}
		>dddddddddddd</PanelHeader>
        
    </Panel>
);

export default FormPage;