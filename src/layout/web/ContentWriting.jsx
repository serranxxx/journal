
import { Layout } from 'antd';
import { InputTextMobile } from '../mobile/InputTextMobile';
const { Content } = Layout;

export const ContenWriting = (props) => {

    const { prompt, values, setValues, bold, italic, justify, font } = props

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


    return (
        <>
            <Content
                className='scrollable-div layout-large'
                style={{
                    marginTop: '0vh', marginBottom: '14vh', overflowY: 'scroll', height: 'auto',
                    alignItems: 'flex-start', justifyContent: 'flex-start',
                    flexDirection: 'column', padding: '0%', backgroundColor: '#f4f3ee'
                }}
            >
                <InputTextMobile handleValues={handleValues} prompt={prompt}
                    bold={bold} italic={italic} font={font} justify={justify}
                />


            </Content>

            <Content
                className='scrollable-div layout-small'
                style={{
                    marginTop: '8vh', marginBottom: '14vh', overflowY: 'scroll', height: 'auto',
                    alignItems: 'flex-start', justifyContent: 'flex-start',
                    flexDirection: 'column', padding: '0%', backgroundColor: '#f4f3ee'
                }}
            >
                <InputTextMobile handleValues={handleValues} prompt={prompt}
                    bold={bold} italic={italic} font={font} justify={justify}
                />


            </Content>
        </>


    )
}
