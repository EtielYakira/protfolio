import {useState, useEffect} from 'react'
import RandomJokeBox from './RandomJokeBox'
import SelectInput from './SelectInput'
import SearchBox from './SearchBox'
import DataInCategorySelectedToShow from './DataInCategorySelectedToShow'




function Chuck() {
    const [categoryList, setCategoryList] = useState([])
    const [categorySelected, setCategorySelected] = useState([])
    const [dataToShow, setDataToShow] = useState([])
    const [searchWord, setSearchWord] = useState('')

    
    
    useEffect(() => {
        fetch(`http://api.icndb.com/jokes/?limitTo=${categorySelected}`)
        .then(response => response.json())
        .then(jokes =>{
            let jokesArr = jokes.value.map(joke => joke.joke)
            setDataToShow(jokesArr)
            console.log('a');
        })  
    }, [categorySelected] )

    useEffect(() => {
        fetch('http://api.icndb.com/categories')
        .then(response => response.json())
        .then(categorys =>{
            setCategoryList(categorys.value)
        })    
    }, [])

    const onChoosingCategory = ({target:{value}}) => {
        setCategorySelected([value])
    }
    const onChangeSearchWord = ({target:{value}}) => {
        setSearchWord(value)
    }


    
    return <>
    <h1 className='mainTitle text-center'>Norris Jokes</h1>
    <p className='container'>A warm welcome message works like a charm in any situation, be it the recruitment of a new employee or having returning ones back, or meeting friends after a long time! Welcome messages are also appreciated in more formal settings like welcoming a guest or customer. Whatever the arrangement is, these notes convey your excitement and happiness towards the other parties and help them settle in more comfortably. So if you have a new party to meet and greet them cordially, pass along a sweet, meaningful welcome message while offering them a genuine smile! Perfect welcome messages can be hard to find, so help yourselves with a compilation of unique welcoming messages and notes below!</p>
    <RandomJokeBox/>
    <SelectInput categoryList={categoryList} name={'category'} onChoosingCategory={onChoosingCategory}/>
    <div className='d-flex'>
    <SearchBox onChangeSearchWord={onChangeSearchWord}/>
    <DataInCategorySelectedToShow dataToShow={dataToShow} searchWord={searchWord}/>
    </div>
    </>
}
export default Chuck