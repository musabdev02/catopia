import styles from './Header.module.css';
import pawLogo from './logo.png'

const Header = () => {

    return(
        <nav>
            <div className={styles.logo}>
                <img src={pawLogo} alt="paw_logo" />
              <h3>Catopia</h3>
            </div>
        </nav>
    )
};
export default Header;