import { Button,  Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { AiFillSave, AiOutlineBold, AiOutlineItalic } from 'react-icons/ai'
import { BsJustifyLeft, BsJustifyRight, BsJustify } from 'react-icons/bs'
import { MdEmojiEmotions } from 'react-icons/md'
import { BiFontFamily } from "react-icons/bi";

const { Option } = Select

export const ControlMenuMobile = (props) => {

    const { setBold, setItalic, setJusitfy, setFont, bold, italic, justify, emotion, setModal } = props
    const [justIcon, setJustIcon] = useState(<BsJustifyLeft size={25} style={{ color: '#463f3a' }} />)


    const handleJusitfy = () => {
        if (justify === 'left') {
            setJusitfy('right')
            setJustIcon(<BsJustifyRight size={25} style={{ color: '#463f3a' }} />)
        }

        else if (justify === 'right') {
            setJusitfy('center')
            setJustIcon(<BsJustify size={25} style={{ color: '#463f3a' }} />)
        }
        else if (justify === 'center') {
            setJusitfy('left')
            setJustIcon(<BsJustifyLeft size={25} style={{ color: '#463f3a' }} />)
        }

    }


    useEffect(() => {

        setBold(false)
        setItalic(false)
        setJusitfy('left')
        setJustIcon(<BsJustifyLeft size={25} style={{ color: '#463f3a' }} />)
        setFont('')
    }, [])


    return (

        <>
            <div style={{

                marginBottom: '15vh',
                width: 'auto', height: 'auto', padding: '1%',
                borderRadius: '2.5vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                flexDirection: 'row', backgroundColor: '#f4f3ee',
                boxShadow: '0px 0px 10px #00000020'
            }}>

                <Select
                    dropdownStyle={{ backgroundColor: '#f2f2f2', width: '150%' }}
                    className='select'
                    value={<BiFontFamily size={25} style={{ marginTop: '1.3vh', color: '#463f3a' }} />}
                    placeholder={<BiFontFamily size={25} style={{ marginTop: '1.3vh', color: '#463f3a' }} />}
                    onChange={(value) => setFont(value)}
                    style={{
                        width: 'auto',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'

                    }}>

                    <Option key={'default'} value={``}>
                        <p style={{
                            margin: 0, fontFamily: '',
                        }}>Default</p>
                    </Option>
                    <Option key={'Arial'} value={`Arial`}>
                        <p style={{
                            margin: 0, fontFamily: 'Arial',
                        }}>Arial</p>
                    </Option>

                    <Option key={'Berlin Sans FB'} value={`Berlin Sans FB`}>
                        <p style={{
                            margin: 0, fontFamily: 'Berlin Sans FB',
                        }}>Berlin Sans FB</p>
                    </Option>

                    <Option key={'Helvetica'} value={`Helvetica`}>
                        <p style={{
                            margin: 0, fontFamily: 'Helvetica',
                        }}>Helvetica</p>
                    </Option>

                    <Option key={'Times New Roman'} value={`Times New Roman`}>
                        <p style={{
                            margin: 0, fontFamily: 'Times New Roman',
                        }}>Times New Roman</p>
                    </Option>

                    <Option key={'Georgia'} value={`Georgia`}>
                        <p style={{
                            margin: 0, fontFamily: 'Georgia',
                        }}>Georgia</p>
                    </Option>

                    <Option key={'Palatino'} value={`Palatino`}>
                        <p style={{
                            margin: 0, fontFamily: 'Palatino',
                        }}>Palatino</p>
                    </Option>
                </Select>

                <Button
                    // className='button'
                    type='ghost'
                    onClick={() => setBold(!bold)}
                    icon={<AiOutlineBold size={25} style={{ color: '#463f3a' }} />} style={{
                        borderRadius: '2vh', backgroundColor: `#e0afa0${bold ? '' : '70'}`,
                        height: '50px', width: '50px',
                        border: '0px solid transparent',
                        transition: 'all 0.15s ease-in-out',
                        margin: '0 1vh 0 1vh'
                        // border: `1px solid${props.color}20`
                    }} />
                <Button
                    // className='button'
                    type='ghost'
                    onClick={() => setItalic(!italic)}
                    icon={<AiOutlineItalic size={25} style={{ color: '#463f3a' }} />} style={{
                        borderRadius: '2vh', backgroundColor: `#e0afa0${italic ? '' : '70'}`,
                        height: '50px', width: '50px',
                        border: '0px solid transparent',
                        transition: 'all 0.15s ease-in-out'
                    }} />
                <Button
                    // className='button'
                    type='ghost'
                    onClick={handleJusitfy}
                    icon={justIcon} style={{
                        borderRadius: '2vh', backgroundColor: `#e0afa070`,
                        height: '50px', width: '50px',
                        border: '0px solid transparent',
                        transition: 'all 0.15s ease-in-out',
                        margin: '0 0 0 1vh',
                    }} />

                <div style={{
                    backgroundColor: '#463f3a', margin: '0 2vh 0 2vh',
                    height: '40px', width: "1px"
                }} />

                <img src={emotion} 
                // className='button' 
                onClick={() => setModal(true)}
                style={{
                    height: '50px', marginRight: '0vh', transition: 'all 0.35s ease-in-out',
                    cursor:'pointer'
                }} />




            </div>

        </>

    )
}
