import { useEffect } from 'react';
import styles from './CatFact.module.css';
import { useState } from 'react';
import loader from '../RandomCat/loader.svg'

const CatFact = () => {
  const [catFacts, setCatFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const raw = await fetch("https://meowfacts.herokuapp.com/?count=12");
    const data = await raw.json();
    setCatFacts(data);
    setIsLoading(false)
  }

  useEffect(() => {
    getData();
  }, [])

  const copyFact = (e) =>{
    try{
      navigator.clipboard.writeText(e.target.parentElement.parentElement.childNodes[1].textContent);
      alert("Copied!")
    }catch(error){
      console.log(error);
    }
  };
  return (
    <div className={styles.catFact}>
      {
                     isLoading ? <img src={loader} className={styles.loader}/>
                     :
                     catFacts.data.map((element, index) =>
                      <div className={styles.catFact_card} key={index}>
                    <span>{index+1}</span>
                    <p>{element}</p>
                    <div className={styles.options}>
                      <svg onClick={copyFact} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                      </svg>
            
                    </div>
                  </div>
                    )
      }
     


    </div>
  )
};

export default CatFact;