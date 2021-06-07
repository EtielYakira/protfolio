import {useState, useEffect} from 'react'

function RandomJokeBox(params) {

    const [randomJoke, setRandomJoke] = useState('')

    useEffect(() => {
        fetch('http://api.icndb.com/jokes/random')
        .then(response => response.json())
        .then(joke =>{
            setRandomJoke(joke.value.joke)
        })
    }, [])

   
    return <>
    <div className='container'>
    <h2 className='text-warning'>RandomJokeBox</h2>
    <p>{randomJoke}</p>
    </div>
    </>
}


export default RandomJokeBox