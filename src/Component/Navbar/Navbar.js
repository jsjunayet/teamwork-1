
import Links from './Link/Links';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        
        <div className={styles.container}>
            <div>
                <p className={styles.logo}>Logo</p>
            </div>
            <div>
                <Links></Links>
            </div>
        </div>
    );
};

export default Navbar;