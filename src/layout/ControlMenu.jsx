import { Button, ColorPicker, Row, Select } from 'antd'
import React, { useState } from 'react'
import { AiFillSave, AiOutlineBold, AiOutlineItalic } from 'react-icons/ai'
import { BsJustifyLeft } from 'react-icons/bs'
import { MdEmojiEmotions } from 'react-icons/md'

export const ControlMenu = (props) => {

    const [bold, setBold] = useState(false)
    const [italic, setItalic] = useState(false)

    const handleBold = () => {
        props.bold()
        setBold(!bold)
    }

    const handleItalic = () => {
        props.italic()
        setItalic(!italic)
    }

    return (
        <Row style={{
            display: `${!props.state ? 'none' : ''}`,
            marginLeft: '5vh', transition: 'all 0.45s ease-in-out'
        }}>

            <Button
                onClick={props.action}
                style={{
                    fontWeight: 500, borderRadius: '1vh 0 0 1vh',
                    backgroundColor: `#ffffff60`, color: props.color,
                    border: `1px solid${props.color}20`
                }}>{`${!props.prompt ? 'Add prompt' : 'Delete prompt'}`}</Button>

            <Button icon={<MdEmojiEmotions size={20} style={{ color: props.color, }} />}
                style={{
                    borderRadius: '0 1vh 1vh 0',
                    backgroundColor: `#ffffff60`, marginLeft: '1px',
                    border: `1px solid${props.color}20`
                }} />

            <Select
                dropdownStyle={{ backgroundColor: '#ffffff60' }}
                className='select'
                placeholder={`Arial`}
                style={{
                    width: 110, margin: '0 2vh 0 2vh'
                }} />

            <Button
                onClick={handleBold}
                icon={<AiOutlineBold size={20} style={{ color: props.color, }} />} style={{
                    borderRadius: '1vh 0 0 1vh', backgroundColor: `#ffffff${bold? '' : '60'}`,
                    border: `1px solid${props.color}20`
                }} />
            <Button
                onClick={handleItalic}
                icon={<AiOutlineItalic size={20} style={{ color: props.color, }} />} style={{
                    borderRadius: '0', backgroundColor: `#ffffff${!italic? '' : '60'}`,
                    border: `1px solid${props.color}20`
                }} />
            <Button icon={<BsJustifyLeft size={20} style={{ color: props.color, }} />} style={{
                borderRadius: '0', backgroundColor: `#ffffff60`,
                border: `1px solid${props.color}20`
            }} />
            <ColorPicker value={props.color} style={{
                borderRadius: '0 1vh 1vh 0', backgroundColor: `#ffffff60`,
                border: `1px solid${props.color}20`

            }}
            />
            <Button icon={<AiFillSave size={20} style={{ color: props.color, }} />} style={{
                marginLeft: '2vh', backgroundColor: `#ffffff60`,
                border: `1px solid${props.color}20`
            }} />
        </Row>
    )
}
