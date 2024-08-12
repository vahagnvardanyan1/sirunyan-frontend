import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../css/header.module.css';
import video from '../assets/video.mp4';
import portfolioBanner from '../images/portfolio-banner.png';
import servicesBanner from '../images/Services/Services-Banner.png';
import aboutusBanner from '../images/teamMembers/footerSlider2.webp';
import { blogs } from '../data/blogs';

function Header({ openModal }) {
    const location = useLocation();

    const blogId = location.pathname.startsWith('/blog/') ? parseInt(location.pathname.split('/')[2], 10) : null;
    const selectedBlog = blogs.find(blog => blog.id === blogId);

    const pageContent = {
        '/': {
            type: 'video',
            src: video,
            alt: 'Home Video',
            title: 'The beautiful language of your imagination',
            showButton: true,
        },
        '/blog': selectedBlog
            ? {
                type: 'image',
                src: selectedBlog.image,
                alt: 'Blog Banner',
                title: `${selectedBlog.title} - ${selectedBlog.date}`,
                showButton: false,
                additionalStyles: {
                    justifyContent: 'flex-end',
                },
            }
            : {
                type: 'image',
                src: portfolioBanner,
                alt: 'Blog Banner',
                title: 'Blog - 12/22/2024 min read',
                showButton: false,
            },
        '/portfolio': {
            type: 'image',
            src: portfolioBanner,
            alt: 'Portfolio Banner',
            title: 'The beautiful language of your imagination',
            showButton: true,
        },
        '/service': {
            type: 'image',
            src: servicesBanner,
            alt: 'Services Banner',
            title: 'The Art of Beautifying Through Digital Expertise',
            showButton: true,
        },
        '/about': {
            type: 'image',
            src: aboutusBanner,
            alt: 'About Us Banner',
            title: 'The beautiful language of your imagination',
            showButton: true,
        },
    };

    const currentPage = pageContent[location.pathname] || pageContent['/blog'];

    return (
        <header className={styles.header}>
            {currentPage.type === 'video' ? (
                <video className={styles.headerVideo} autoPlay loop muted playsInline>
                    <source src={currentPage.src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <img className={styles.headerPhoto} src={currentPage.src} alt={currentPage.alt} />
            )}
            <div
                className={styles.headerContent}
                style={currentPage.additionalStyles}
            >
                <div className={styles.content}>
                    <p>{currentPage.title}</p>
                    <hr className={styles.headersectionDivider} />
                </div>
                {currentPage.showButton && (
                    <a className={styles.contactUsBtn} onClick={openModal}>Contact Us</a>
                )}
            </div>
        </header>
    );
}

export default Header;
