import { Button, Input, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { RandomQuestion } from '../../helpers/RandomQuestion'
import { TbSwitch2 } from 'react-icons/tb'

export const InputTextMobile = (props) => {


    const { handleValues, prompt } = props
    const [date, setDate] = useState('')
    const [simpleDate, setSimpleDate] = useState('')
    const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 100) + 1)
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')


    useEffect(() => {
        handleValues(title, date, RandomQuestion(randomNum), text, prompt, simpleDate)
    }, [date, randomNum, title, text])


    useEffect(() => {
        setText('')
        setTitle('')
    }, [])

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
    }, [prompt])



    return (
        <>
            <div
                style={{
                    width: '100%', height: 'auto', display:'flex',
                    transition: 'all 0.45s ease-in-out',
                    alignItems: 'center', justifyContent: 'center',
                    padding: '2% 0 2% 0', flexDirection: 'column'
                }}>
                <Row style={{
                    width: '95%',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    flexDirection: 'row',
                }}>
                    <Input
                        placeholder={'Jot down your thoughts here...'}
                        onChange={(value) => setTitle(value.target.value)}
                        value={title}
                        maxLength={35}
                        style={{
                            width: '80%', marginBottom: '1vh', fontSize: '1.4em', textAlign: 'left',
                            fontWeight: 600, backgroundColor: 'transparent',
                            border: `1px solid transparent`,
                            fontStyle: 'italic', fontFamily: props.font,
                            color: '#463f3a',
                        }} />
                    {/* <p style={{
                        marginLeft: '2vh', width: '35%', fontWeight: 650,
                        color: '#463f3a',
                        fontSize: '1.5em', fontStyle: 'italic', fontFamily: props.font
                    }}>{`/ ${date}`}</p> */}
                </Row>
                <hr style={{
                    width: '90%', borderRadius:'2vh',
                    border: `1px solid #E0AFA060`
                }} />
                <Row style={{
                    width: '95%', alignItems: 'center',
                    justifyContent: 'flex-start', flexDirection: 'row',
                    display: `${prompt ? 'flex' : 'none'}`
                }}>
                    <p style={{
                        marginRight: '2vh', width: 'auto', fontWeight: 600, textAlign: props.justify,
                        fontSize: '1.1em', fontStyle: `${props.italic ? '' : 'italic'}`, fontFamily: props.font,
                         width: '93%',
                        color: '#463f3a',
                    }}>{`${RandomQuestion(randomNum)}`}</p>
                    <Button
                        type='ghost'
                        onClick={() => setRandomNum(Math.floor(Math.random() * 100) + 1)}
                        icon={<TbSwitch2 size={18} style={{}} />}
                        style={{
                            backgroundColor: `transparent`,
                            border: `0px solid #463f3a`, marginTop: '1vh'
                        }} />

                </Row>

                <Input.TextArea
                    placeholder='Let your words flow...'
                    onChange={(value) => setText(value.target.value)}
                    value={text}
                    autoSize={{ minRows: 4 }} 
                    wrap="soft"  
                    style={{
                        color: '#463f3a', fontFamily: props.font, textAlign: props.justify,
                        width: '95%', height: 'auto', fontSize: '1em', marginTop: '1vh', fontStyle: `${!props.italic ? '' : 'italic'}`,
                        fontWeight: `${props.bold ? 600 : 400}`, backgroundColor: 'transparent', border: `1px solid transparent`,
                    }} />
            </div>
            
        </>
    )
}
