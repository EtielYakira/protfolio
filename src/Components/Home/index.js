import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

export default function Home() {
    return <>
        <Container className='text-center mt-5 mainTitle' id='HomeContainer'>
        <div>
         <h1 className=''>My Projects</h1>
         <h3 className='my-1 componentTitle' style={{fontSize:'100px'}}>veni vidi vici</h3>
         <Button className='my-4' variant='info' href="https://www.linkedin.com/in/itiel-yakira/" target='_blank'>   Learn More About Me </Button>
        </div>
        </Container>
    </>
}