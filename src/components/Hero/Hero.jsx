import styles from './Hero.module.css';
import catGif from './hero-bg.gif'

const Hero = () => {


    return (
        <section id={styles.hero}>
            <div className="container">
                <div className={styles.hero_sec}>
                    <div className={styles.hero_content}>
                        <h1>Welcome to Catopia 🐾</h1>
                        <p>The Purr-fect Place for Cat Lovers!</p>
                    </div>
                    <div className={styles.hero_img}>
                        <img src={catGif} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Hero;