import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/blogSlider.module.css';
import Slider from 'react-slick';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const REACT_APP_API_BASE_URL_IMAGES = process.env.REACT_APP_API_BASE_URL_IMAGES;

const BlogSlider = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(getInitialSlidesToShow());
    const sliderRef = useRef(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${REACT_APP_API_BASE_URL}/blog`);
                setBlogs(response.data.data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };

        fetchBlogs();
    }, []);

    useEffect(() => {
        const updateSlidesToShow = () => {
            const newSlidesToShow = window.innerWidth < 768 ? 1 : 3;
            setSlidesToShow(newSlidesToShow);
        };

        window.addEventListener('resize', updateSlidesToShow);
        updateSlidesToShow();

        return () => window.removeEventListener('resize', updateSlidesToShow);
    }, []);

    function getInitialSlidesToShow() {
        return window.innerWidth < 768 ? 1 : 3;
    }

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        initialSlide: 0,
        afterChange: (current) => setCurrentSlide(current),
        nextArrow: <NextArrow currentSlide={currentSlide} blogsLength={blogs?.length} slidesToShow={slidesToShow} />,
        prevArrow: <PrevArrow currentSlide={currentSlide} />
    };

    const truncateContent = (content, maxWords) => {
        const words = content.split(' ');
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '...';
        }
        return content;
    };

    return (
        <Slider {...settings} className={styles.slider} ref={sliderRef}>
            {blogs?.map((blog) => (
                <div key={blog._id} className={styles.blogSlide}>
                    <img src={`${REACT_APP_API_BASE_URL_IMAGES}/${blog.bannerImage}`} alt={blog.bannerText} />
                    <h3 dangerouslySetInnerHTML={{ __html: blog.bannerText }} />
                    <p>{truncateContent(blog.text2.replace(/<[^>]+>/g, ''), 10)}</p>
                    <Link to={`/blog/${blog._id}`} className={styles.readMore}>Read More</Link>
                </div>
            ))}
        </Slider>
    );
};

const NextArrow = ({ currentSlide, blogsLength, slidesToShow, onClick }) => {
    const isLastSlide = currentSlide >= blogsLength - slidesToShow;
    return (
        <div
            className={`${styles.nextArrow} ${isLastSlide ? styles.inactive : ''}`}
            onClick={!isLastSlide ? onClick : null}
        >
            →
        </div>
    );
};

const PrevArrow = ({ currentSlide, onClick }) => {
    const isFirstSlide = currentSlide === 0;
    return (
        <div
            className={`${styles.prevArrow} ${isFirstSlide ? styles.inactive : ''}`}
            onClick={!isFirstSlide ? onClick : null}
        >
            ←
        </div>
    );
};

export default BlogSlider;
