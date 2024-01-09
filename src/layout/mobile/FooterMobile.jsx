import React from 'react'
import { Button, Layout, } from 'antd';
import { PiFeather, PiFeatherFill } from "react-icons/pi";
import { Link } from "react-router-dom"
const { Footer } = Layout;
export const FooterMobile = (props) => {


    return (
        <Footer style={{
            position: 'fixed', zIndex: 1, width: '100%', bottom: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
            height: '12vh',
            // boxShadow: '-10px 0px 10px #00000030',
            backgroundColor: `transparent`
        }}>

            <Link to='/journal/writing' >
                <Button
                    icon={<PiFeatherFill size={25} style={{ color: '#f7fcf5' }} />}
                    style={{
                        opacity: '0.9', backgroundColor: '#E0AFA0',
                        // position: 'absolute', bottom: '70px', right: '30px',
                        // boxShadow: '0px 0px 10px #00000030',
                        height:'50px', width:'50px',
                        borderRadius: '50%',
                        border: '0.5px solid #463f3a20',
                        display:'flex', alignItems:'center', justifyContent:'center'
                    }} />
            </Link>



        </Footer>
    )
}
