import { Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { handleImages } from '../helpers/title'

export const Showtext = (props) => {

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [prompt, setPrompt] = useState('')
    const [promptState, setPromptState] = useState(false)
    const [justify, setJustify] = useState('')
    const [italic, setItalic] = useState(false)
    const [bold, setBold] = useState(false)
    const [font, setFont] = useState('')
    const [image, setImage] = useState(Math.floor(Math.random() * 9) + 1)

    useEffect(() => {
        if (props.data) {
            const Item = props.data.find(item => item.simpleDate === props.pickedDate)
            if (Item) {

                setTitle(Item.title)
                setText(Item.text)
                setPrompt(Item.prompt)
                setPromptState(Item.promptState)
                setJustify(Item.justify)
                setItalic(Item.italic)
                setBold(Item.bold)
                setFont(Item.font)
                console.log('item: ', Item)
            } else {
                setTitle("You have no thoughts of this day")
                setText('')
                setPrompt('')
                setPromptState('')
                setJustify('left')
                setItalic(false)
                setBold(false)
                setFont('')
                setImage(Math.floor(Math.random() * 9) + 1)
                console.log('No hay item ')
            }

        }


    }, [props.pickedDate])


    return (
        <>
            <div
                
                style={{
                    width: '100%', height: 'auto',
                    transition: 'all 0.45s ease-in-out',
                    // borderRadius: '2vh',
                    // backgroundColor: `#f4f3ee`,
                    display:'flex',
                    alignItems: 'center', justifyContent: 'center',
                    padding: '3%', flexDirection: 'column'
                }}>
                <Row style={{
                    width: '100%'
                }}>
                    <h1

                        style={{
                            width: '100%', marginBottom: '1vh', fontSize: '1.6em', textAlign: 'center',
                            fontWeight: 600, backgroundColor: 'transparent',
                            fontStyle: 'italic', fontFamily: font,
                            color: '#463f3a'
                        }}>{title}</h1>

                </Row>
                <hr style={{
                    width: '70%',
                    border: `1.5px solid #463f3a`
                }} />
                <Row style={{
                    width: '90%', alignItems: 'center',
                    justifyContent: 'flex-start', flexDirection: 'row',
                    display: `${promptState ? 'flex' : 'none'}`
                }}>
                    <p style={{
                        marginRight: '2vh', width: 'auto', fontWeight: 600, textAlign: justify,
                        fontSize: '1em', fontStyle: `${italic ? '' : 'italic'}`, fontFamily: font, width: '93%',
                        color: '#463f3a'
                    }}>{prompt}</p>

                </Row>


                <p
                    // Permite el wrap automático del texto
                    style={{
                        wordBreak: 'break-word',
                        color: '#463f3a',
                        fontFamily: font, textAlign: justify, 
                        width: '90%', height: 'auto', fontSize: '1.1em', marginTop: '4vh', fontStyle: `${italic ? '' : 'italic'}`,
                        fontWeight: `${bold ? 600 : 400}`, backgroundColor: 'transparent',
                        
                        // border: `1px solid ${props.color}20`,
                    }} >
                    {text}
                </p>

                <img src={handleImages(image)} style={{ width: '70%', transition: 'all 0.45s ease-in-out', marginTop: '4vh' }} />

            </div>

        </>
    )
}
