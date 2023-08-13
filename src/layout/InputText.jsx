import { Button, Input, Modal, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { RandomQuestion } from '../hooks/RandomQuestion'
import { TbSwitch2 } from 'react-icons/tb'
import { EmotionCard } from './EmotionCard'
import { emotions } from '../hooks/emotions'

export const InputText = (props) => {

    const [date, setDate] = useState('')
    const [simpleDate, setSimpleDate] = useState('')
    const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 100) + 1)
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')


    useEffect(() => {
        const fetchCurrentDate = () => {
            const today = new Date();
            const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
            const formattedDate = today.toLocaleDateString('en-EN', options);
            setDate(formattedDate);
        };

        const fetchSimpleDate = () => {
            const today = new Date();
            const formattedDate = today.toISOString().split('T')[0];
            setSimpleDate(formattedDate);

        }

        fetchSimpleDate();
        fetchCurrentDate();




    }, []);

    useEffect(() => {
        setRandomNum(Math.floor(Math.random() * 100) + 1)
    }, [props.prompt])

    const handleTitle = (value) => {
        setTitle(value.target.value)
    }

    const handleText = (value) => {
        setText(value.target.value)
    }

    useEffect(() => {
        props.handleValues(title, date, RandomQuestion(randomNum), text, props.prompt, simpleDate)
    }, [date, randomNum, title, text])


    useEffect(() => {
        setText('')
        setTitle('')
    }, [props.writing])





    return (
        <>
            <div
                className='layout-large'
                style={{
                    width: '85vw', height: 'auto',
                    transition: 'all 0.45s ease-in-out',
                    borderRadius: '2vh', backgroundColor: `${props.color}`,
                    alignItems: 'center', justifyContent: 'center',
                    padding: '2% 0 2% 0', flexDirection: 'column'
                }}>
                <Row style={{
                    width: '90%'
                }}>
                    <Input
                        placeholder={'Jot down your thoughts here...'}
                        onChange={handleTitle}
                        value={title}
                        maxLength={35}
                        style={{
                            width: '60%', marginBottom: '1vh', fontSize: '1.6em', textAlign: 'left',
                            fontWeight: 600, backgroundColor: 'transparent', border: `1px solid ${props.color}20`,
                            fontStyle: 'italic', fontFamily: props.font, color: props.color2
                        }} />
                    <p style={{
                        marginLeft: '2vh', width: '35%', fontWeight: 650, color: props.color2,
                        fontSize: '1.5em', fontStyle: 'italic', fontFamily: props.font
                    }}>{`/ ${date}`}</p>
                </Row>
                <hr style={{
                    width: '90%',
                    border: `1.5px solid ${props.color2}`
                }} />
                <Row style={{
                    width: '88%', alignItems: 'center',
                    justifyContent: 'flex-start', flexDirection: 'row',
                    display: `${props.prompt ? 'flex' : 'none'}`
                }}>
                    <p style={{
                        marginRight: '2vh', width: 'auto', fontWeight: 600, textAlign: props.justify,
                        fontSize: '1.3em', fontStyle: `${props.italic ? '' : 'italic'}`, fontFamily: props.font, width: '93%',
                        color: props.color2
                    }}>{`${RandomQuestion(randomNum)}`}</p>
                    <Button
                        onClick={() => setRandomNum(Math.floor(Math.random() * 100) + 1)}
                        icon={<TbSwitch2 size={20} style={{ color: props.color2, }} />}
                        style={{
                            backgroundColor: `transparent`,
                            border: `0px solid ${props.color2}`, marginTop: '1vh'
                        }} />

                </Row>

                <Input.TextArea
                    placeholder='Let your words flow...'
                    onChange={handleText}
                    value={text}
                    autoSize={{ minRows: 4 }}  // Ajusta automáticamente la altura según el contenido
                    wrap="soft"  // Permite el wrap automático del texto
                    style={{
                        color: props.color2, fontFamily: props.font, textAlign: props.justify,
                        width: '90%', height: 'auto', fontSize: '1.1em', marginTop: '1vh', fontStyle: `${props.italic ? '' : 'italic'}`,
                        fontWeight: `${props.bold ? 600 : 400}`, backgroundColor: 'transparent', border: `1px solid ${props.color}20`,
                    }} />
            </div>

            <div
                className='layout-small'
                style={{
                    width: '85vw', height: 'auto',
                    transition: 'all 0.45s ease-in-out',
                    borderRadius: '0', backgroundColor: `${props.color}`,
                    alignItems: 'center', justifyContent: 'center',
                    padding: '2% 0 2% 0', flexDirection: 'column'
                }}>
                <Row style={{
                    width: '90%'
                }}>
                    <Input
                        placeholder={'Jot down your thoughts here...'}
                        onChange={handleTitle}
                        value={title}
                        maxLength={35}
                        style={{
                            width: '60%', marginBottom: '1vh', fontSize: '1em', textAlign: 'left',
                            fontWeight: 600, backgroundColor: 'transparent', border: `1px solid ${props.color}20`,
                            fontStyle: 'italic', fontFamily: props.font, color: props.color2
                        }} />
                    {/* <p style={{
                        marginLeft: '2vh', width: '35%', fontWeight: 650, color: props.color2,
                        fontSize: '1em', fontStyle: 'italic', fontFamily: props.font
                    }}>{`/ ${date}`}</p> */}
                </Row>
                <hr style={{
                    width: '90%',
                    border: `1.5px solid ${props.color2}`
                }} />
                <Row style={{
                    width: '88%', alignItems: 'center',
                    justifyContent: 'flex-start', flexDirection: 'row',
                    display: `${props.prompt ? 'flex' : 'none'}`
                }}>
                    <p style={{
                        marginRight: '2vh', width: 'auto', fontWeight: 600, textAlign: props.justify,
                        fontSize: '1em', fontStyle: `${props.italic ? '' : 'italic'}`, fontFamily: props.font, width: '93%',
                        color: props.color2
                    }}>{`${RandomQuestion(randomNum)}`}</p>
                    <Button
                        onClick={() => setRandomNum(Math.floor(Math.random() * 100) + 1)}
                        icon={<TbSwitch2 size={20} style={{ color: props.color2, }} />}
                        style={{
                            backgroundColor: `transparent`,
                            border: `0px solid ${props.color2}`, marginTop: '1vh'
                        }} />

                </Row>

                <Input.TextArea
                    placeholder='Let your words flow...'
                    onChange={handleText}
                    value={text}
                    autoSize={{ minRows: 4 }}  // Ajusta automáticamente la altura según el contenido
                    wrap="soft"  // Permite el wrap automático del texto
                    style={{
                        color: props.color2, fontFamily: props.font, textAlign: props.justify,
                        width: '90%', height: 'auto', fontSize: '0.9em', marginTop: '1vh', fontStyle: `${props.italic ? '' : 'italic'}`,
                        fontWeight: `${props.bold ? 600 : 400}`, backgroundColor: 'transparent', border: `1px solid ${props.color}20`,
                    }} />
            </div>

            <Modal
                open={props.modal}
                footer={<></>}
                onOk={() => props.handleModal(false)}
                onCancel={() => props.handleModal(false)}
            >
                <div style={{
                    display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
                    flexDirection: 'row', flexWrap: 'wrap', 
                }}>
                    <EmotionCard data={emotions.eArray} action={props.emotion} />
                </div>

            </Modal>
        </>
    )
}
