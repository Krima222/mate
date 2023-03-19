import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import HomePage from './component/HomePage/HomePage';
import StartPage from './component/StartPage/StartPage';
import FormPage from './component/FormPage/FormPage';
import Feed from './component/Feed/Feed';
import Questionnaires from './component/Questionnaires/Questionnaires';

import img from './socialEng.png'

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
		bridge.send('VKWebAppShowSlidesSheet', {
			slides: [
			  {
				media: {
				  blob: img,
				  type: 'image'
				},
				title: 'Заголовок слайда',
				subtitle: 'Описание слайда под заголовком'
			  }
			 ]})
			.then((data) => { 
			  if (data.result) {
				// Слайды показаны
			  }
			})
			.catch((error) => {
			  // Ошибка
			  console.log(error);
		});
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
								<StartPage id="start" go={go} activePanel={activePanel} />
								<FormPage id="form" go={go} activePanel={activePanel} />
								<Feed id="feed" go={() => setActivePanel("form")}/>
								<Questionnaires id="questionnaires" go={go} />
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
