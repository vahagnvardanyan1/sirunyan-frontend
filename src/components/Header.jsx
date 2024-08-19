import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import styles from '../css/header.module.css';
import video from '../assets/video.mp4';
import portfolioBanner from '../images/portfolio-banner.png';
import servicesBanner from '../images/Services/Services-Banner.png';
import aboutusBanner from '../images/footerSlider2.webp';

const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const REACT_APP_API_BASE_URL_IMAGES = process.env.REACT_APP_API_BASE_URL_IMAGES;

function Header({ openModal }) {
    const location = useLocation();
    const [selectedBlog, setSelectedBlog] = useState(null);

    const blogId = location.pathname.startsWith('/blog/') ? location.pathname.split('/')[2] : null;

    useEffect(() => {
        if (blogId) {
            const fetchBlog = async () => {
                try {
                    const response = await axios.get(`${REACT_APP_API_BASE_URL}/blog/${blogId}`);
                    setSelectedBlog(response.data.data);
                } catch (error) {
                    console.error("Error fetching blog:", error);
                }
            };

            fetchBlog();
        }
    }, [blogId]);

    const decodeHTML = (html) => {
        const txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    };

    const cleanTitle = (title) => {
        return decodeHTML(title.replace(/&nbsp;/g, ' '));
    };

    const pageContent = {
        '/': {
            type: 'video',
            src: video,
            alt: 'Home Video',
            title: 'The beautiful language of your imagination',
            showButton: true,
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

    if (selectedBlog) {
        pageContent['/blog'] = {
            type: 'image',
            src: `${REACT_APP_API_BASE_URL_IMAGES}/${selectedBlog.bannerImage}`,
            alt: 'Blog Banner',
            title: cleanTitle(selectedBlog.bannerText.replace(/<\/?[^>]+(>|$)/g, '')), // Stripping HTML tags and cleaning the title
            showButton: false,
            additionalStyles: {
                justifyContent: 'flex-end',
            },
        };
    } else if (blogId) {
        pageContent['/blog'] = {
            type: 'image',
            src: portfolioBanner, // Default image in case blog data is still loading
            alt: 'Blog Banner',
            title: 'Loading...',
            showButton: false,
        };
    }

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
