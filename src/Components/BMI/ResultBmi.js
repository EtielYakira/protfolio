import BMI from '../../DAL/BMI/bmiAlgoritem'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function ResultBmi({parameters}) {
    return <>
    <Card className='border border-black' style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://img.pixers.pics/pho_wat(s3:700/FO/43/94/40/16/700_FO43944016_8afb689febd6d5a6abd6f6be2239e52a.jpg,700,580,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,530,jpg)/stickers-fat-boy-with-burger-and-hot-dog.jpg.jpg" />
  <Card.Body>
    <Card.Title>You Are fat</Card.Title>
    <Card.Text>
    <h3>Your BMI IS: {BMI(parameters.weight, parameters.height)}</h3>
      you are in danger pleace checkj our diet menu.
    </Card.Text>
    <Button variant="primary"><a className='text-white' target='_blank' rel='noreferrer' href='https://cdn.vox-cdn.com/thumbor/-460i09zo22nGbnFWXWPU3NK32g=/0x0:800x727/1200x0/filters:focal(0x0:800x727)/cdn.vox-cdn.com/uploads/chorus_asset/file/6751989/menuv.0.jpg'>diet menu</a></Button>
  </Card.Body>
</Card>
    </>
}

export default ResultBmi