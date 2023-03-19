import React, {useState} from 'react';

import { Panel, PanelHeader, PanelHeaderBack, Group, Gradient, Avatar, Title, Text, Div, FormItem, Select, Button, Textarea } from '@vkontakte/vkui';
import Checkbox from '../Checkbox/Checkbox';
import Footer from '../Footer/Footer';

const StartPage = ({ id, go, activePanel }) => {
    const [checked, setChecked] = useState(new Set());
    const [sizeY, setSizeY] = useState('');
    const [city, setCity] = useState('');
    
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
    return (
        <Panel id={id}>
            <PanelHeader before={<PanelHeaderBack onClick={go} data-to="home"/>}/>
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
                <FormItem top="О себе">
                    <Textarea />
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
                <FormItem top="город">
                    <Select
                        value={sizeY}
                        onChange={(e) => setSizeY(e.target.value)}
                        options={[
                        { label: 'Ростов-на-Дону', value: 'Ростов-на-Дону' },
                        ]}
                    />
                </FormItem>
            </Div>
            <Div>
                <FormItem top="учебное заведение">
                    <Select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        options={[
                        { label: 'ДГТУ', value: 'ДГТУ' },
                        ]}
                    />
                </FormItem>
            </Div>
            <Div style={{paddingBottom: '80px'}}>
                <Button size="l" mode="primary" stretched onClick={go} data-to="feed">
                    Найти движ
                </Button>
            </Div>
            <Footer go={go} activePanel={activePanel} />
        </Panel>
    )
}

export default StartPage;
