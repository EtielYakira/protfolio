import BmiCalculator from './BmiCalculator'
import {useState} from 'react'
import ResultBmi from './ResultBmi'

function Bmi() {

    const [parameters, setParameters] = useState({
        weight:0,
        height:0
    })

    let [okToShow, setOkToShow] = useState(false)

    function onParameters(name,value) {
        if(value){
            setParameters({...parameters,[name]:value})
    }
    }

    function isOkToShow() {
        setOkToShow(parameters.weight !== 0 && parameters.height !== 0)
    }

    return <>
    <h1 className='mx-auto'>Your BMI</h1>

    <BmiCalculator onParameters={onParameters}  parameters={parameters} isOkToShow={isOkToShow}/>
    {okToShow && <ResultBmi parameters={parameters}/>}
    </>
}


export default Bmi