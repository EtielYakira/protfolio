import Card from 'react-bootstrap/Card'




function QuoteCard({currQuote, currImg}) {
    
    
    return (
<Card className='w-25'>
  <Card.Header>Quote</Card.Header>
  <Card.Body style={{backgroundColor:`${currImg}`}}>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        {currQuote.quote}{' '}
      </p>
      <footer className="blockquote-footer">
        {currQuote.maker} <cite title="Source Title">{Math.floor(Math.random()*2021)}bc</cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
    ) 
}

export default QuoteCard