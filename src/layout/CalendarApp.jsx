import { Button, Calendar } from 'antd'
import React, { useEffect, useState } from 'react'
import { emotions } from '../hooks/emotions';
import { heads } from '../hooks/headers';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

export const CalendarApp = (props) => {

    const [emotion, setEmotion] = useState({

    })

    // const [number, setNumber] = useState(Math.floor(Math.random() * 31) + 1)

    const customHeaderRender = (headerProps) => {
        const { value, type, onChange, onTypeChange } = headerProps;
        const handlePrevMonth = (event) => {
            onChange(value.clone().subtract(1, 'month'));
        };

        const handleNextMonth = (event) => {
            onChange(value.clone().add(1, 'month'));
        };
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1%' }}>
                <button
                    style={{
                        border: '0px solid #000', cursor: 'pointer',
                        color: `${props.color.color_2}`,
                        backgroundColor: `${props.color.color_1}20`,
                    }}
                    onClick={handlePrevMonth}><LeftOutlined /></button>

                <div style={{ fontSize: '1.5em', fontWeight: '750', color: `${props.color.color_1}` }}>
                    {type === 'month' ? value.format('MMMM YYYY') : value.year()}
                </div>

                <button
                    style={{
                        border: '0px solid #000', cursor: 'pointer',
                        color: `${props.color.color_2}`,
                        backgroundColor: `${props.color.color_1}20`,
                    }}
                    onClick={handleNextMonth}><RightOutlined /></button>
            </div>
        );
    };

    const dateCellRender = (date) => {

        const data = emotion[date.format('YYYY-MM-DD')];

        return (

            <>
                <div
                    className='layout-large'
                    onClick={() => props.handleShowText(date.format('YYYY-MM-DD'))}
                    style={{

                        width: '100%', height: '100%',
                        alignItems: 'center', justifyContent: 'center',
                        backgroundColor: `${props.color.color_1}20`,

                    }}>
                    <img src={data} style={{
                        width: '70%', position: 'absolute',
                        marginTop: '0vh'
                    }} />
                </div>
                <div
                    className='layout-small'
                    onClick={() => props.handleShowText(date.format('YYYY-MM-DD'))}
                    style={{

                        width: '100%', height: '100%', marginTop:'-25px',
                        alignItems: 'center', justifyContent: 'center',
                        backgroundColor: `${props.color.color_1}20`,position: 'absolute',

                    }}>
                    <img 
                    onClick={() => props.handleShowText(date.format('YYYY-MM-DD'))}
                    src={data} style={{
                        width: '120%',
                        position: 'absolute',
                         
                    }} />
                </div>
            </>

        );
    };

    // const addEmotions = () => {
    //     let nuevoElemento
    //     if (number < 10) {
    //         nuevoElemento = `2023-08-0${number}`
    //     } else if (number >= 10) {
    //         nuevoElemento = `2023-08-${number}`
    //     }

    //     setEmotion(prevObjeto => ({
    //         ...prevObjeto,
    //         [nuevoElemento]: `${selectEmotion(Math.floor(Math.random() * 36) + 1)}`
    //     }))
    //     setNumber(Math.floor(Math.random() * 31) + 1)
    // }

    // const selectEmotion = (index) => {
    //     switch (index) {
    //         case 1: return emotions.e1
    //         case 2: return emotions.e2
    //         case 3: return emotions.e3
    //         case 4: return emotions.e4
    //         case 5: return emotions.e5
    //         case 6: return emotions.e6
    //         case 7: return emotions.e7
    //         case 8: return emotions.e8
    //         case 9: return emotions.e9
    //         case 10: return emotions.e10
    //         case 11: return emotions.e11
    //         case 12: return emotions.e12
    //         case 13: return emotions.e13
    //         case 14: return emotions.e14
    //         case 15: return emotions.e15
    //         case 16: return emotions.e16
    //         case 17: return emotions.e17
    //         case 18: return emotions.e18
    //         case 19: return emotions.e19
    //         case 20: return emotions.e20
    //         case 21: return emotions.e21
    //         case 22: return emotions.e22
    //         case 23: return emotions.e23
    //         case 24: return emotions.e24
    //         case 25: return emotions.e25
    //         case 26: return emotions.e26
    //         case 27: return emotions.e27
    //         case 28: return emotions.e28
    //         case 29: return emotions.e29
    //         case 30: return emotions.e30
    //         case 31: return emotions.e31
    //         case 32: return emotions.e32
    //         case 33: return emotions.e33
    //         case 34: return emotions.e34
    //         case 35: return emotions.e35
    //         case 36: return emotions.e36


    //         default:
    //             break;
    //     }
    // }

    useEffect(() => {

        if (props.data) {
            props.data.map((item) => (
                setEmotion(prevObjeto => ({
                    ...prevObjeto,
                    [item.simpleDate]: item.emotion
                }))
            ))
        }

    }, [props.data])


    return (
        <>
            {/* <Button style={{ position: 'absolute', top: '5%', left: '2%', backgroundColor: '#ffffff10' }} onClick={addEmotions} /> */}
            <Calendar
                className='large'
                cellRender={dateCellRender}
                headerRender={customHeaderRender}
                style={{
                    marginTop: '0vh', backgroundColor: `#fff`,
                    borderRadius: '2vh', padding: '1%',
                    color: `${props.color.color_2}`
                }} />

            <Calendar
                className='small'
                cellRender={dateCellRender}
                headerRender={customHeaderRender}
                fullscreen={false}
                style={{
                    marginTop: '0vh', backgroundColor: `#fff`,
                    borderRadius: '2vh', padding: '1%',
                    color: `${props.color.color_2}`,
                }} />
        </>

    )

}
