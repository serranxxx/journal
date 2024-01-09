import React, { useEffect } from 'react'
import { Button, Col, Drawer, Layout, Row } from 'antd';
import { CalendarApp } from '../CalendarApp';
import { Link } from "react-router-dom"
import { handleBanners, handleImages } from '../../helpers/title';
import { useState } from 'react';
import { Showtext } from '../Showtext';

const { Content } = Layout;

export const ContentWeb = (props) => {

    const [data, setData] = useState(JSON.parse(localStorage.getItem('thoughts')))
    const [banner, setBanner] = useState(Math.floor(Math.random() * 11) + 1)
    const [banner_, setBanner_] = useState(Math.floor(Math.random() * 11) + 1)
    const [image, setImage] = useState(Math.floor(Math.random() * 9) + 1)
    const [pickedDate, setPickedDate] = useState('date')
    const [currentDate, setCurrentDate] = useState('')
    const [open, setOpen] = useState(false)

    const RandomColor = () => {
        setBanner(Math.floor(Math.random() * 11) + 1)
        setBanner_(Math.floor(Math.random() * 11) + 1)
        setImage(Math.floor(Math.random() * 9) + 1)
    }

    const handleSelect = (date, formalDate) => {
        setPickedDate(date)
        setCurrentDate(formalDate)
        setOpen(true)
    }

    useEffect(() => {

        const thoughts = JSON.parse(localStorage.getItem('thoughts'))
        if (thoughts) setData(thoughts)
        else setData([])

        const intervalId = setInterval(RandomColor, 30000); 
        return () => clearInterval(intervalId);

    }, []); 

    return (
        <>
            <Content 
            className='scroll'
                style={{
                    marginTop: '0vh', marginBottom: '3vh', overflowY: 'scroll',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexDirection: 'row', padding: '0% 0 0 0'
                }}
            >

                <Row style={{
                    width: '90%', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
                    flexDirection: 'row', height: '70vh',
                }}>
                    <div
                        className='scroll'
                        style={{
                            width: '65%', height: '137%', zIndex:0,
                            borderRadius: '2vh', overflow: 'auto', backgroundColor: '#FFFFFC'
                        }}>
                        <CalendarApp data={data} action={handleSelect}  />
                    </div>

                    <Col style={{
                        width: '30%', height: '100%',
                    }}>
                        <div style={{
                            width: '100%', height: '35%',
                            borderRadius: '2vh', backgroundColor: '#BCB8B150',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            <img src={handleBanners(banner)} style={{ height: '100%', transition: 'all 0.45s ease-in-out' }} />
                        </div>
                        <div style={{
                            width: '100%', height: '60%', backgroundColor: '#BCB8B150',
                            borderRadius: '2vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            marginTop: '5%', marginBottom:'5%'
                        }}>
                            <div style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                flexDirection: 'column', height: '80%'
                            }}><img src={handleImages(image)} style={{ height: '80%', transition: 'all 0.45s ease-in-out' }} />
                                <Link to='/journal/writing' >
                                    <Button style={{
                                        backgroundColor: '#463f3a',
                                        width: '15vw', color: '#f4f3ee',
                                        fontWeight: '600',
                                        borderRadius:'3vh', border:'1px solid #463f3a'
                                    }}>Start writing</Button>
                                </Link>

                            </div>

                        </div>
                        <div style={{
                            width: '100%', height: '35%',
                            borderRadius: '2vh', backgroundColor: '#BCB8B150',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            <img src={handleBanners(banner_)} style={{ height: '100%', transition: 'all 0.45s ease-in-out' }} />
                        </div>
                    </Col>
                </Row>


            </Content>

            <Drawer
                title={currentDate}
                placement="left"
                onClose={() => setOpen(false)}
                width='35%'
                open={open}
                style={{
                    backgroundColor: `$#f4f3ee`,
                }}>
                    <Showtext data={data} pickedDate={pickedDate}/>
            </Drawer>
        </>
    )
}
