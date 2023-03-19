import React, { useState } from 'react';

import {
    Panel, 
    PanelHeader, 
    Title, 
    PanelHeaderBack, 
    Group, 
    Gradient, 
    Input, 
    Avatar, 
    Div, 
    FormItem, 
    Select, 
    Textarea, 
    DatePicker, 
    Button,
    Alert,
    File
} from '@vkontakte/vkui';

import { Icon24Camera } from '@vkontakte/icons'

import Checkbox from '../Checkbox/Checkbox';
import Footer from '../Footer/Footer';

import classes from './FormPage.module.scss'

const FormPage = ({ id, go, activePanel, setPopout, count, handleSubmit }) => {
    const [img, setImg] = useState(null)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [checked, setChecked] = useState(new Set());
    const [university, setUniversity] = useState(null);
    const [city, setCity] = useState(null);
    const [date, setDate] = useState(null)
    
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
	}

    const selectImg = e => {
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            setImg(reader.result)
        }
    }

    const submit = () => {
        if (!img) {
            setPopout(
                <Alert
                    header="Картинка не выбрана"
                    onClose={() => setPopout(null)}
                />
            )
            return
        }
        if (!name) {
            setPopout(
                <Alert
                    header="Название движа не заполнено"
                    onClose={() => setPopout(null)}
                />
            )
            return
        }
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
        if (!date || !date.day || !date.month || !date.year) {
            setPopout(
                <Alert
                    header="Дата начала не заполнена"
                    onClose={() => setPopout(null)}
                />
                )
                return
    }
    if (count >= 4) {
        setPopout(
                <Alert
                header="Вы превысили лимит"
                text="Максимум 4 движа"
                onClose={() => setPopout(null)}
            />
        )
        return
    }
    handleSubmit({
        img,
        name,
        description,
        checked: Array.from(checked),
        university,
        city
    })
    go()
    setTimeout(() => {
        setPopout(
            <Alert
                header="Движ успешно создан!"
                onClose={() => {
                    setPopout(null)
                }}
            />
        )
    }, 1)
    }

    return (
        <Panel id={id}>
            <PanelHeader before={<PanelHeaderBack onClick={go} data-to="home"/>}/>
            <Group>
                <Gradient mode="tint" style={styles}>
                    {img ? (
                        <div className={classes.form__img}>
                            <img 
                                dis
                                src={img}
                                alt="thumbnail"
                            />
                        </div>
                    ) : (
                        <File 
                            size="l"
                            className={classes.form__imgInput} 
                            onChange={selectImg}
                        >
                            <Icon24Camera role="presentation" className={classes.form__imgElem} />
                        </File>
                    )}
                </Gradient>
            </Group>
            <Div>
                {!name ? null : (
                    <Title 
                        style={{ 
                            marginBottom: 8, 
                            marginTop: 0, 
                            whiteSpace: 'nowrap', 
                            textOverflow: 'ellipsis',
                            display: 'block',
                            overflow: 'hidden'
                        }} level="2" weight="2">
                        {name}
                    </Title>
                )}
                <FormItem top="Название">
                    <Input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </FormItem>
                <FormItem top="О движе">
                    <Textarea
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
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
                        value={city}
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
                        value={university}
                        onChange={(e) => setUniversity(e.target.value)}
                        placeholder="Не выбрано"
                        options={[
                            { label: 'ДГТУ', value: 'ДГТУ' },
                        ]}
                    />
                </FormItem>
            </Div>
            <Group>
                <FormItem top="Дата начала мероприятия">
                    <DatePicker
                        min={{ day: 1, month: 1, year: 2023 }}
                        max={{ day: 1, month: 1, year: 2025 }}
                        onDateChange={(value) => {
                            setDate(value)
                        }}
                        dayPlaceholder="ДД"
                        monthPlaceholder="ММММ"
                        yearPlaceholder="ГГГГ"
                    />
                </FormItem>
            </Group>
            <Div style={{paddingBottom: '80px'}}>
                <Button size="l" mode="primary" stretched onClick={submit}>
                    Создать движ
                </Button>
            </Div>
            <Footer go={go} activePanel={activePanel} />
        </Panel>
    )
}

export default FormPage;