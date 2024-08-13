import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/blogSlider.module.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { blogs } from '../data/blogs';  // Import the blogs data

const BlogSlider = () => {  // Remove the 'blogs' prop since we're importing it directly
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
            {blogs.map((blog, index) => (
                <div key={index} className={styles.blogSlide}>
                    <img src={blog.image} alt={blog.title} />
                    <h3>{blog.title}</h3>
                    <p>{truncateContent(blog.content, 10)}</p>
                    <Link to={`/blog/${blog.id}`} className={styles.readMore}>Read More</Link>
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
