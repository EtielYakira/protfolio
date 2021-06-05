import BMI from '../../DAL/BMI/bmiAlgoritem'
function ResultBmi({parameters}) {
    return <>
    <h1>WELCOMMMMM {BMI(parameters.weight, parameters.height)}</h1>
    </>
}

export default ResultBmi