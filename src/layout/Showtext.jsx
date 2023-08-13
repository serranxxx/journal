import { Row } from 'antd'
import React, { useEffect, useState } from 'react'

export const Showtext = (props) => {

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [prompt, setPrompt] = useState('')
    const [promptState, setPromptState] = useState(false)
    const [date, setDate] = useState('')
    const [color, setColor] = useState('')
    const [justify, setJustify] = useState('')
    const [italic, setItalic] = useState(false)
    const [bold, setBold] = useState(false)
    const [font, setFont] = useState('')

    useEffect(() => {
        if (props.data) {
            const Item = props.data.find(item => item.simpleDate === props.pickedDate)
            if (Item) {

                setTitle(Item.title)
                setText(Item.text)
                setPrompt(Item.prompt)
                setPromptState(Item.promptState)
                setDate(Item.date)
                setColor(Item.color)
                setJustify(Item.justify)
                setItalic(Item.italic)
                setBold(Item.bold)
                setFont(Item.font)
                console.log('item: ', Item)
            } else {
                setTitle('')
                setText('')
                setPrompt('')
                setPromptState('')
                setDate(props.pickedDate)
                setColor('')
                setJustify('left')
                setItalic(false)
                setBold(false)
                setFont('')
                console.log('No hay item ')
            }

        }


    }, [props.pickedDate])


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
                    <h1

                        style={{
                            width: '60%', marginBottom: '1vh', fontSize: '1.6em', textAlign: 'left',
                            fontWeight: 600, backgroundColor: 'transparent', border: `1px solid ${props.color}20`,
                            fontStyle: 'italic', fontFamily: font, color: color
                        }}>{title}</h1>
                    <p style={{
                        marginLeft: '2vh', width: '35%', fontWeight: 650, color: color,
                        fontSize: '1.5em', fontStyle: 'italic', fontFamily: font
                    }}>{`/ ${date}`}</p>
                </Row>
                <hr style={{
                    width: '90%',
                    border: `1.5px solid ${color}`
                }} />
                <Row style={{
                    width: '88%', alignItems: 'center',
                    justifyContent: 'flex-start', flexDirection: 'row',
                    display: `${promptState ? 'flex' : 'none'}`
                }}>
                    <p style={{
                        marginRight: '2vh', width: 'auto', fontWeight: 600, textAlign: justify,
                        fontSize: '1.3em', fontStyle: `${italic ? '' : 'italic'}`, fontFamily: font, width: '93%',
                        color: color
                    }}>{prompt}</p>

                </Row>

                <p
                    // Permite el wrap automático del texto
                    style={{
                        color: color, fontFamily: font, textAlign: justify,
                        width: '90%', height: 'auto', fontSize: '1.1em', marginTop: '1vh', fontStyle: `${italic ? '' : 'italic'}`,
                        fontWeight: `${bold ? 600 : 400}`, backgroundColor: 'transparent', border: `1px solid ${props.color}20`,
                    }} >
                    {text}
                </p>
            </div>

            <div
                className='layout-small'
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
                    <h1

                        style={{
                            width: '60%', marginBottom: '1vh', fontSize: '1.1em', textAlign: 'left',
                            fontWeight: 600, backgroundColor: 'transparent', border: `1px solid ${props.color}20`,
                            fontStyle: 'italic', fontFamily: font, color: color
                        }}>{title}</h1>
                    <p style={{
                        marginLeft: '2vh', width: '35%', fontWeight: 650, color: color,
                        fontSize: '1.1em', fontStyle: 'italic', fontFamily: font
                    }}>{`/ ${date}`}</p>
                </Row>
                <hr style={{
                    width: '90%',
                    border: `1.5px solid ${color}`
                }} />
                <Row style={{
                    width: '88%', alignItems: 'center',
                    justifyContent: 'flex-start', flexDirection: 'row',
                    display: `${promptState ? 'flex' : 'none'}`
                }}>
                    <p style={{
                        marginRight: '2vh', width: 'auto', fontWeight: 600, textAlign: justify,
                        fontSize: '1em', fontStyle: `${italic ? '' : 'italic'}`, fontFamily: font, width: '93%',
                        color: color
                    }}>{prompt}</p>

                </Row>

                <p
                    // Permite el wrap automático del texto
                    style={{
                        color: color, fontFamily: font, textAlign: justify,
                        width: '90%', height: 'auto', fontSize: '0.9em', marginTop: '1vh', fontStyle: `${italic ? '' : 'italic'}`,
                        fontWeight: `${bold ? 600 : 400}`, backgroundColor: 'transparent', border: `1px solid ${props.color}20`,
                    }} >
                    {text}
                </p>
            </div>
        </>
    )
}
