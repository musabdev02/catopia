import styles from './Navigation.module.css';
import RandomCat from '../RandomCat/RandomCat';
import React, {useState} from 'react';
import CatFact from '../CatFact/CatFact';

const Navigation = () => {
    const [activeButton, setActiveButton] = useState("Random Cats");
    const pages = [<RandomCat />, <CatFact />];
    const handleClick = (buttonName) =>{
        setActiveButton(buttonName);
    };
    return (<>
        <div className={styles.navigation}>
            <button className={activeButton === "Random Cats" ? styles.navActive : ""} onClick={() => handleClick("Random Cats")}>Random Cats</button>
            <button className={activeButton === "Cats Fun Facts" ? styles.navActive : ""} onClick={() => handleClick("Cats Fun Facts")}>Cats Fun Facts</button>
            <button className={activeButton === "Generate Cat Names" ? styles.navActive : ""} onClick={() => handleClick("Generate Cat Names")}>Generate Cat Names</button>
        </div>
        {
            activeButton === "Random Cats" ? <CatFact /> : ""
        }
        
    </>
    )
};

export default Navigation;