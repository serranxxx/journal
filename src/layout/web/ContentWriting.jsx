
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
        <Content
            className='scrollable-div'
            style={{
                marginTop: '12vh', marginBottom: '14vh', overflowY: 'scroll', height: 'auto',
                display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start',
                flexDirection: 'column', padding: '1%', backgroundColor: '#f4f3ee'
            }}
        >
            <InputTextMobile handleValues={handleValues} prompt={prompt}
                bold={bold} italic={italic} font={font} justify={justify}
            />


        </Content>
    )
}
