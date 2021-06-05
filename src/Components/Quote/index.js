import {ImgesForQuotes, quotesData} from '../../DAL/Quote/data'
import Button from 'react-bootstrap/Button'
import {useState} from 'react'
import QuoteCard from './QuoteCard'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function Quote() {
    const randomNumber = (lengthToTake) => Math.floor(Math.random() * lengthToTake)

    
    let [currQuoteAndColor, setCurrQuoteAndColor] = useState({
        currImg:ImgesForQuotes[randomNumber(ImgesForQuotes.length)],
        currQuote:quotesData[randomNumber(quotesData.length)]
    })
    
    function onChangeQuote() {
        setCurrQuoteAndColor({
            currImg:ImgesForQuotes[randomNumber(ImgesForQuotes.length)],
            currQuote:quotesData[randomNumber(quotesData.length)]
        })
    }
    
    return <>
    <h1 className='text-center'>Students Center</h1>

        <Row>
            <Col md={4} className="mx-auto my-5">
        <QuoteCard currImg={currQuoteAndColor.currImg}  currQuote={currQuoteAndColor.currQuote}/>
            </Col>
        </Row>
        <Row>
            <Button className="mx-auto" onClick={() => onChangeQuote()} >
                Change Quote
            </Button>
        </Row>

    </>
}

export default Quote