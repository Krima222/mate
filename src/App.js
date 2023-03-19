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

const data = [
    {
        img,
        title: 'Хакатон Ростов-на-дону 2023',
        description: 'Ищу команду для участия в хакато и тут ещё много текста',
        photos: [img, img, img, img, img, img]
    },
    {
        img,
        title: 'Хакатон Ростов-на-дону 2023',
        description: 'Ищу команду для участия в хакато и тут ещё много текста',
        photos: []
    }
]

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	const [activities, setActivities] = useState(data)

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

	useEffect(() => {
		// console.log(fetchedUser)
	}, [fetchedUser])

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	const addActivity = ({ img, name, description }) => {
		setActivities(state => [...state, {
			img, 
			title: name,
			description
		}])
	}

	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout popout={popout}>
						<SplitCol>
							<View activePanel={activePanel}>
								<HomePage id="home" go={go} fetchedUser={fetchedUser} />
								<StartPage id="start" go={go} activePanel={activePanel} fetchedUser={fetchedUser} />
								<FormPage id="form" go={() => setActivePanel("questionnaires")} activePanel={activePanel} setPopout={setPopout} handleSubmit={addActivity} count={activities.length} />
								<Feed id="feed" go={() => setActivePanel("form")}/>
								<Questionnaires id="questionnaires" go={go} data={activities} />
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
