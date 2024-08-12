import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import SwiperCore from 'swiper';
import styles from '../css/portfolio.module.css';
import seePhoto from '../assets/seeAt.png';
import arrowDown from '../assets/select-down.svg';

// MODELING
import modelingImg1 from '../images/portfolio/Modeling/1.jpg';
import modelingImg2 from '../images/portfolio/Modeling/2.jpg';
import modelingImg3 from '../images/portfolio/Modeling/3.jpg';
import modelingImg4 from '../images/portfolio/Modeling/4.jpg';
import modelingImg5 from '../images/portfolio/Modeling/5.jpg';
import modelingImg6 from '../images/portfolio/Modeling/6.jpg';
import modelingImg7 from '../images/portfolio/Modeling/7.jpg';
import modelingImg8 from '../images/portfolio/Modeling/8.jpg';
import modelingImg9 from '../images/portfolio/Modeling/9.jpg';
import modelingImg10 from '../images/portfolio/Modeling/10.jpg';
import modelingImg11 from '../images/portfolio/Modeling/11.jpg';
import modelingImg12 from '../images/portfolio/Modeling/12.jpg';
import modelingImg13 from '../images/portfolio/Modeling/13.jpg';
import modelingImg14 from '../images/portfolio/Modeling/14.jpg';
import modelingImg15 from '../images/portfolio/Modeling/15.jpg';

// Renderings
import renderImg1 from '../images/portfolio/Renderings/1.jpg';
import renderImg2 from '../images/portfolio/Renderings/2.jpg';
import renderImg3 from '../images/portfolio/Renderings/3.jpg';
import renderImg4 from '../images/portfolio/Renderings/4.jpg';
import renderImg6 from '../images/portfolio/Renderings/6.jpg';
import renderImg7 from '../images/portfolio/Renderings/7.jpg';
import renderImg8 from '../images/portfolio/Renderings/8.jpg';
import renderImg9 from '../images/portfolio/Renderings/9.jpg';
import renderImg10 from '../images/portfolio/Renderings/10.jpg';
import renderIm11 from '../images/portfolio/Renderings/11.jpg';
import renderImg12 from '../images/portfolio/Renderings/12.jpg';
import renderImg13 from '../images/portfolio/Renderings/13.jpg';
import renderImg14 from '../images/portfolio/Renderings/14.jpg';
import renderImg15 from '../images/portfolio/Renderings/15.jpg';

// Sculptings
import sculptImg1 from '../images/portfolio/Sculpting/1.jpg';
import sculptImg2 from '../images/portfolio/Sculpting/2.jpg';
import sculptImg3 from '../images/portfolio/Sculpting/3.jpg';
import sculptImg4 from '../images/portfolio/Sculpting/4.jpg';
import sculptImg5 from '../images/portfolio/Sculpting/5.jpg';
import sculptImg6 from '../images/portfolio/Sculpting/6.jpg';
import sculptImg7 from '../images/portfolio/Sculpting/7.jpg';
import sculptImg8 from '../images/portfolio/Sculpting/8.jpg';
import sculptImg9 from '../images/portfolio/Sculpting/9.jpg';
import {Grid, Navigation} from "swiper/modules";

// Animations
import animation1 from '../images/portfolio/Videos/1.mp4';
import animation2 from '../images/portfolio/Videos/2.mp4';
import animation3 from '../images/portfolio/Videos/3.mp4';


// Rendering for Websites and SMM
import smmImg1 from '../images/portfolio/Rendering for Websites and SMM/1.jpg';
import smmImg2 from '../images/portfolio/Rendering for Websites and SMM/2.jpg';
import smmImg3 from '../images/portfolio/Rendering for Websites and SMM/3.jpg';
import smmImg4 from '../images/portfolio/Rendering for Websites and SMM/4.jpg';
import smmImg5 from '../images/portfolio/Rendering for Websites and SMM/5.jpg';

// Sketch
import sketchImg1 from '../images/portfolio/Sketch/1.jpg';
import sketchImg2 from '../images/portfolio/Sketch/2.jpg';
import sketchImg3 from '../images/portfolio/Sketch/3.jpg';
import sketchImg4 from '../images/portfolio/Sketch/4.jpg';
import sketchImg6 from '../images/portfolio/Sketch/6.jpg';
import sketchImg7 from '../images/portfolio/Sketch/7.png';
import sketchImg9 from '../images/portfolio/Sketch/9.jpg';
import sketchImg10 from '../images/portfolio/Sketch/10.png';
import sketchIm11 from '../images/portfolio/Sketch/11.png';
import sketchImg12 from '../images/portfolio/Sketch/12.jpg';


SwiperCore.use([Grid, Navigation]);

function Portfolio() {
    const location = useLocation();
    const initialCategory = location.state?.category || 'Sketching';

    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMedia, setSelectedMedia] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadedMedia, setLoadedMedia] = useState(0);

    const categories = ['Sketching', '3D modeling', 'Sculpting', 'Rendering', 'Rendering & more for websites and smm', 'Animations'];

    const imagesByCategory = {
        'Sketching': [
            sketchImg1,
            sketchImg2,
            sketchImg3,
            sketchImg4,
            sketchImg6,
            sketchImg7,
            sketchImg9,
            sketchImg10,
            sketchIm11,
            sketchImg12,
        ],
        '3D modeling': [
            modelingImg1, modelingImg2, modelingImg3, modelingImg4, modelingImg5, modelingImg6, modelingImg7, modelingImg8, modelingImg9, modelingImg10, modelingImg11, modelingImg12,modelingImg13, modelingImg14, modelingImg15,
        ],
        'Sculpting': [
            sculptImg1, sculptImg2, sculptImg3, sculptImg4, sculptImg5, sculptImg6, sculptImg7, sculptImg8,sculptImg9
        ],
        'Rendering': [
            renderImg1, renderImg2, renderImg3, renderImg4, renderImg6, renderImg7, renderImg8, renderImg9, renderImg10, renderIm11, renderImg12, renderImg13, renderImg14, renderImg15
        ],
        'Rendering & more for websites and smm': [
            smmImg1,
            smmImg2,
            smmImg3,
            smmImg4,
            smmImg5,
        ],
        'Animations': [
            animation1,
            animation2,
            animation3,],
    };
    useEffect(() => {
        const totalMedia = imagesByCategory[selectedCategory].length;
        if (loadedMedia === totalMedia) {
            setLoading(false);
        }
    }, [loadedMedia, selectedCategory, imagesByCategory]);

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
        setSelectedMedia(media);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMedia(null);
    };

    const isVideo = (media) => {
        return media.endsWith('.mp4');
    };

    return (
        <div className={styles.portfolio}>
            {loading && (
                <div className={styles.loadingOverlay}>
                    <div className={styles.spinner}></div>
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
                {imagesByCategory[selectedCategory].map((media, index) => (
                    <SwiperSlide key={index} className={styles.slideBlock} onClick={() => openModal(media)}>
                        {isVideo(media) ? (
                            <video
                                src={media}
                                className={styles.portfolioImage}
                                autoPlay
                                muted
                                loop
                                onLoadedData={handleMediaLoad}
                                controls={false}
                            />
                        ) : (
                            <img
                                src={media}
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
