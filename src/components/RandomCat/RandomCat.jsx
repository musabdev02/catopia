import styles from './RandomCat.module.css';


const RandomCat = () => {


    return(
        <div className={styles.randomCats}>
            <img src="https://cdn2.thecatapi.com/images/ln1Ks7VIu.jpg" alt="randomCats" />
            <img src="https://cdn2.thecatapi.com/images/cns.jpg" alt="randomCats" />
            <img src="https://cdn2.thecatapi.com/images/d2h.jpg" alt="randomCats" />
            <img src="https://cdn2.thecatapi.com/images/b70.jpg" alt="randomCats" />
            <img src="https://cdn2.thecatapi.com/images/ap1.jpg" alt="randomCats" />
            <img src="https://cdn2.thecatapi.com/images/anr.gif" alt="randomCats" />
        </div>
    )
};

export default RandomCat;