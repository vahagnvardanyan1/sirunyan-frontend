import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from '../css/blog.module.css';

const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const REACT_APP_API_BASE_URL_IMAGES = process.env.REACT_APP_API_BASE_URL_IMAGES;

const BlogDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchBlog = async () => {
            try {
                const response = await axios.get(`${REACT_APP_API_BASE_URL}/blog/${id}`);
                setBlog(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching blog:", error);
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!blog) {
        return <div>Blog not found</div>;
    }

    const firstTwoImages = blog.imagesWithText.slice(0, 2);
    const lastTwoImages = blog.imagesWithText.slice(2);

    return (
        <div className={styles.blog}>
            <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: blog.bannerText }} />

            <div className={styles.blogContent}>
                <p dangerouslySetInnerHTML={{ __html: blog.text2 }} />
            </div>

            {/* First two images after text2 */}
            <div className={styles.blogContentPhotos}>
                {firstTwoImages.map((img, index) => (
                    <div key={index} className={styles.imageContainer}>
                        <img src={`${REACT_APP_API_BASE_URL_IMAGES}/${img.image}`} alt={img.text || `Blog illustration ${index + 1}`} />
                        <p className={styles.imageCaption}>{img.text}</p>
                    </div>
                ))}
            </div>

            {blog.text3 && (
                <>
                    <div className={styles.subContent}>
                        <p dangerouslySetInnerHTML={{ __html: blog.text3 }} />
                    </div>
                </>
            )}

            <div className={styles.blogContentPhotos}>
                {lastTwoImages.map((img, index) => (
                    <div key={index} className={styles.imageContainer}>
                        <img src={`${REACT_APP_API_BASE_URL_IMAGES}/${img.image}`} alt={img.text || `Blog illustration ${index + 3}`} />
                        <p className={styles.imageCaption}>{img.text}</p>
                    </div>
                ))}
            </div>

            {blog.text4 && (
                <>
                    <div className={styles.subContent}>
                        <p dangerouslySetInnerHTML={{ __html: blog.text4 }} />
                    </div>
                </>
            )}

            {blog.text5 && (
                <div className={styles.blogContentFooter}>
                    <p dangerouslySetInnerHTML={{ __html: blog.text5 }} />
                </div>
            )}
        </div>
    );
};

export default BlogDetail;
