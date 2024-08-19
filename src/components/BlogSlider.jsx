import React, { useEffect, useState } from 'react';
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

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ],
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const truncateContent = (content, maxWords) => {
        const words = content.split(' ');
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '...';
        }
        return content;
    };


    return (
        <Slider {...settings} className={styles.slider}>
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

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className={styles.nextArrow} onClick={onClick}>
            →
        </div>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className={styles.prevArrow} onClick={onClick}>
            ←
        </div>
    );
};

export default BlogSlider;
