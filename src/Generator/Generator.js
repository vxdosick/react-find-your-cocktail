import React from 'react'
import TextInput from '../TextInput/TextInput'
import UnsetButton from '../UnsetButton/UnsetButton'
import styles from './Generator.module.scss'
export default function Generator() {
    const [inputValue, setInputValue] = React.useState('')
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }
    const onDeleteText = () => {
        setInputValue('')
    }
    return (
        <section className={styles.generator}>
            <div className={styles.generator__up}>
                <h2>Generator</h2>
                <div className={styles.generator__generate}>
                    <TextInput value={inputValue} onChange={handleChange} onClick={onDeleteText} placeholder="Enter name the generate cocktail..." />
                    <UnsetButton text="Generate" />
                </div>
            </div>

        </section>
    )
}