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
    <h1>TITLE</h1>
    <p>lorem</p>
    <RandomJokeBox/>
    <SelectInput categoryList={categoryList} name={'category'} onChoosingCategory={onChoosingCategory}/>
    <SearchBox onChangeSearchWord={onChangeSearchWord}/>
    <DataInCategorySelectedToShow dataToShow={dataToShow} searchWord={searchWord}/>
    </>
}
export default Chuck