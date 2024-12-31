import styles from './Header.module.css';
import pawLogo from './logo.png';
import ginger from './ginger.png';
import ginger1 from './ginger1.jpg';
import ginger2 from './ginger2.jpg';
import gvideo1 from './video1.mp4';
import gvideo2 from './video2.mp4';
import gvideo3 from './video3.mp4';
import { useState } from 'react';

const Header = ({ modeF, currentMode }) => {
    const [isOpened, setIsOpened] = useState(false);
    const closePop = (e) => {
        let container = e.target.parentElement.parentElement.parentElement;
        container.style.display = "none";
        setIsOpened(false);
    };
    const openPop = () => {
        setIsOpened(true);
    }
    return (<>
        <nav>
            <div className={styles.logo} onClick={openPop}>
                <img src={pawLogo} alt="paw_logo" />
                <h3>Catopia</h3>
            </div>
            <div className={styles.nav_ctas}>
                <a href='#'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                    <span>Your Favorites</span>
                </a>
                <p onClick={modeF}>
                    {
                        currentMode ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                            </svg>

                    }

                </p>
            </div>
        </nav>

        <div className={styles.popUp_container} style={isOpened ? {display: "flex"} : {display: "none"}}>
            <div className={styles.popUp}>
                <span className={styles.cross} onClick={closePop}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
              </span>
                <img src={ginger} alt="ginger" />
                <h3>Meet Ginger</h3>
                <h4>Ginger The Drama King</h4>
                <p>Ginger is an orange ball of trouble! He's never home, always out doing "important cat stuff" like chasing imaginary mice or trying to impress the ladies <span>(</span> Spoiler: no female cats seem interested in him, but Ginger still thinks he's the coolest cat around! <span>)</span>. But when he gets hungry, suddenly he’s the sweetest, most loving cat ever—purring, rubbing, and acting like he's been loyal all along. We all know his game, but it's hard not to laugh at how dramatic he gets for some food! <br/> <br/>
                 Honestly, I don't like it. I'm kind of jealous of him. But it's fine, she likes him, so yeah! Best male catI've ever seen (even though I'm saying this under pressure).</p>
                <h2>Ginger's Gallery</h2>
                <div className={styles.gallery}>
                    <img src={ginger1}  alt="ginger" />
                    <video src={gvideo1} loop autoPlay type="video/mp4"></video>
                    <img src={ginger2}  alt="ginger" />
                    <video src={gvideo2} loop autoPlay type="video/mp4"></video>
                    <img src={ginger}  alt="ginger" />
                    <video src={gvideo3} loop autoPlay type="video/mp4"></video>
                </div>
            </div>
        </div>
    </>)
};
export default Header;