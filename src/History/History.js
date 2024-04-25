import styles from "./History.module.scss"
import TextInput from "../TextInput/TextInput"
import React from "react"
import UnsetButton from "../UnsetButton/UnsetButton"
import Card from "../Card/Card"
export default function History() {
    const [inputValue, setInputValue] = React.useState('')
    const [secondInputValue, setSecondInputValue] = React.useState('')
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }
    const secondHandleChange = (event) => {
        setSecondInputValue(event.target.value)
    }
    const onDeleteText = () => {
        setInputValue('')
    }
    const secondOnDeleteText = () => {
        setSecondInputValue('')
    }
    const allHistory = [
        {
            "name": "Cuba Libre",
            "img": "/img/all-cocktails/cocktail1.png",
            "ingredients": "-rum-cola-lime"
          },
          {
            "name": "Wiskey Sour",
            "img": "/img/all-cocktails/cocktail2.png",
            "ingredients": "-wiskey-protein-sour"
          },
          {
            "name": "Wodka Sour",
            "img": "/img/all-cocktails/cocktail3.png",
            "ingredients": "-wodka-protein-sour"
          },
          {
            "name": "Cuba Libre",
            "img": "/img/all-cocktails/cocktail1.png",
            "ingredients": "-rum-cola-lime"
          },
          {
            "name": "Wiskey Sour",
            "img": "/img/all-cocktails/cocktail2.png",
            "ingredients": "-wiskey-protein-sour"
          },
          {
            "name": "Wodka Sour",
            "img": "/img/all-cocktails/cocktail3.png",
            "ingredients": "-wodka-protein-sour"
          },
          {
            "name": "Cuba Libre",
            "img": "/img/all-cocktails/cocktail1.png",
            "ingredients": "-rum-cola-lime"
          },
          {
            "name": "Wiskey Sour",
            "img": "/img/all-cocktails/cocktail2.png",
            "ingredients": "-wiskey-protein-sour"
          },
          {
            "name": "Wodka Sour",
            "img": "/img/all-cocktails/cocktail3.png",
            "ingredients": "-wodka-protein-sour"
          },
    ]
    return (
        <section className={styles.history}>
            <div className={styles.history__top}>
                <h2 className={styles.history__title}>Search By: {inputValue}</h2>
                <div className={styles.history__search}>
                <TextInput value={inputValue} onClick={onDeleteText} onChange = {handleChange} placeholder="Look at history" />
                <UnsetButton text="Find"/>
                </div>
            </div>
            <div className={styles.history__main}>
                <div className={styles.name__main}>
                {allHistory.filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase())).map((obj) => {
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
            </div>
            {/* <div className={styles.history__add}>
                <h2>Name: {secondInputValue}</h2>
                <div className={styles.history__addsearch}>
                    <TextInput  value={secondInputValue} onClick={secondOnDeleteText} onChange = {secondHandleChange} placeholder="Add to the stories" />
                    <UnsetButton text="Search"/>
                </div>
            </div>
            <textarea placeholder="Enter your cocktail information..." cols="80" rows="5" spellCheck="false"></textarea> */}
        </section>
    )
}