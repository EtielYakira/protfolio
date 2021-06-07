const fetch = require('node-fetch');

let allJokes = () => {
    const dataArr = []
    fetch('http://api.icndb.com/jokes')
    .then(response => response.json())
    .then(jokes =>{
        console.log(jokes);
        jokes.value.forEach(joke => dataArr.push(joke.joke))
    })
    return dataArr
}

let RandomJoke = () => {
    let randomJoke = []

    fetch('http://api.icndb.com/jokes/random')
    .then(response => response.json())
    .then(joke =>{
        randomJoke.push(joke.value.joke)
    })
    return randomJoke
}

let CategoryList = () => {
    fetch('http://api.icndb.com/categories')
    .then(response => response.json())
    .then(categorys =>{
        return [...categorys.value]
    })

}

let LimitingCategory = (categoriesArray) => {
    const dataArr = []

    fetch(`http://api.icndb.com/jokes/?limitTo=${categoriesArray}`)
    .then(response => response.json())
    .then(jokes =>{
        jokes.value.forEach(joke => dataArr.push(joke.joke))
    })
    return dataArr
}

export {RandomJoke, allJokes, LimitingCategory, CategoryList}