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
    <h1>RandomJokeBox</h1>
    <p>{randomJoke}</p>
    </>
}


export default RandomJokeBox