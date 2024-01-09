import { Button, Layout, Row } from 'antd'
import { HeaderWeb } from './web/HeaderWeb';
import { ContentWeb } from './web/ContentWeb';
import { HeaderMobile } from './mobile/HeaderMobile';
import { ContentMobile } from './mobile/ContentMobile';
import { FooterMobile } from './mobile/FooterMobile';

export const LayoutApp = () => {

  return (
    <>

      <Layout
        className='layout-large'
        style={{ minHeight: '100vh', backgroundColor: '#F4F3EE' }}>
        <HeaderWeb location={true}/>
        <ContentWeb />
      </Layout>

      <Layout
        className='layout-small'
        style={{ minHeight: '100vh', backgroundColor: '#F4F3EE' }}>
        <HeaderMobile location={true}/>
        <ContentMobile />
        <FooterMobile />
      </Layout>



    </>
  )
}
