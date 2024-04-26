import styles from "./SearchElem.module.scss"
import TextInput from "../TextInput/TextInput"
import React from "react"
import UnsetButton from "../UnsetButton/UnsetButton"
import Card from "../Card/Card"
import axios from "axios"
export default function Name() {
    const [inputValue, setInputValue] = React.useState('')
    const [allCocktails, setAllCocktails] = React.useState([])
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }
    const onDeleteText = () => {
        setInputValue('')
    }
    React.useEffect(() => {
        axios.get('/allCocktails.json').then((res) => {
            setAllCocktails(res.data)
        })
    },[])
    return (
        <section className={styles.name}>
            <div className={styles.name__up}>
                <h2>Search By: {inputValue}</h2>
                <nav className={styles.name__menu}>
                    <ul>    
                        <li>
                            <TextInput
                            placeholder="Enter cocktail's name"
                            onChange = {handleChange}
                            value={inputValue}
                            onClick={onDeleteText}
                            />
                        </li>
                        <li><UnsetButton text="Find" /></li>
                    </ul>
                </nav>
            </div>
            <div className={styles.name__main}>
                {allCocktails.filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase())).map((obj) => {
                    return (
                        <Card
                        key={obj.name}
                        name={obj.name}
                        img={obj.img}
                        ingredients={obj.ingredients}
                    />
                    )
                })}
            </div>
        </section>
    )
}