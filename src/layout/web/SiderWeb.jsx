import { Button, Col, Layout  } from 'antd';
import { AiFillHome, AiOutlineHome, AiOutlineSave, AiFillSave } from "react-icons/ai";
import { PiFeather, PiFeatherFill } from "react-icons/pi";
import { Link } from "react-router-dom"
import { useState } from 'react';
const { Sider } = Layout;

export const SiderWeb = (props) => {

    const { prompt, setPrompt, values, handleData, font, bold, italic, justify, emotion } = props

    const [homeButton, setHomeButton] = useState(false)
    const [promptButton, setPromptButton] = useState(false)
    const [saveButton, setSaveButton] = useState(false)

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

    return (
        <Sider

            width={100}
            style={{
                height: 'auto', width: '100%',
                backgroundColor: `#D8D5CF`, transition: 'all 0.25s ease-in-out',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                

            }}
        >
            
            <div style={{
                height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
                
                <Col style={{
                    height: '20%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    flexDirection: 'column'
                }}>
                    
                    <Link to='/journal/' style={{ margin: 0 }}>
                        <Button
                            className='button'
                            onMouseEnter={() => setHomeButton(true)} onMouseLeave={() => setHomeButton(false)}
                            style={{ transition: 'all 0.45s ease-in-out' }}
                            icon={!homeButton ? <AiOutlineHome size={30} style={{ color: '#463f3a' }} /> : <AiFillHome size={30} style={{ color: '#463f3a' }} />} type='ghost' />
                    </Link>

                    {/* <Button
                        className='button'
                        onClick={() => setModal(true)}
                        onMouseEnter={() => setEmotionButton(true)} onMouseLeave={() => setEmotionButton(false)}
                        style={{ transition: 'all 0.45s ease-in-out' }}
                        icon={!emotionButton ? <RiEmotionHappyLine size={30} style={{ color: '#463f3a' }} /> : <RiEmotionLaughLine size={30} style={{ color: '#463f3a' }} />} type='ghost' /> */}

                    <Button
                        className='button'
                        onClick={() => setPrompt(!prompt)}
                        onMouseEnter={() => setPromptButton(true)} onMouseLeave={() => setPromptButton(false)}
                        style={{ transition: 'all 0.45s ease-in-out' }}
                        icon={!prompt ? !promptButton ? <PiFeather size={30} style={{ color: '#463f3a' }} /> : <PiFeatherFill size={30} style={{ color: '#463f3a' }} /> : <PiFeatherFill size={30} style={{ color: '#463f3a' }} />} type='ghost' />

                    <Button
                        onClick={() => saveNote()}
                        className='button'
                        onMouseEnter={() => setSaveButton(true)} onMouseLeave={() => setSaveButton(false)}
                        style={{ transition: 'all 0.45s ease-in-out' }}
                        icon={!saveButton ? <AiOutlineSave size={30} style={{ color: '#463f3a' }} /> : <AiFillSave size={30} style={{ color: '#463f3a' }} />} type='ghost' />

                </Col>
            </div>



        </Sider>
    )
}
