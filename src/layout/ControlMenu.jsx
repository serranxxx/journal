import { Button, ColorPicker, Row, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { AiFillSave, AiOutlineBold, AiOutlineItalic } from 'react-icons/ai'
import { BsJustifyLeft, BsJustifyRight, BsJustify } from 'react-icons/bs'
import { MdEmojiEmotions } from 'react-icons/md'
import { emotions } from '../hooks/emotions'

const { Option } = Select

export const ControlMenu = (props) => {

    const [bold, setBold] = useState(false)
    const [italic, setItalic] = useState(false)
    const [justify, setJusitfy] = useState('left')
    const [justIcon, setJustIcon] = useState(<BsJustifyLeft size={20} style={{ color: props.color2 }} />)
    const [color, setColor] = useState(props.color)
    const [font, setFont] = useState('')

    const handleBold = () => {
        props.bold()
        setBold(!bold)
    }

    const handleItalic = () => {
        props.italic()
        setItalic(!italic)
    }

    const handleFonts = (value) => {
        setFont(value)
        props.fonts(value)
    }

    const handleJusitfy = () => {
        if (justify === 'left') {
            setJusitfy('right')
            setJustIcon(<BsJustifyRight size={20} style={{ color: props.color2 }} />)
        }

        else if (justify === 'right') {
            setJusitfy('center')
            setJustIcon(<BsJustify size={20} style={{ color: props.color2 }} />)
        }
        else if (justify === 'center') {
            setJusitfy('left')
            setJustIcon(<BsJustifyLeft size={20} style={{ color: props.color2 }} />)
        }

    }

    useEffect(() => {
        props.justify(justify)
    }, [justify])

    const changeColor = (value) => {
        setColor(`#${value.toHex()}`)
    }

    useEffect(() => {
        props.ActionColor(color)
    }, [color])

    const saveNote = () => {
        const newNote = {
            emotion: props.emotion,
            font: font,
            bold: bold,
            italic: italic,
            justify: justify,
            color: color,
            title: props.values.title,
            text: props.values.text,
            date: props.values.date,
            simpleDate: props.values.simpleDate,
            prompt: props.values.prompt,
            promptState: props.values.propmtState,
            id: generateUniqueKey()
        }

        props.handleData(newNote)
    }

    const generateUniqueKey = () => {
        const digits = '0123456789ABCDFGHIJKLMN';
        let key = '';

        for (let i = 0; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * digits.length);
            key += digits[randomIndex];
        }
        return key;
    };

    useEffect(() => {

        setBold(false)
        setItalic(false)
        setJusitfy('left')
        setJustIcon(<BsJustifyLeft size={20} style={{ color: props.color2 }} />)
        setColor('#222')
        setFont('')
    }, [props.writing])


    return (

        <>
            <Row 
            className='layout-large'
            style={{
                // display: `${!props.state ? 'none' : 'flex'}`,
                marginLeft: '1vh', transition: 'all 0.45s ease-in-out',
                alignItems: 'center', flexDirection: 'row',
            }}>

                <div
                    className='emotion'
                    onClick={() => props.modal(true)}
                    style={{
                        height: '6vh', aspectRatio: '1/1', margin: '0 1vh 0 0',
                        transition: 'all 0.35s ease-in-out', cursor: 'pointer',

                    }}>
                    <img src={props.emotion} style={{ height: '100%', }} />

                </div>


                <Select
                    dropdownStyle={{ backgroundColor: '#f2f2f2' }}
                    className='select'
                    placeholder={`Default`}
                    onChange={handleFonts}
                    style={{
                        width: 110, margin: '0 2vh 0 1vh', color: props.color2
                        // border:'1px'
                    }}>

                    <Option key={'default'} value={``}>
                        <p style={{
                            margin: 0, fontFamily: '', color: props.color2
                        }}>Default</p>
                    </Option>
                    <Option key={'Arial'} value={`Arial`}>
                        <p style={{
                            margin: 0, fontFamily: 'Arial', color: props.color2
                        }}>Arial</p>
                    </Option>

                    <Option key={'Berlin Sans FB'} value={`Berlin Sans FB`}>
                        <p style={{
                            margin: 0, fontFamily: 'Berlin Sans FB', color: props.color2
                        }}>Berlin Sans FB</p>
                    </Option>

                    <Option key={'Helvetica'} value={`Helvetica`}>
                        <p style={{
                            margin: 0, fontFamily: 'Helvetica', color: props.color2
                        }}>Helvetica</p>
                    </Option>

                    <Option key={'Times New Roman'} value={`Times New Roman`}>
                        <p style={{
                            margin: 0, fontFamily: 'Times New Roman', color: props.color2
                        }}>Times New Roman</p>
                    </Option>

                    <Option key={'Georgia'} value={`Georgia`}>
                        <p style={{
                            margin: 0, fontFamily: 'Georgia', color: props.color2
                        }}>Georgia</p>
                    </Option>

                    <Option key={'Palatino'} value={`Palatino`}>
                        <p style={{
                            margin: 0, fontFamily: 'Palatino', color: props.color2
                        }}>Palatino</p>
                    </Option>
                </Select>

                <Button
                    onClick={handleBold}
                    icon={<AiOutlineBold size={20} style={{ color: props.color2, }} />} style={{
                        borderRadius: '1vh 0 0 1vh', backgroundColor: `#ffffff${bold ? '' : '90'}`,
                        border: `1px solid${props.color}20`
                    }} />
                <Button
                    onClick={handleItalic}
                    icon={<AiOutlineItalic size={20} style={{ color: props.color2, }} />} style={{
                        borderRadius: '0', backgroundColor: `#ffffff${italic ? '' : '90'}`,
                        border: `1px solid${props.color}20`
                    }} />
                <Button
                    onClick={handleJusitfy}
                    icon={justIcon} style={{
                        borderRadius: '0', backgroundColor: `#ffffff90`,
                        border: `1px solid${props.color}20`
                    }} />
                <ColorPicker value={props.color2}
                    onChange={changeColor}
                    style={{
                        borderRadius: '0 1vh 1vh 0', backgroundColor: `#ffffff90`,
                        border: `1px solid${props.color}20`

                    }}
                />
                <Button
                    onClick={saveNote}
                    icon={<AiFillSave size={20} style={{ color: props.color2, }} />} style={{
                        marginLeft: '2vh', backgroundColor: `#ffffff90`,
                        border: `1px solid${props.color}20`, borderRadius: '1vh 0 0 1vh'
                    }} />

                <Button
                    onClick={props.action}
                    style={{
                        fontWeight: 500, borderRadius: '0 1vh 1vh 0',
                        backgroundColor: `#ffffff90`, color: props.color2,
                        border: `1px solid${props.color}20`
                    }}>{`${!props.prompt ? 'Add prompt' : 'Delete prompt'}`}</Button>
            </Row>

            <Row 
            className='layout-small'
            style={{
                
                marginLeft: '1vh', transition: 'all 0.45s ease-in-out',
                alignItems: 'center', flexDirection: 'row', 
                // border:'1px solid red'
            }}>

                <div
                    className='emotion'
                    onClick={() => props.modal(true)}
                    style={{
                        height: '4vh', aspectRatio: '1/1', margin: '0 1vh 0 0',
                        transition: 'all 0.35s ease-in-out', cursor: 'pointer',

                    }}>
                    <img src={props.emotion} style={{ height: '100%', }} />

                </div>


                <Select
                    dropdownStyle={{ backgroundColor: '#f2f2f2' }}
                    className='select'
                    placeholder={`Default`}
                    onChange={handleFonts}
                    style={{
                        width: 70, margin: '0 2vh 0 1vh', color: props.color2
                        // border:'1px'
                    }}>

                    <Option key={'default'} value={``}>
                        <p style={{
                            margin: 0, fontFamily: '', color: props.color2
                        }}>Default</p>
                    </Option>
                    <Option key={'Arial'} value={`Arial`}>
                        <p style={{
                            margin: 0, fontFamily: 'Arial', color: props.color2
                        }}>Arial</p>
                    </Option>

                    <Option key={'Berlin Sans FB'} value={`Berlin Sans FB`}>
                        <p style={{
                            margin: 0, fontFamily: 'Berlin Sans FB', color: props.color2
                        }}>Berlin Sans FB</p>
                    </Option>

                    <Option key={'Helvetica'} value={`Helvetica`}>
                        <p style={{
                            margin: 0, fontFamily: 'Helvetica', color: props.color2
                        }}>Helvetica</p>
                    </Option>

                    <Option key={'Times New Roman'} value={`Times New Roman`}>
                        <p style={{
                            margin: 0, fontFamily: 'Times New Roman', color: props.color2
                        }}>Times New Roman</p>
                    </Option>

                    <Option key={'Georgia'} value={`Georgia`}>
                        <p style={{
                            margin: 0, fontFamily: 'Georgia', color: props.color2
                        }}>Georgia</p>
                    </Option>

                    <Option key={'Palatino'} value={`Palatino`}>
                        <p style={{
                            margin: 0, fontFamily: 'Palatino', color: props.color2
                        }}>Palatino</p>
                    </Option>
                </Select>

                <Button
                    onClick={handleBold}
                    icon={<AiOutlineBold size={20} style={{ color: props.color2, }} />} style={{
                        borderRadius: '1vh 0 0 1vh', backgroundColor: `#ffffff${bold ? '' : '90'}`,
                        border: `1px solid${props.color}20`
                    }} />
                <Button
                    onClick={handleItalic}
                    icon={<AiOutlineItalic size={20} style={{ color: props.color2, }} />} style={{
                        borderRadius: '0', backgroundColor: `#ffffff${italic ? '' : '90'}`,
                        border: `1px solid${props.color}20`
                    }} />
                <Button
                    onClick={handleJusitfy}
                    icon={justIcon} style={{
                        borderRadius: '0', backgroundColor: `#ffffff90`,
                        border: `1px solid${props.color}20`
                    }} />
                <ColorPicker value={props.color2}
                    onChange={changeColor}
                    style={{
                        borderRadius: '0 1vh 1vh 0', backgroundColor: `#ffffff90`,
                        border: `1px solid${props.color}20`

                    }}
                />
                <Button
                    onClick={saveNote}
                    icon={<AiFillSave size={20} style={{ color: props.color2, }} />} style={{
                        marginLeft: '2vh', backgroundColor: `#ffffff90`,
                        border: `1px solid${props.color}20`, borderRadius: '1vh 0 0 1vh'
                    }} />

                <Button
                    onClick={props.action}
                    style={{
                        fontWeight: 500, borderRadius: '0 1vh 1vh 0',
                        backgroundColor: `#ffffff90`, color: props.color2,
                        border: `1px solid${props.color}20`
                    }}>{`${!props.prompt ? 'Prompt' : 'Undo'}`}</Button>
            </Row>
        </>

    )
}
