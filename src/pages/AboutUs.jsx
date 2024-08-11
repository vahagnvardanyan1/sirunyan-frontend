import React from 'react';
import styles from '../css/aboutus.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import teamMember1 from '../images/teamMember1.png';
import teamMember2 from '../images/teamMember2.jpg';
import teamMember3 from '../images/teamMember3.png';
import teamMember4 from '../images/teamMember4.png';
import teamMember5 from '../images/teamMember5.png';
import teamMember6 from '../images/teamMember6.jpg';
import teamMember7 from '../images/teamMember7.jpg';
import footerSlider1 from '../images/footerSlider1.jpg';
import footerSlider2 from '../images/footerSlider2.jpg';
import footerSlider3 from '../images/footerSlider3.jpg';
import footerSlider4 from '../images/footerSlider4.jpg';
import footerSlider6 from '../images/footerSlider6.jpg';
import footerSlider7 from '../images/footerSlider7.jpg';
import { Navigation, Pagination } from "swiper/modules";

function AboutUs() {
    const teamMembers = [
        { name: "Tatev Sirunyan", role: "Founder CEO", image: teamMember1, text: "Our CEO is like a gem in the realm of jewelry CAD, constantly polishing her expertise, showering the team with care, and occasionally just forgetting that sleep is as precious as a flawless diamond!" },
        { name: "Elen Davtyan", role: "Co-Founder Senior CAD Professional", image: teamMember2, text: "A self-confident and enthusiastic Senior CAD professional who once dazzled on the football field, theatres and even fencing stripes, and now charms everyone with her sociable and friendly nature, making her a beloved figure in both her personal and professional circles." },
        { name: "Lilith", role: "Sketcher", image: teamMember3, text: "The ethereal artist who's as fragile as a butterfly but can knock out a masterpiece with one hand and an opponent with the other like a heavyweight champion, critiques with the precision of a surgeon, rebels against all things dull, and enjoys life like it's one big, beautiful canvas!" },
        { name: "Shushan", role: "Rendering Professional", image: teamMember4, text: "Оur rendering professional is like a kaleidoscope of energy: detail-oriented enough to spot a misplaced pixel, chatty enough to entertain a whole room, and so infectiously upbeat, they could turn a gloomy Monday into a disco party—all while making your jewelry designs look absolutely dazzling!" },
        { name: "Rima", role: "CAD Professional", image: teamMember5, text: "A brilliant and humble CAD professional whose calm and peaceful demeanor is only rivaled by her endearing reluctance to ever reveal her favorite song." },
        { name: "Suren", role: "The future CAD star", image: teamMember6, text: "The future CAD star with a talkative streak, a sugar-free sweet tooth (except for those daily six spoons in his tea), and a love for his job so strong, he's contemplating moving permanently to the office with his pillow." },
        { name: "Mayis", role: "The future CAD star", image: teamMember7, text: "Don't let his \"Nothing\" answers fool you – our junior CAD designer is a secret weapon when it comes to 3D modeling of stunning jewelry designs. And, just for the record, he's also a champion of the \"do-it-all\" philosophy, having conquered football, fencing, and boxing (but shhhh, don't tell him we mentioned those!)." },
    ];

    const footerSlides = [
        { image: footerSlider1 },
        { image: footerSlider2 },
        { image: footerSlider3 },
        { image: footerSlider4 },
        { image: footerSlider6 },
        { image: footerSlider7 },
    ];

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
                    {teamMembers.map((member, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.slideContent}>
                                <img src={member.image} alt={member.name} />
                                <div className={styles.textOverlay}>
                                    <p>{member.text}</p>
                                </div>
                                <div className={styles.memberInfo}>
                                    <span className={styles.name}>{member.name}</span>
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
                    {footerSlides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.footerSlideContent}>
                                <img src={slide.image} alt={`Footer slide ${index + 1}`} className={styles.footerSlideImage} />
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
