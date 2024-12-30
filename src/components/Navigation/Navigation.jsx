import styles from './Navigation.module.css';

const Navigation = () => {


    return (<>
        <div className={styles.navigation}>
            <button className={styles.navActive}>Random Cats</button>
            <button>Cats Fun Facts</button>
            <button>Generate Cat Names</button>
        </div>
    </>
    )
};

export default Navigation;