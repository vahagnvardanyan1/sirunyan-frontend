import React from 'react';
import styles from '../css/footer.module.css';
import logo from '../assets/logo.png';
import linkedIn from '../assets/linkedIn.jpg';
import {Link, useNavigate} from 'react-router-dom';

function Footer({ openModal }) {
    const navigate = useNavigate();

    const scrollToBlogSection = () => {
        navigate('/');
        setTimeout(() => {
            const blogSection = document.getElementById('blogSection');
            if (blogSection) {
                blogSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <div className={styles.footerContainer}>
            <div className={styles.backBlock}></div>
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <h2>Request More Information</h2>
                    <p>Welcome to SIRUNYAN Jewelry & Accessories CAD Studio, where artistry meets technology to create breathtaking jewelry designs.</p>
                    <button className={styles.contactButton} onClick={openModal}>Contact Us</button>
                </div>
              {/*<div className={styles.footerBottom}>
                    <a className={styles.link} target="_blank" href="https://www.facebook.com/profile.php?id=61560778410260&mibextid=JRoKGi">© 2024 FriendTech LLC</a>
                </div> */}
                <div className={styles.line}></div>
                <div className={styles.footerContainer}>
                    <img src={logo} alt="" className={styles.logo} />
                    <nav className={styles.footerNav}>
                        <Link to={'/service'}>Services</Link>
                        <Link to={'portfolio'}>Portfolio</Link>
                        <Link to={'/about'}>About Us</Link>
                        <button type="button" onClick={openModal}>Contact Us</button>
                        <Link to={'/'} onClick={() => {scrollToBlogSection() }}>Blog</Link>
                    </nav>
                    <div className={styles.footerSocial}>
                        <a target="_blank" rel="noreferrer" href={'https://www.linkedin.com/in/tatev-sirunyan/'}>
                            <img src={linkedIn} alt="LinkedIn" />
                        </a>
                        {/*<a href={''}><img src={instagram} alt="Instagram" /></a>*/}
                        {/*<a href={''}><img src={discord} alt="Discord" /></a>*/}
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
