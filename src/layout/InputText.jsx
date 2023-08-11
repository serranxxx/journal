import { Button, Input, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { RandomQuestion } from '../hooks/RandomQuestion'
import { TbSwitch2 } from 'react-icons/tb'

export const InputText = (props) => {

    const [date, setDate] = useState('')
    const [color, setColor] = useState('#000')
    const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 100) + 1)
    useEffect(() => {
        const fetchCurrentDate = () => {
            const today = new Date();
            const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
            const formattedDate = today.toLocaleDateString('en-EN', options);
            setDate(formattedDate);
        };

        fetchCurrentDate();

    }, []);

    useEffect(() => {
        setRandomNum(Math.floor(Math.random() * 100) + 1)
    }, [props.prompt])





    return (
        <div style={{
            width: '85vw', height: 'auto',
            transition: 'all 0.45s ease-in-out',
            borderRadius: '2vh', backgroundColor: `${props.color}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '2% 0 2% 0', flexDirection: 'column'
        }}>
            <Row style={{
                width: '90%'
            }}>
                <Input
                    placeholder={'Jot down your thoughts here...'}
                    maxLength={35}
                    style={{
                        width: '60%', marginBottom: '1vh', fontSize: '1.6em', textAlign: 'left',
                        fontWeight: 600, backgroundColor: 'transparent', border: `1px solid ${props.color}20`,
                        fontStyle: 'italic'
                    }} />
                <p style={{
                    marginLeft: '2vh', width: '35%', fontWeight: 650,
                    fontSize: '1.5em', fontStyle: 'italic'
                }}>{`/ ${date}`}</p>
            </Row>
            <hr style={{
                width: '90%',
                border: `1.5px solid ${color}`
            }} />
            <Row style={{
                width:'88%', alignItems:'center',
                justifyContent:'flex-start', flexDirection:'row',
                display: `${props.prompt ? 'flex' : 'none'}`
            }}>
                <p style={{
                    marginRight: '2vh', width: 'auto', fontWeight: 500,
                    fontSize: '1.3em', fontStyle: 'italic', 
                }}>{`${RandomQuestion(randomNum)}`}</p>
                <Button
                    onClick={() => setRandomNum(Math.floor(Math.random() * 100) + 1)}
                    icon={<TbSwitch2 size={20} style={{ color: color, }} />}
                    style={{
                        backgroundColor: `transparent`,
                        border: `0px solid ${color}`, marginTop:'1vh'
                    }} />

            </Row>

            <Input.TextArea
                placeholder='Let your words flow...'
                autoSize={{ minRows: 4 }}  // Ajusta automáticamente la altura según el contenido
                wrap="soft"  // Permite el wrap automático del texto
                style={{
                    color: '#222',
                    width: '90%', height: 'auto', fontSize: '1.1em', marginTop: '1vh', fontStyle: `${props.italic ? '' : 'italic'}`,
                    fontWeight: `${props.bold ? 600 : 400 }`, backgroundColor: 'transparent', border: `1px solid ${props.color}20`,
                }} />
        </div>
    )
}
