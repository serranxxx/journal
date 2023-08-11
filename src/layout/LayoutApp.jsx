import { Button, Row } from 'antd'
import { heads } from '../hooks/headers'
import { useEffect, useState } from 'react'
import { TbSwitch2 } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import { CalendarApp } from './CalendarApp';
import { ControlMenu } from './ControlMenu';
import { InputText } from './InputText';

export const LayoutApp = () => {

  const [header, setHeader] = useState(Math.floor(Math.random() * 9) + 1)
  const [writing, setWriting] = useState(false)
  const [prompt, setPrompt] = useState(false)
  const [bold, setBold] = useState(false)
  const [italic, setItalic] = useState(false)
  const getHeader = (index) => {
    switch (index) {
      case 1:
        return heads.head_1
      case 2:
        return heads.head_2
      case 3:
        return heads.head_3
      case 4:
        return heads.head_4
      case 5:
        return heads.head_5
      case 6:
        return heads.head_6
      case 7:
        return heads.head_8
      case 8:
        return heads.head_9
      case 9:
        return heads.head_7
      default:
        break;
    }
  }

  useEffect(() => {
    const changeBody = () => {
      document.body.style.backgroundColor = `${getHeader(header).color_1}60`;
    }
    changeBody()
  }, [header])

  const newHeader = () => {
    if (header < 9) setHeader(header + 1)
    else setHeader(1)

  }

  const prompstate = () => {
    setPrompt(!prompt)
  }
  const boldState = () => {
    setBold(!bold)
  }
  const italicState = () => {
    setItalic(!italic)
  }

  return (
    <div style={{
      height: 'auto', width: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexDirection: 'column', padding: '2%'
    }}>
      <div style={{
        width: '85vw', height: `${writing ? '10vh' : '30vh'}`,
        transition: 'all 0.45s ease-in-out',
        borderRadius: '2vh', backgroundColor: getHeader(header).color_1,
        display: 'flex', alignItems: 'center', justifyContent: 'flex-start'
      }}>
        <img src={getHeader(header).img} style={{
          height: '100%',
          width: '100%', transition: 'all 0.45s ease-in-out',
          display: `${writing ? 'none' : ''}`,
        }} />

        <ControlMenu state={writing} color={'#000'} action={prompstate} prompt={prompt} bold={boldState} italic={italicState}/>
      </div>

      <Button
        onClick={() => setWriting(false)}
        icon={<AiOutlineClose size={20} style={{ color: '#000', }} />}
        style={{
          position: 'absolute', top: '50px', right: '170px',
          backgroundColor: `${getHeader(header).color_1}80`,
          border: `0px solid ${getHeader(header).color_2}`,
          display: `${writing ? '' : 'none'}`,
        }} />


      <Button
        onClick={newHeader}
        icon={<TbSwitch2 size={20} style={{ color: `${writing? '#000' : getHeader(header).color_2}`, }} />}
        style={{
          position: 'absolute', top: `${writing ? '50px' : '40px'}`, right: `${writing ? '130px' : '130px'}`,
          backgroundColor: `${getHeader(header).color_1}80`,
          border: `0px solid ${getHeader(header).color_2}`,
          transition: 'all 0.45s ease-in-out'
        }} />

      <Row style={{
        display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row',
        width: '85vw', marginTop: '4vh', display: `${writing ? 'none' : ''}`
      }}>
        <Button
          onClick={() => setWriting(true)}
          style={{
            width: 'auto', color: getHeader(header).color_2, backgroundColor: getHeader(header).color_1,
            fontWeight: 700, height: '6vh', borderRadius: '1vh',
            border: `1px solid${getHeader(header).color_2}20`
          }}
        >+ Thought</Button>
        <div style={{
          width: '87%', height: '1vh',
          marginLeft: '2%', borderRadius: '2vh',
          backgroundColor: `${getHeader(header).color_1}`
        }} />
      </Row>

      <div style={{
        padding: '2% 5% 5% 5%', display: `${writing ? 'none' : ''}`,
        transition: 'all 0.45s ease-in-out'
      }}>
        <CalendarApp color={getHeader(header)} />
      </div>

      <div style={{
        padding: '2% 5% 5% 5%', display: `${!writing ? 'none' : ''}`,
        transition: 'all 0.45s ease-in-out'
      }}>
        <InputText color={getHeader(header).color_1} color2={getHeader(header).color_2} prompt={prompt} bold={bold} italic={italic}/>
      </div>



    </div>
  )
}
