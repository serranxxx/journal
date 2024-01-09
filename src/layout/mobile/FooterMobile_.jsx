import React from 'react'
import { Button, Layout, } from 'antd';
import { TbTextPlus } from 'react-icons/tb';
import { ControlMenu } from '../ControlMenu';

const { Footer } = Layout;
export const FooterMobile_ = (props) => {

    const { prompt, values, setBold, setItalic, setJustify, setFont, bold, italic, justify, font, emotion , setModal,
        setPrompt, handleData } = props



    return (
        <Footer style={{
            position: 'fixed', zIndex: 1, width: '100%', bottom: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            height: '15vh',
            // boxShadow: '-10px 0px 10px #00000030',
            backgroundColor:'#f4f3ee'
        }}>

            <ControlMenu 
                values={values}
                bold={bold} italic={italic} justify={justify} font={font}
                setBold={setBold} setItalic={setItalic} setJusitfy={setJustify}
                setFont={setFont} emotion={emotion} setModal={setModal}
                prompt={prompt} setPrompt={setPrompt} handleData={handleData}/>


        </Footer>
    )
}
