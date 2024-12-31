import styles from './Navigation.module.css';
import RandomCat from '../RandomCat/RandomCat';
import React, {useState} from 'react';
import CatFact from '../CatFact/CatFact';

const Navigation = () => {
    const [activeButton, setActiveButton] = useState("Random Cats");
    const handleClick = (buttonName) =>{
        setActiveButton(buttonName);
    };
    let content = "";
    if(activeButton === "Random Cats"){
        content = <RandomCat />;
    }else if(activeButton === "Cats Fun Facts"){
        content = <CatFact />
    }
    return (<>
        <div className={styles.navigation}>
            <button className={activeButton === "Random Cats" ? styles.navActive : ""} onClick={() => handleClick("Random Cats")}>Random Cats</button>
            <button className={activeButton === "Cats Fun Facts" ? styles.navActive : ""} onClick={() => handleClick("Cats Fun Facts")}>Cats Fun Facts</button>
            <button className={activeButton === "Generate Cat Names" ? styles.navActive : ""} onClick={() => handleClick("Generate Cat Names")}>Generate Cat Names</button>
        </div>
        {content}
        
    </>
    )
};

export default Navigation;