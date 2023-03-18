import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import HomePage from './component/HomePage/HomePage';
import StartPage from './component/StartPage/StartPage';
import FormPage from './component/FormPage/FormPage';
import Feed from './component/Feed/Feed';

const App = () => {
	const [activePanel, setActivePanel] = useState('feed');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout popout={null}>
						<SplitCol>
							<View activePanel={activePanel}>
								<HomePage id="home" go={go} />
								<StartPage id="start" go={go} />
								<FormPage id="form" go={go} />
								<Feed id="feed" />
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
