import { useEffect } from 'react';
import styles from './RandomCat.module.css';
import { useState } from 'react';
import loader  from './loader.svg';


const RandomCat = () => {
    const [catGallery, setCatGallery] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getData = async () => {
        try {
            const getData = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
            const data = await getData.json();
            setCatGallery(data);
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className={styles.randomCats}>
            {
               isLoading ? <img src={loader} className={styles.loader}/>
               :
               catGallery.map((element, i) => <img key={i} src={element.url} alt={element.id}/>)
            }
        </div>
    )
};

export default RandomCat;