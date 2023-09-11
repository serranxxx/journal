import React from 'react'
import { emotions } from '../helpers/emotions'

export const EmotionCard = (props) => {

    const hanldeEmotion = (value) => {
        console.log(value)
        props.action(value)
    }

    return (

        <>
            {
                props.data.map((user) => (
                    <>
                        <div
                            key={user}
                            className='emotion large'
                            onClick={() => hanldeEmotion(user)}
                            style={{
                                height: '7vh', aspectRatio: '1/1', margin: '0.5vh',
                                transition: 'all 0.35s ease-in-out', cursor: 'pointer'
                            }}>
                            <img src={user} style={{ height: '100%' }} />

                        </div>

                        <div
                            key={user}
                            className='emotion small'
                            onClick={() => hanldeEmotion(user)}
                            style={{
                                height: '8vh', aspectRatio: '1/1', margin: '0.5vh',
                                transition: 'all 0.35s ease-in-out', cursor: 'pointer'
                            }}>
                            <img src={user} style={{ height: '100%' }} />

                        </div>
                    </>
                ))
            }
        </>

    )
}
