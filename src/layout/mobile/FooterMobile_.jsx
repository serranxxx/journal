import { Button, Layout, Select } from 'antd';
import { TbTextPlus } from 'react-icons/tb';
import { ControlMenu } from '../ControlMenu'; 
import React, { useEffect, useState } from 'react'
import { AiFillSave, AiOutlineBold, AiOutlineItalic, AiOutlineSave } from 'react-icons/ai'
import { BsJustifyLeft, BsJustifyRight, BsJustify } from 'react-icons/bs'
import { MdEmojiEmotions } from 'react-icons/md'
import { BiFontFamily } from "react-icons/bi";
import { PiFeather, PiFeatherFill } from 'react-icons/pi'


const { Option } = Select
const fonts = [
    {
        name: 'Default',
        family: '',
        value: ''
    },
    {
        name: 'Arial',
        family: 'Arial',
        value: 'Arial'
    },
    {
        name: 'Berlin Sans FB',
        family: 'Berlin Sans FB',
        value: 'Berlin Sans FB'
    },
    {
        name: 'Helvetica',
        family: 'Helvetica',
        value: 'Helvetica'
    },
    {
        name: 'Times New Roman',
        family: 'Times New Roman',
        value: 'Times New Roman'
    },
    {
        name: 'Georgia',
        family: 'Georgia',
        value: 'Georgia'
    },
    {
        name: 'Palatino',
        family: 'Palatino',
        value: 'Palatino'
    },


]

const { Footer } = Layout;
export const FooterMobile_ = (props) => {

    const { prompt, values, setBold, setItalic, setJustify, setFont, bold, italic, justify, font, emotion, setModal,
        setPrompt, handleData } = props

    const [justIcon, setJustIcon] = useState(<BsJustifyLeft size={18} style={{ color: '#463f3a' }} />)

    const [homeButton, setHomeButton] = useState(false)
    const [promptButton, setPromptButton] = useState(false)
    const [saveButton, setSaveButton] = useState(false)

    const handleJusitfy = () => {
        if (justify === 'left') {
            setJustify('right')
            setJustIcon(<BsJustifyRight size={18} style={{ color: '#463f3a' }} />)
        }

        else if (justify === 'right') {
            setJustify('center')
            setJustIcon(<BsJustify size={18} style={{ color: '#463f3a' }} />)
        }
        else if (justify === 'center') {
            setJustify('left')
            setJustIcon(<BsJustifyLeft size={18} style={{ color: '#463f3a' }} />)
        }

    }

    const saveNote = () => {
        const newNote = {
            emotion: emotion,
            font: font,
            bold: bold,
            italic: italic,
            justify: justify,
            title: values.title,
            text: values.text,
            date: values.date,
            simpleDate: values.simpleDate,
            prompt: values.prompt,
            promptState: values.propmtState,
            id: generateUniqueKey()
        }

        console.log(newNote)
        handleData(newNote)
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
        setJustify('left')
        setJustIcon(<BsJustifyLeft size={18} style={{ color: '#463f3a' }} />)
        setFont('')
    }, [])

    return (
        <Footer style={{
            position: 'fixed', zIndex: 1, width: '100%', bottom: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'space-around',
            height: '10vh',
            borderTop:'1px solid #463f3a20',
            // boxShadow: '-10px 0px 10px #00000030',
            backgroundColor: '#f4f3ee'
        }}>

            <Button
                onClick={() => saveNote()}
                className='button'
                onMouseEnter={() => setSaveButton(true)} onMouseLeave={() => setSaveButton(false)}
                style={{
                    borderRadius: '50%',
                    backgroundColor: `#e0afa0${saveButton ? '' : '70'}`,
                    // height: '50px', width: '50px',
                    border: '0px solid transparent',
                    transition: 'all 0.45s ease-in-out',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
                icon={!saveButton
                    ? <AiOutlineSave size={18} style={{ color: '#463f3a' }} />
                    : <AiFillSave size={18} style={{ color: '#463f3a' }} />} type='ghost' />

            <Button
                className='button'
                onClick={() => setPrompt(!prompt)}
                onMouseEnter={() => setPromptButton(true)} onMouseLeave={() => setPromptButton(false)}
                style={{
                    borderRadius: '50%',
                    backgroundColor: `#e0afa0${prompt ? '' : '70'}`,
                    // height: '50px', width: '50px',
                    border: '0px solid transparent',
                    transition: 'all 0.45s ease-in-out',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
                icon={!prompt
                    ? <PiFeather size={18} style={{ color: '#463f3a' }} />
                    : <PiFeatherFill size={18} style={{ color: '#463f3a' }} />} type='ghost' />




            <div style={{
                backgroundColor: '#463f3a80', 
                height: '20px', width: "1px",
            }} />

            <Select
                dropdownStyle={{ backgroundColor: '#f4f3ed' }}
                className='select'
                value={font}
                placeholder={font}
                // value={<BiFontFamily size={25} style={{ marginTop: '1.3vh', color: '#463f3a' }} />}
                // placeholder={<BiFontFamily size={25} style={{ marginTop: '1.3vh', color: '#463f3a' }} />}
                onChange={(value) => setFont(value)}
                style={{
                    width: '25vw',
                    transition: 'all 0.45s ease-in-out',


                }}>

                {
                    fonts.map((item) => (
                        <Option key={item.name} value={item.value}>
                            <p style={{
                                margin: 0, fontFamily: item.family,
                            }}>{item.name}</p>
                        </Option>
                    ))
                }

            </Select>

            <Button
                className='button'
                type='ghost'
                onClick={() => setBold(!bold)}
                icon={<AiOutlineBold size={18} style={{ color: '#463f3a' }} />} style={{
                    borderRadius: '50%',
                    backgroundColor: `#e0afa0${bold ? '' : '70'}`,
                    // height: '50px', width: '50px',
                    border: '0px solid transparent',
                    transition: 'all 0.45s ease-in-out',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                    // border: `1px solid${props.color}20`
                }} />
            <Button
                className='button'
                type='ghost'
                onClick={() => setItalic(!italic)}
                icon={<AiOutlineItalic size={18} style={{ color: '#463f3a' }} />} style={{
                    borderRadius: '50%', backgroundColor: `#e0afa0${italic ? '' : '70'}`,
                    // height: '50px', width: '50px',
                    border: '0px solid transparent',
                    transition: 'all 0.45s ease-in-out',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }} />
            <Button
                className='button'
                type='ghost'
                onClick={handleJusitfy}
                icon={justIcon} style={{
                    borderRadius: '50%', backgroundColor: `#e0afa070`,
                    // height: '50px', width: '50px',
                    border: '0px solid transparent',
                    transition: 'all 0.45s ease-in-out',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }} />

            <div style={{
                backgroundColor: '#463f3a80', 
                height: '20px', width: "1px",
            }} />

            <img src={emotion} className='button'
                onClick={() => setModal(true)}
                style={{
                    height: '30px', marginRight: '0vh', transition: 'all 0.45s ease-in-out',
                    cursor: 'pointer'
                }} />


        </Footer>
    )
}

