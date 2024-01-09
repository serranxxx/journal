import React from 'react'
import { Button, Col, Layout, Row, Select } from 'antd';
import { titles } from '../../helpers/title';
import { Link } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';

const { Header } = Layout;
const { Option } = Select
export const HeaderMobile = ({location}) => {
    
    return (
        <Header style={{
            position: 'fixed', zIndex: 1, width: '100%',
            backgroundColor: `#E0AFA0`,
            // background: `radial-gradient(at 100% 10%, rgba(255, 255, 255, 20%), red)`,
            // boxShadow: '10px 0px 10px #00000040',
            height: '8vh',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>


           
        <img src={titles.title_white}  style={{height:'35%', }}/>
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
                        position:'absolute', right:'25px', top:'10px'
                    }}
                    />
                </Link>
                : <></>
            }

        </Header>
    )
}
