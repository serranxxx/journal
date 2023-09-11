import React from 'react'
import { Button, Layout, } from 'antd';
import { TbTextPlus } from 'react-icons/tb';
import { ControlMenu } from '../ControlMenu';
import { ControlMenuMobile } from './ControMenuMobile';
import { FooterWriting } from './FooterWriting';

const { Footer } = Layout;
export const FooterMobile2 = (props) => {

    const { prompt, values, setBold, setItalic, setJustify, setFont, bold, italic, justify, font, emotion, setModal } = props
    const { setPrompt, handleData } = props


    return (
        <Footer style={{
            position: 'fixed', zIndex: 1, width: '100%', bottom: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            height: '15vh',
            // boxShadow: '-10px 0px 10px #00000030',
            backgroundColor: 'transparent'
        }}>

            <ControlMenuMobile
                values={values}
                bold={bold} italic={italic} justify={justify} font={font}
                setBold={setBold} setItalic={setItalic} setJusitfy={setJustify}
                setFont={setFont} emotion={emotion} setModal={setModal}
                prompt={prompt} />

            <FooterWriting setPrompt={setPrompt} handleData={handleData} values={values} prompt={prompt}
                bold={bold} italic={italic} justify={justify} font={font} emotion={emotion}/>
        </Footer>
    )
}
