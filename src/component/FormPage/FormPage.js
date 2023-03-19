import React, {useState} from 'react';

import { Panel, PanelHeader, PanelHeaderBack, Group, Gradient, Avatar, Div, FormItem, Select, Textarea, DatePicker, Button } from '@vkontakte/vkui';
import Checkbox from '../Checkbox/Checkbox';
import Footer from '../Footer/Footer';

const FormPage = ({ id, go, activePanel }) => {
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
            <Group>
                <FormItem top="Дата окончания мероприятия">
                    <DatePicker
                        min={{ day: 1, month: 1, year: 2023 }}
                        max={{ day: 1, month: 1, year: 2025 }}
                        onDateChange={(value) => {
                            console.log(value);
                        }}
                        dayPlaceholder="ДД"
                        monthPlaceholder="ММММ"
                        yearPlaceholder="ГГГГ"
                    />
                </FormItem>
            </Group>
            <Div style={{paddingBottom: '80px'}}>
                <Button size="l" mode="primary" stretched onClick={go} data-to="feed">
                    Создать движ
                </Button>
            </Div>
            <Footer go={go} activePanel={activePanel} />
        </Panel>
    )
}

export default FormPage;