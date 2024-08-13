import React, {useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from '../css/home.module.css';
import PortfolioSlider from '../components/PortfolioSlider';
import BlogSlider from '../components/BlogSlider';
import img1 from '../images/blogImg1.png';
import img2 from '../images/BlogImg2.png';
import img3 from '../images/blogImg3.png';
import serviceBg1 from '../images/home/serviceBg1.png';
import serviceBg2 from '../images/home/serviceBg2.png';
import serviceBg3 from '../images/home/serviceBg3.png';
import serviceBg4 from '../images/home/serviceBg4.png';
import serviceBg5 from '../images/home/servicesBg5.png';
import serviceBg6 from '../images/home/serviceBg6.png';

const blogs = [
    {
        id: 1,
        image: img1,
        title: 'Stylish Historical Facts About Cartier Style (Part 1)',
        text: 'Behind every legendary thing stand great people...',
        content: 'Full content of blog 1 here...',
        link: '/blog/1'
    },
    {
        id: 2,
        image: img2,
        title: 'Art Nouveau at the 1900 Paris Exposition',
        text: 'In 1900, the world witnessed a grand display of Art...',
        content: 'Full content of blog 2 here...',
        link: '/blog/2'
    },
    {
        id: 3,
        image: img3,
        title: 'Stylish Historical Facts About Cartier Style (Part 2)',
        text: 'Behind anything legendary stand great people...',
        content: 'Full content of blog 3 here...',
        link: '/blog/3'
    }
];


const services = [
    { title: 'Sketching', img: serviceBg1, className: 'lowered' },
    { title: '3D modeling', img: serviceBg2, className: 'lowered' },
    { title: 'Sculpting', img: serviceBg3, className: 'bigger' },
    { title: 'Rendering', img: serviceBg4, className: 'lowered' },
    { title: 'Rendering & more for Websites and Smm', img: serviceBg5 },
    { title: 'Animations', img: serviceBg6 },
];



function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={styles.home}>
            <section id={styles.services}>
                <div className={styles.servicesContent}>
                    <p>Services</p>
                    <hr className={styles.homeSectionDivider} />
                </div>
                <div className={styles.servicesContainer}>
                    {services.map((service, index) => (
                        <div className={styles.serviceCategories} key={index}>
                            <NavLink to="/portfolio" state={{category: service.title}}>
                                <div className={styles.imageContainer}>
                                    <img
                                        src={service.img}
                                        alt={service.title}
                                        className={`${service.className ? styles[service.className] : ''}`}
                                    />
                                </div>
                                <div className={styles.serviceOverlay}>
                                    <div className={styles.serviceTitle}>{service.title}</div>
                                    <hr className={styles.servicesHomeSectionDivider}/>
                                </div>
                                <div className={styles.indicator}></div>
                            </NavLink>
                        </div>
                    ))}
                </div>
            </section>
            <section id={styles.portfolio}>
                <div className={styles.servicesContent}>
                    <p>Portfolio</p>
                    <hr className={styles.homeSectionDivider}/>
                </div>
                <PortfolioSlider/>
            </section>
            <section id={styles.aboutUs}>
                <div className={styles.servicesContent}>
                    <p>About Us</p>
                    <hr className={styles.homeSectionDivider}/>
                </div>
                <div className={styles.aboutSubtitle}>
                    <p className={styles.firstSubtitle}>Hi, so good to see you here!</p>
                </div>
                <div className={styles.aboutusContent}>
                    <p>Welcome to Sirunyan Jewelry and Accessories CAD Studio, where the elegance of traditional jewelry design meets the precision of modern digital technology. At Sirunyan, we specialize in providing computer-aided design (CAD) services tailored specifically for the jewelry and accessories industry. Our expertise lies in transforming and beautifying creative visions into detailed digital blueprints, ensuring each piece is crafted with the highest level of accuracy, beauty and care. Our personalized approach means that every client receives individual attention and bespoke solutions tailored to their specific needs. We are not just a CAD studio; we are a partner in your creative journey, dedicated to helping you achieve perfection in every piece of jewelry you design.</p>
                </div>
                <Link to='/about' className={styles.seeMoreBtn}>view more</Link>
            </section>
            <section className={styles.blog} id="blogSection">
                <div className={styles.servicesContent}>
                    <p>Blog</p>
                    <hr className={styles.homeSectionDivider} />
                </div>
                <BlogSlider blogs={blogs} />
            </section>
        </div>
    );
}

export default Home;
