import { Button, Row } from 'antd'
import { heads } from '../hooks/headers'
import { useEffect, useState } from 'react'
import { TbSwitch2 } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import { CalendarApp } from './CalendarApp';
import { ControlMenu } from './ControlMenu';
import { InputText } from './InputText';
import { emotions } from '../hooks/emotions';
import { Showtext } from './Showtext';

export const LayoutApp = () => {

  
  const [header, setHeader] = useState(Math.floor(Math.random() * 13) + 1)
  const [writing, setWriting] = useState(false)
  const [prompt, setPrompt] = useState(false)
  const [bold, setBold] = useState(false)
  const [italic, setItalic] = useState(true)
  const [font, setFont] = useState('')
  const [justify, setJustify] = useState('left')
  const [color, setColor] = useState('#222')
  const [modal, setModal] = useState(false)
  const [emotion, setEmotion] = useState(emotions.e1)
  const [values, setValues] = useState({
    title: '',
    date: '',
    prompt: '',
    text: '',
    propmtState: false
  })
  const [data, setData] = useState(JSON.parse(localStorage.getItem('thoughts')))
  const [showText, setShowText] = useState(false)
  const [pickedDate, setPickedDate] = useState('')
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
      case 10:
        return heads.head_10
      case 11:
        return heads.head_11
      case 12:
        return heads.head_12
      case 13:
        return heads.head_13
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
    if (header < 13) setHeader(header + 1)
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

  const handleFonts = (font) => {
    setFont(font)
  }

  const handleJusitfy = (value) => {
    setJustify(value)
  }

  const handleColor = (value) => {
    setColor(value)
  }

  const handleModal = (value) => {
    setModal(value)
  }

  const handleEmotion = (value) => {
    setEmotion(value)
  }

  const handleValues = (title, date, prompt, text, state, simpleDate) => {
    setValues({
      ...values,
      title: title,
      date: date,
      simpleDate: simpleDate,
      prompt: prompt,
      text: text,
      propmtState: state
    });
  }

  const handleData = (newData) => {
    const Item = data.find(item => item.simpleDate === newData.simpleDate)
    if (Item) {
      Item.emotion = newData.emotion
      Item.font = newData.font
      Item.bold = newData.bold
      Item.italic = newData.italic
      Item.justify = newData.justify
      Item.color = newData.color
      Item.title = newData.title
      Item.text = newData.text
      Item.date = newData.date
      Item.simpleDate = newData.simpleDate
      Item.prompt = newData.prompt
      Item.prompstate = newData.prompstate
      Item.id = newData.id
      setData([...data])
    } else {
      setData([...data, newData])
    }

    console.log(data)

  }


  const handleShowText = (value) => {
    setShowText(true)
    setPickedDate(value)
  }

  useEffect(() => {
    localStorage.setItem('thoughts', JSON.stringify(data))
  }, [data])

  useEffect(() => {
    const thoughts = JSON.parse(localStorage.getItem('thoughts'))
    if (thoughts) setData(thoughts)
    else setData([])
    
  }, [])
  



  return (
    <>
      <div
        className='layout-large'
        style={{
          height: 'auto', width: 'auto', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column', padding: '2%'
        }}>
        <div style={{
          width: '85vw', height: `${writing ? '8vh' : '30vh'}`,
          transition: 'all 0.45s ease-in-out',
          borderRadius: '2vh', backgroundColor: getHeader(header).color_1,
          display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
          position: 'relative'
        }}>
          <img src={getHeader(header).img} style={{
            height: '100%',
            width: '100%', transition: 'all 0.45s ease-in-out',
            display: `${writing ? 'none' : ''}`,
          }} />

          <Button
            onClick={newHeader}
            icon={<TbSwitch2 size={20} style={{ color: `${writing ? '#000' : getHeader(header).color_2}`, }} />}
            style={{
              position: 'absolute', top: `10px`, right: `20px`,
              backgroundColor: `${getHeader(header).color_1}80`,
              border: `0px solid ${getHeader(header).color_2}`,
              transition: 'all 0.45s ease-in-out', display: `${!writing ? '' : 'none'}`,
            }} />

          <Button
            onClick={() => setWriting(true)}
            style={{
              width: 'auto', color: getHeader(header).color_1, backgroundColor: getHeader(header).color_2,
              fontWeight: 700, height: '6vh', borderRadius: '1vh',
              border: `1px solid${getHeader(header).color_2}20`,
              display: `${showText ? 'none' : writing ? 'none' : ''}`,
              position: 'absolute', bottom: '10px', left: '10px'
            }}
          >+ Thought</Button>
          <Button
            onClick={() => setShowText(false)}
            style={{
              width: 'auto', color: getHeader(header).color_1, backgroundColor: getHeader(header).color_2,
              fontWeight: 700, height: '6vh', borderRadius: '1vh',
              border: `1px solid${getHeader(header).color_2}20`,
              display: `${!showText ? 'none' : ''}`,
              position: 'absolute', bottom: '10px', left: '10px'
            }}
          >Calendar</Button>

          <Row style={{
            display: `${!writing ? 'none' : 'flex'}`, alignItems: 'center', justifyContent: 'space-between',
            flexDirection: 'row', width: '95%'
          }}>
            <ControlMenu writing={writing} handleData={handleData} values={values} emotion={emotion} state={writing} color={getHeader(header).color_1} color2={getHeader(header).color_2} action={prompstate} prompt={prompt} bold={boldState} italic={italicState} fonts={handleFonts} justify={handleJusitfy} ActionColor={handleColor} modal={handleModal} />

            <Row>
              <Button
                onClick={() => setWriting(false)}
                icon={<AiOutlineClose size={20} style={{ color: getHeader(header).color_2, }} />}
                style={{
                  backgroundColor: `${getHeader(header).color_1}80`,
                  border: `0px solid ${getHeader(header).color_2}`,
                  display: `${writing ? '' : 'none'}`,
                }} />

              <Button
                onClick={newHeader}
                icon={<TbSwitch2 size={20} style={{ color: `${writing ? getHeader(header).color_2 : getHeader(header).color_2}`, }} />}
                style={{
                  backgroundColor: `${getHeader(header).color_1}80`,
                  border: `0px solid ${getHeader(header).color_2}`,
                  transition: 'all 0.45s ease-in-out',
                  display: `${writing ? '' : 'none'}`,
                }} />
            </Row>

          </Row>

        </div>

        <div style={{
          padding: '2% 5% 5% 5%', display: `${writing ? 'none' : showText ? 'none' : ''}`,
          transition: 'all 0.45s ease-in-out'
        }}>
          <CalendarApp color={getHeader(header)} data={data} handleShowText={handleShowText} />
        </div>

        <div style={{
          padding: '2% 5% 5% 5%', display: `${!writing ? 'none' : ''}`,
          transition: 'all 0.45s ease-in-out'
        }}>
          <InputText writing={writing} handleValues={handleValues} emotion={handleEmotion} color={getHeader(header).color_1} color2={getHeader(header).color_2} prompt={prompt} bold={bold} italic={italic} font={font} justify={justify} modal={modal} handleModal={handleModal} />
        </div>

        <div style={{
          padding: '2% 5% 5% 5%', display: `${showText ? '' : 'none'}`,
          transition: 'all 0.45s ease-in-out'
        }}>
          <Showtext color={getHeader(header).color_1} color2={getHeader(header).color_2} data={data} pickedDate={pickedDate} />
        </div>



      </div>

      <div
        className='layout-small'
        style={{
          height: 'auto', width: 'auto', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column', padding: '8% 3% 2% 3%'
        }}>
        <div style={{
          width: '85vw', height: `${writing ? '8vh' : '20vh'}`,
          transition: 'all 0.45s ease-in-out',
          borderRadius: '2vh 2vh 0 0', backgroundColor: getHeader(header).color_1,
          display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
          position: 'relative'
        }}>
          <img src={getHeader(header).img} style={{
            // height: '100%',
            width: '100%', transition: 'all 0.45s ease-in-out',
            display: `${writing ? 'none' : ''}`,
          }} />

          <Button
            onClick={newHeader}
            icon={<TbSwitch2 size={20} style={{ color: `${writing ? '#000' : getHeader(header).color_2}`, }} />}
            style={{
              position: 'absolute', top: `10px`, right: `20px`,
              backgroundColor: `${getHeader(header).color_1}80`,
              border: `0px solid ${getHeader(header).color_2}`,
              transition: 'all 0.45s ease-in-out', display: `${!writing ? '' : 'none'}`,
            }} />

          <Row style={{
            display: `${!writing ? 'none' : 'flex'}`, alignItems: 'center', justifyContent: 'center',
            flexDirection: 'row', width: '95%', flexWrap: 'wrap'
          }}>
            <ControlMenu writing={writing} handleData={handleData} values={values} emotion={emotion} state={writing} color={getHeader(header).color_1} color2={getHeader(header).color_2} action={prompstate} prompt={prompt} bold={boldState} italic={italicState} fonts={handleFonts} justify={handleJusitfy} ActionColor={handleColor} modal={handleModal} />


          </Row>

        </div>



        <Row style={{
          display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row',
          width: '85vw', marginTop: '0.5vh', display: `${writing ? 'none' : ''}`
        }}>
          <Button
            onClick={() => setWriting(true)}
            style={{
              width: '100%', color: getHeader(header).color_1, backgroundColor: getHeader(header).color_2,
              fontWeight: 700, height: '6vh', borderRadius: '1vh',
              border: `1px solid${getHeader(header).color_2}20`,
              display: `${showText ? 'none' : ''}`,
              borderRadius: '0 0 1vh 1vh'
            }}
          >+ Thought</Button>
          <Button
            onClick={() => setShowText(false)}
            style={{
              width: '100%', color: getHeader(header).color_2, backgroundColor: getHeader(header).color_1,
              fontWeight: 700, height: '6vh', borderRadius: '1vh',
              border: `1px solid${getHeader(header).color_2}20`,
              display: `${!showText ? 'none' : ''}`
            }}
          >Calendar</Button>
          {/* <div style={{
          width: '87%', height: '1vh',
          marginLeft: '2%', borderRadius: '2vh',
          backgroundColor: `${getHeader(header).color_1}`
        }} /> */}
        </Row>

        <div style={{
          padding: '2% 5% 5% 5%', display: `${writing ? 'none' : showText ? 'none' : ''}`,
          transition: 'all 0.45s ease-in-out'
        }}>
          <CalendarApp color={getHeader(header)} data={data} handleShowText={handleShowText} />
        </div>

        <div style={{
          padding: '2% 5% 5% 5%', display: `${!writing ? 'none' : 'flex'}`,
          transition: 'all 0.45s ease-in-out', position: 'relative',
          alignItems: 'center', justifyContent: 'center', flexDirection: 'column'
        }}>

          <InputText writing={writing} handleValues={handleValues} emotion={handleEmotion} color={getHeader(header).color_1} color2={getHeader(header).color_2} prompt={prompt} bold={bold} italic={italic} font={font} justify={justify} modal={modal} handleModal={handleModal} />
          <Row style={{
            marginTop: '1vh',
            width: '100%'
          }}>
            <Button
              onClick={() => setWriting(false)}
              icon={<AiOutlineClose size={20} style={{ color: '#000', }} />}
              style={{
                backgroundColor: `${getHeader(header).color_2}80`,
                border: `0px solid ${getHeader(header).color_2}`,
                display: `${writing ? '' : 'none'}`,
                width: '50%', borderRadius: '0 0 0 1vh'
              }} />

            <Button
              onClick={newHeader}
              icon={<TbSwitch2 size={20} style={{ color: `${writing ? '#000' : getHeader(header).color_2}`, }} />}
              style={{
                backgroundColor: `${getHeader(header).color_2}`,
                border: `0px solid ${getHeader(header).color_2}`,
                transition: 'all 0.45s ease-in-out',
                display: `${writing ? '' : 'none'}`,
                width: '50%', borderRadius: '0 0 1vh 0'
              }} />
          </Row>
        </div>

        <div style={{
          padding: '2% 5% 5% 5%', display: `${showText ? '' : 'none'}`,
          transition: 'all 0.45s ease-in-out'
        }}>


          <Showtext color={getHeader(header).color_1} color2={getHeader(header).color_2} data={data} pickedDate={pickedDate} />
        </div>



      </div>
    </>
  )
}
