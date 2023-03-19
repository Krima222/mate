import React, {useState} from 'react';

import { 
    Panel, 
    PanelHeader, 
    PanelHeaderBack, 
    Group, 
    Gradient, 
    Avatar, 
    Title, 
    Text, 
    Div, 
    FormItem, 
    Select, 
    Button, 
    Textarea,
    Alert
} from '@vkontakte/vkui';
import Checkbox from '../Checkbox/Checkbox';
import Footer from '../Footer/Footer';

const StartPage = ({ id, go, activePanel, fetchedUser, userData, setUserData, setPopout }) => {
    const [description, setDescription] = useState('')
    const [checked, setChecked] = useState(new Set());
    const [university, setUniversity] = useState(null);
    const [city, setCity] = useState(null);
    
    const handleChange = (event) => {
        if (event.target.checked) {
            setChecked(set => new Set(set).add(event.target.value))
        } else {
            setChecked(set => {
                const newSet = new Set(set)
                newSet.delete(event.target.value)
                return newSet
            })
        }
    };

    const tag = [
        "Программирование",
        "С++", 
        "Еда", 
        "Data-Science", 
        "Менеджмент", 
        "Fun", 
        "Дизайн", 
        "Тимбилдинг", 
        "DevOps", 
        "Предпринимательство", 
        "Python", 
        "AI"
    ]

    const styles = {
		margin: 0,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		padding: 32,
	};

    const submit = e => {
        if (!checked.size) {
            setPopout(
                <Alert
                    header="Не выбран ни один тег"
                    onClose={() => setPopout(null)}
                />
            )
            return
        }
        if (!city) {
            setPopout(
                <Alert
                    header="Город не выбран"
                    onClose={() => setPopout(null)}
                />
            )
            return
        }
        if (!university) {
            setPopout(
                <Alert
                    header="Учебное заведение не выбрано"
                    onClose={() => setPopout(null)}
                />
            )
            return
        }
        setUserData({
            description,
            city,
            university,
            tags: Array.from(checked)
        })
        go(e)
    }

    return (
        <Panel id={id}>
            <PanelHeader before={<PanelHeaderBack onClick={go} data-to="home"/>}>
                Профиль
            </PanelHeader>
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
                        {!userData ? null : `${userData.city}, ${userData.university}`}
                    </Text>
                </Gradient>
            </Group>
            <Div>
                <FormItem top="О себе">
                    <Textarea value={description} onChange={e => setDescription(e.target.value)} />
                </FormItem>
            </Div>
            <Div>
                <div style={{display: "flex", flexWrap: "wrap", gap: "8px"}}>
                    {tag.map((elem) => (
                        <Checkbox 
                            id={elem} 
                            name="checkbox1" 
                            value={elem} 
                            checked={checked.has(elem)} 
                            onChange={handleChange} 
                            text={elem} 
                        />
                    ))}
                </div>
            </Div>
            <Div>
                <FormItem top="Город">
                    <Select
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Не выбран"
                        options={[
                            { label: 'Ростов-на-Дону', value: 'Ростов-на-Дону' },
                        ]}
                    />
                </FormItem>
            </Div>
            <Div>
                <FormItem top="Учебное заведение">
                    <Select
                        onChange={(e) => setUniversity(e.target.value)}
                        placeholder="Не выбрано"
                        options={[
                            { label: 'ДГТУ', value: 'ДГТУ' },
                        ]}
                    />
                </FormItem>
            </Div>
            <Div style={{paddingBottom: '80px'}}>
                <Button size="l" mode="primary" stretched onClick={submit} data-to="feed">
                    Найти движ
                </Button>
            </Div>
            <Footer go={go} activePanel={activePanel} />
        </Panel>
    )
}

export default StartPage;
