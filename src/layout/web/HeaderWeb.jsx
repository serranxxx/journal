import React from 'react'
import { Button, Col, Layout, Row, Select } from 'antd';
import { titles } from '../../helpers/title';
import { TiArrowBack } from "react-icons/ti";
import { Link } from 'react-router-dom';

const { Header } = Layout;
const { Option } = Select
export const HeaderWeb = ({
    location
}) => {

    return (
        <Header style={{
            position: 'fixed', zIndex: 1, width: '100%',
            backgroundColor: `#E0AFA099`, backdropFilter: 'blur(16px)',
            // background: `radial-gradient(at 100% 10%, rgba(255, 255, 255, 20%), red)`,
            // boxShadow: '10px 0px 10px #00000040',
            height: '10vh', position:'relative',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>



            <img src={titles.title_white} style={{ height: '35%',  }} />
            {
                !location ?
                <Link to={"/journal/"}>
                    <Button 
                    type='ghost'
                    icon={<TiArrowBack 
                        size={35}
                        style={{
                        color:'#f4f3ed'
                    }}/>}
                    style={{
                        position:'absolute', right:'25px', top:'15px'
                    }}
                    />
                </Link>
                : <></>
            }

        </Header>
    )
}
