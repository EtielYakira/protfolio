import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

export default function Home() {
    return <>
        <Container className='text-center mt-5' id='HomeContainer'>
        <div>
         <h1 className=''>MY projects</h1>
         <h3 className='my-1'>amazing project one of a kind</h3>
         <Button className='my-4' variant='info' href="https://www.linkedin.com/in/itiel-yakira/" target='_blank'>   Learn More About Me </Button>
        </div>
        </Container>
    </>
}