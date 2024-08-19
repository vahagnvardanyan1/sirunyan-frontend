import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import SwiperCore from 'swiper';
import styles from '../css/portfolio.module.css';
import seePhoto from '../assets/seeAt.png';
import arrowDown from '../assets/select-down.svg';
import { Grid, Navigation } from "swiper/modules";
import LoadingAnimation from "../components/LoadingAnimation";

SwiperCore.use([Grid, Navigation]);

const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const REACT_APP_API_BASE_URL_IMAGES = process.env.REACT_APP_API_BASE_URL_IMAGES || 'http://localhost:3001';

function Portfolio() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const location = useLocation();
    const initialCategory = location.state?.category || 'Sketching';

    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMedia, setSelectedMedia] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadedMedia, setLoadedMedia] = useState(0);
    const [mediaData, setMediaData] = useState([]);
    const swiperRef = useRef(null);

    const categories = ['Sketching', '3D modeling', 'Sculpting', 'Rendering', 'Rendering & more for websites and smm', 'Animations'];

    const categoryMapping = {
        'Sketching': 'sketching',
        '3D modeling': '3d-modeling',
        'Sculpting': 'sculpting',
        'Rendering': 'rendering',
        'Rendering & more for websites and smm': 'rendering-more-for-websites-and-smm',
        'Animations': 'animations'
    };

    const fetchCategoryData = async (category) => {
        const backendCategory = categoryMapping[category];
        try {
            const response = await axios.get(`${REACT_APP_API_BASE_URL}/portfolio/${backendCategory}`);
            setMediaData(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        setLoading(true);
        setLoadedMedia(0);
        fetchCategoryData(selectedCategory);
    }, [selectedCategory]);

    useEffect(() => {
        const totalMedia = mediaData.length;
        const loadingDelay = 2000;

        const timer = setTimeout(() => {
            if (loadedMedia === totalMedia) {
                setLoading(false);
            }
        }, loadingDelay);

        return () => clearTimeout(timer);
    }, [loadedMedia, mediaData]);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(0, 0);
        }
    }, [selectedCategory]);

    const handleMediaLoad = () => {
        setLoadedMedia((prev) => prev + 1);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setLoading(true);
        setLoadedMedia(0);
    };

    const handleSelectChange = (event) => {
        setSelectedCategory(event.target.value);
        setLoading(true);
        setLoadedMedia(0);
    };

    const openModal = (media) => {
        const mediaUrl = isVideo(media.filename)
            ? `${REACT_APP_API_BASE_URL_IMAGES}/${media.filename}`
            : `${REACT_APP_API_BASE_URL_IMAGES}/${media.filename}`;
        setSelectedMedia(mediaUrl);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMedia(null);
    };

    const isVideo = (filename) => {
        if (selectedCategory === 'Animations') {
            return true;
        }
        return typeof filename === 'string' && filename.endsWith('.mp4');
    };

    return (
        <div className={styles.portfolio}>
            {loading && (
                <div className={styles.loadingOverlay}>
                    <LoadingAnimation />
                </div>
            )}
            <div className={styles.categories}>
                {categories.map((category) => (
                    <span
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        className={`${styles.categoryTag} ${selectedCategory === category ? styles.active : ''}`}
                    >
                        {category}
                    </span>
                ))}
                <select className={styles.categorySelect} onChange={handleSelectChange} value={selectedCategory}>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
                <img src={arrowDown} alt="" className={styles.arrowDown} />
            </div>

            <div className={styles.categoriesTitle}>
                <p>{selectedCategory}</p>
                <hr className={styles.portfolioSectionDivider} />
            </div>

            <Swiper
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                modules={[Grid, Navigation]}
                grid={{
                    rows: 3,
                    fill: 'row',
                }}
                breakpoints={{
                    480: {
                        slidesPerView: 1,
                        grid: { rows: 1 },
                    },
                    768: {
                        slidesPerView: 2,
                        grid: { rows: 2 },
                    },
                    1024: {
                        slidesPerView: 3,
                        grid: { rows: 2 },
                    },
                }}
                spaceBetween={20}
                navigation={{
                    prevEl: '.swiper-button-prev-unique',
                    nextEl: '.swiper-button-next-unique',
                }}
                className={styles.categoriesContainer}
            >
                {mediaData?.data?.map((media, index) => (
                    <SwiperSlide
                        key={index}
                        className={`${styles.slideBlock} ${selectedCategory === 'Sketching' ? styles.sketching : ''}`}
                        onClick={() => openModal(media)}
                    >
                        {isVideo(media.filename) ? (
                            <video
                                src={`${REACT_APP_API_BASE_URL_IMAGES}/${media.filename}`}
                                className={styles.portfolioImage}
                                autoPlay
                                muted
                                loop
                                onLoadedData={handleMediaLoad}
                                controls={false}
                            />
                        ) : (
                            <img
                                src={`${REACT_APP_API_BASE_URL_IMAGES}/${media.filename}`}
                                alt={`Portfolio ${index + 1}`}
                                className={styles.portfolioImage}
                                onLoad={handleMediaLoad}
                            />
                        )}
                        <div className={styles.hoverEffect}>
                            <button className={styles.seeButton}><img src={seePhoto} alt="See More" /></button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className={styles.sliderControls}>
                <button className={`swiper-button-prev-unique ${styles.left}`}>←</button>
                <button className={styles.viewMoreButton}>View More</button>
                <button className={`swiper-button-next-unique ${styles.rightBtn}`}>→</button>
            </div>

            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        {isVideo(selectedMedia) ? (
                            <video src={selectedMedia} className={styles.zoomedImage} autoPlay loop muted controls={false} />
                        ) : (
                            <img src={selectedMedia} alt="Zoomed" className={styles.zoomedImage} />
                        )}
                        <button className={styles.closeButton} onClick={closeModal}>×</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Portfolio;
