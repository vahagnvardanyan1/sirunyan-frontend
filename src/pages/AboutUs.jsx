import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../css/aboutus.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from "swiper/modules";
import LoadingAnimation from "../components/LoadingAnimation";

const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api';
const REACT_APP_API_BASE_URL_IMAGES = process.env.REACT_APP_API_BASE_URL_IMAGES || 'http://localhost:3001/images';

function AboutUs() {
    const [loading, setLoading] = useState(true);
    const [teamMembers, setTeamMembers] = useState([]);
    const [footerSlides, setFooterSlides] = useState([]);

    console.log(teamMembers)
    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchData = async () => {
            try {
                const [teamMembersResponse, footerSlidesResponse] = await Promise.all([
                    axios.get(`${REACT_APP_API_BASE_URL}/team`),
                    axios.get(`${REACT_APP_API_BASE_URL}/slider`)
                ]);

                setTeamMembers(teamMembersResponse.data);
                setFooterSlides(footerSlidesResponse.data);
            } catch (error) {
                console.error("Error fetching data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className={styles.loadingContainer}>
                <LoadingAnimation />
            </div>
        );
    }

    return (
        <div className={styles.about}>
            <div className={styles.servicesContent}>
                <p>About Us</p>
                <hr className={styles.aboutSectionDivider} />
            </div>
            <div className={styles.aboutSubtitle}>
                <p className={styles.firstSubtitle}>Hi, so good to see you here!</p>
            </div>
            <div className={styles.aboutusContent}>
                <p>Welcome to Sirunyan Jewelry and Accessories CAD Studio, where the elegance of traditional jewelry
                    design meets the precision of modern digital technology. At Sirunyan, we specialize in providing
                    computer-aided design (CAD) services tailored specifically for the jewelry and accessories industry.
                    Our expertise lies in transforming and beautifying creative visions into detailed digital
                    blueprints, ensuring each piece is crafted with the highest level of accuracy, beauty and care. Our
                    personalized approach means that every client receives individual attention and bespoke solutions
                    tailored to their specific needs. We are not just a CAD studio; we are a partner in your creative
                    journey, dedicated to helping you achieve perfection in every piece of jewelry you design.</p>
            </div>
            <div className={styles.ourTeam}>
                <div className={styles.title}>
                    <p>Our Team</p>
                    <hr className={styles.aboutSectionDivider} />
                </div>
                <div className={styles.controllers}>
                    <button className={`swiper-button-prev-unique ${styles.sliderBtn}`}>←</button>
                    <button className={`swiper-button-next-unique ${styles.sliderBtn}`}>→</button>
                </div>
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: '.swiper-button-prev-unique',
                        nextEl: '.swiper-button-next-unique',
                    }}
                    slidesPerView={2.5}
                    spaceBetween={10}
                    loop={true}
                    className={styles.ourTeamSlider}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.25,
                            direction: 'horizontal',
                            spaceBetween: 10,
                        },
                        410: {
                            slidesPerView: 1.5,
                            direction: 'horizontal',
                            spaceBetween: 10,
                        },
                        510: {
                            slidesPerView: 1.75,
                            direction: 'horizontal',
                            spaceBetween: 10,
                        },
                        590: {
                            slidesPerView: 2.25,
                            direction: 'horizontal',
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2.5,
                            direction: 'horizontal',
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3.25,
                            direction: 'horizontal',
                            spaceBetween: 10,
                        },
                        1088: {
                            slidesPerView: 3.5,
                            direction: 'horizontal',
                            spaceBetween: 10,
                        },
                        1100: {
                            slidesPerView: 3,
                            direction: 'horizontal',
                            spaceBetween: 10,
                        },
                        1440: {
                            slidesPerView: 4.5,
                            direction: 'horizontal',
                            spaceBetween: 10,
                        },
                        1700: {
                            slidesPerView: 5.5,
                            direction: 'horizontal',
                            spaceBetween: 10,
                        },
                    }}
                >
                    {teamMembers?.data?.map((member, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.slideContent}>
                            <img src={`${REACT_APP_API_BASE_URL_IMAGES}/${member.image}`} alt={member.fullName} />
                            <div className={styles.textOverlay}>
                                <p>{member.content}</p>
                            </div>
                            <div className={styles.memberInfo}>
                                <span className={styles.name}>{member.fullName}</span>
                                <span className={styles.role}>{member.role}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
            <div className={styles.whatWeDo}>
                <div className={styles.title}>
                    <p>What Makes Us Love What We Do</p>
                    <hr className={styles.aboutSectionDivider} />
                </div>
                <div className={styles.whatWeDoContent}>
                    <div className={styles.ourMission}>
                        <div className={styles.ourMissionTitle}>
                            <p>Our Mission</p>
                            <hr className={styles.ourMissionAboutSectionDivider} />
                        </div>
                        <div className={styles.ourMissionContent}>
                            Our mission is to empower companies and individuals interested in creating jewelry with the
                            precision of digital technology, enabling them to create beautiful, unique pieces with ease
                            and efficiency. We are dedicated to providing innovative CAD solutions that enhance
                            creativity, ensure quality, and bring intricate designs to life with impeccable accuracy and
                            realistic visuals.
                        </div>
                    </div>
                    <div className={styles.ourValues}>
                        <div className={styles.ourValuesTitle}>
                            <p>Our Values</p>
                            <hr className={styles.ourMissionAboutSectionDivider} />
                        </div>
                        <div className={styles.ourValuesContent}>
                            <p><strong>1. Quality:</strong> We ensure that every piece meets the highest standards of
                                craftsmanship and durability.</p>
                            <p><strong>2. Customer-Centric:</strong> Our clients' satisfaction is our top priority. We
                                delve into the customers’ concepts to understand their needs and provide personalized
                                solutions that bring their ideas to life.</p>
                            <p><strong>3. Creativity:</strong> We encourage our team and our clients to think outside
                                the box and push the boundaries of traditional jewelry design.</p>
                            <p><strong>4. Privacy:</strong> Our robust data protection measures ensure that all files
                                are handled with the utmost confidentiality.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footerSliderContainer}>
                <Swiper
                    modules={[Navigation, Pagination]}
                    style={{
                        "--swiper-pagination-color": "#BAA588",
                        "--swiper-pagination-bullet-inactive-color": "#E1DACF",
                        "--swiper-pagination-bullet-inactive-opacity": "0.6",
                        "--swiper-pagination-bullet-size": "10px",
                        "--swiper-pagination-bullet-horizontal-gap": "8px"
                    }}
                    navigation={{
                        prevEl: '.swiper-button-prev-footer',
                        nextEl: '.swiper-button-next-footer',
                    }}
                    pagination={{
                        clickable: true,
                        element: `.${styles.customPagination}`,
                    }}
                    slidesPerView={1.25}
                    centeredSlides={true}
                    spaceBetween={10}
                    loop={true}
                    className={styles.footerSlider}
                >
                    {footerSlides?.data?.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.footerSlideContent}>
                                <img src={`${REACT_APP_API_BASE_URL_IMAGES}/${slide.image}`} alt={`Footer slide ${index + 1}`} className={styles.footerSlideImage} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="custom-pagination"></div>
                <div className={styles.footerControllers}>
                    <button className={`swiper-button-prev-footer ${styles.footerSliderBtn}`}>←</button>
                    <button className={`swiper-button-next-footer ${styles.footerSliderBtn}`}>→</button>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
