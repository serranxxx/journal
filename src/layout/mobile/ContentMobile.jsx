import React, { useEffect } from 'react'
import { Button, Col, Drawer, Layout, Row } from 'antd';
import { CalendarApp } from '../CalendarApp';
import { handleBanners, handleImages } from '../../helpers/title';
import { useState } from 'react';
import { Showtext } from '../Showtext';

const { Content } = Layout;

export const ContentMobile = (props) => {

    const [data, setData] = useState(JSON.parse(localStorage.getItem('thoughts')))
    const [banner, setBanner] = useState(Math.floor(Math.random() * 11) + 1)
    const [banner_2, setBanner_2] = useState(Math.floor(Math.random() * 11) + 1)
    const [image, setImage] = useState(Math.floor(Math.random() * 9) + 1)
    const [pickedDate, setPickedDate] = useState('date')
    const [currentDate, setCurrentDate] = useState('')
    const [open, setOpen] = useState(false)

    const RandomColor = () => {
        setBanner(Math.floor(Math.random() * 11) + 1)
        setBanner_2(Math.floor(Math.random() * 11) + 1)
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

    useEffect(() => {
      if (banner === banner_2) {
        setBanner_2(Math.floor(Math.random() * 11) + 1)
      }
    }, [banner])
    

    return (
        <>
            <Content className='scrollable-div'
                style={{
                    marginTop: '12vh', marginBottom: '14vh', overflowY: 'scroll',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexDirection: 'column', padding: '5% 0 0 0'
                }}
            >

                <div style={{
                    width: '80%', height: '25%',
                    borderRadius: '2vh', backgroundColor: '#BCB8B150',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    <img src={handleBanners(banner)} style={{ width: '90%', transition: 'all 0.45s ease-in-out' }} />
                </div>
                <div style={{
                    width: '80%', height: '40vh', backgroundColor: '#BCB8B150',
                    borderRadius: '2vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '5%', margin:'5% 0 5% 0'
                }}>
                    <img src={handleImages(image)} style={{ width: '70%', transition: 'all 0.45s ease-in-out' }} />

                </div>

                <div style={{
                    width: '80%', height: '25%',
                    borderRadius: '2vh', backgroundColor: '#BCB8B150',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom:'5%'
                }}>
                    <img src={handleBanners(banner_2)} style={{ width: '90%', transition: 'all 0.45s ease-in-out' }} />
                </div>

                <div
                    className='scrollable-div'
                    style={{
                        width: '80%', height: '100%',
                        borderRadius: '2vh', overflow: 'auto', backgroundColor: '#FFFFFC'
                    }}>
                    <CalendarApp data={data} action={handleSelect} />
                </div>


            </Content>

            <Drawer
                title={currentDate}
                placement="left"
                onClose={() => setOpen(false)}
                width='100%'
                open={open}
                style={{
                    backgroundColor: `$#f4f3ee`,
                }}>
                <Showtext data={data} pickedDate={pickedDate} />
            </Drawer>
        </>
    )
}
