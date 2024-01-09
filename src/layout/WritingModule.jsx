import { Layout, Modal, message } from 'antd'
import React from 'react'
import { HeaderWeb } from './web/HeaderWeb'
import { SiderWeb } from './web/SiderWeb'
import { ContenWriting } from './web/ContentWriting'
import { useState } from 'react'
import { useEffect } from 'react'
import { FooterWeb } from './web/FooterWeb'
import { emotions } from '../helpers/emotions'
import { EmotionCard } from './EmotionCard'
import { FooterWriting } from './mobile/FooterWriting'
import { FooterMobile2 } from './mobile/FooterMobile2'
import { HeaderMobile } from './mobile/HeaderMobile'
import { FooterMobile_ } from './mobile/FooterMobile_'

export const WritingModule = () => {

    const [bold, setBold] = useState(false)
    const [italic, setItalic] = useState(false)
    const [justify, setJustify] = useState('left')
    const [modal, setModal] = useState(false)
    const [emotion, setEmotion] = useState(emotions.e1)
    const [font, setFont] = useState('')
    const [data, setData] = useState(JSON.parse(localStorage.getItem('thoughts')))
    const [prompt, setPrompt] = useState(false)
    const [values, setValues] = useState({
        title: '',
        date: '',
        prompt: '',
        text: '',
        propmtState: null
    })

    const handleData = (newData) => {
        if (data) {
            const Item = data.find(item => item.simpleDate === newData.simpleDate)
            if (Item) {
                console.log('item: ', Item)
                console.log('new: ', newData)
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
                Item.prompState = newData.prompState
                Item.id = newData.id
                setData([...data])
            } else {
                setData([...data, newData])
            }

            message.info('Saved')
        }


    }

    useEffect(() => {
        localStorage.setItem('thoughts', JSON.stringify(data))
        console.log(data)
    }, [data])

    useEffect(() => {
        const thoughts = JSON.parse(localStorage.getItem('thoughts'))
        if (thoughts) setData(thoughts)
        else setData([])

    }, [])

    const handleEmotions = (emotion) => {
        setEmotion(emotion)
        setModal(false)

    }



    return (
        <>

            <Layout
                className='layout-large'
                style={{ minHeight: '100vh', backgroundColor: '#F4F3EE' }}>

                {/* <SiderWeb
                    bold={bold} italic={italic} justify={justify} font={font} emotion={emotion}
                    values={values} handleData={handleData}
                    prompt={prompt} setPrompt={setPrompt} /> */}
                <Layout>

                    <HeaderWeb location={false} />
                    <ContenWriting
                        bold={bold} italic={italic} justify={justify} font={font}
                        prompt={prompt} values={values}
                        setValues={setValues} />

                    <FooterWeb bold={bold} italic={italic} justify={justify} font={font}
                        setBold={setBold} setItalic={setItalic} setJustify={setJustify}
                        setFont={setFont} emotion={emotion} setModal={setModal}
                        prompt={prompt} values={values} handleData={handleData} setPrompt={setPrompt}
                    />

                </Layout>

            </Layout>

            <Layout
                className='layout-small'
                style={{ minHeight: '100vh', backgroundColor: '#F4F3EE' }}>


                <HeaderMobile location={false}/>
                <ContenWriting
                    bold={bold} italic={italic} justify={justify} font={font}
                    prompt={prompt} values={values}
                    setValues={setValues} />

                <FooterMobile_ bold={bold} italic={italic} justify={justify} font={font}
                    setBold={setBold} setItalic={setItalic} setJustify={setJustify}
                    setFont={setFont} emotion={emotion} setModal={setModal}
                    prompt={prompt} values={values} handleData={handleData} setPrompt={setPrompt}
                />

                {/* <FooterMobile2 bold={bold} italic={italic} justify={justify} font={font}
                    setBold={setBold} setItalic={setItalic} setJustify={setJustify}
                    setFont={setFont} emotion={emotion} setModal={setModal}
                    prompt={prompt} values={values} handleData={handleData}
                    setPrompt={setPrompt}
                /> */}

                {/* <FooterWriting /> */}

            </Layout>

            {/* </Layout> */}

            <Modal
                open={modal}
                footer={<></>}
                onOk={() => setModal(false)}
                onCancel={() => setModal(false)}
            >
                <div style={{
                    display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
                    flexDirection: 'row', flexWrap: 'wrap',
                }}>
                    <EmotionCard data={emotions.eArray} action={handleEmotions}
                    />
                </div>

            </Modal>
        </>

    )
}
