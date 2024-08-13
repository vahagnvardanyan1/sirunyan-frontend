import React from 'react';
import { useParams } from 'react-router-dom';
import styles from '../css/blog.module.css';
import { blogs } from '../data/blogs';

const BlogDetail = () => {
    const { id } = useParams();
    const blog = blogs.find(blog => blog.id === parseInt(id));

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <div className={styles.blog}>
            <h2 className={styles.title}>{blog.title}</h2>

            <div className={styles.blogContent}>
                <p>{blog.content}</p>
            </div>

            {blog.subTitle && (
                <>
                    <h3 className={styles.subTitle}>{blog.subTitle}</h3>
                    <div className={styles.subtitleContent}>
                        <p>{blog.subtitleContent}</p>
                    </div>
                </>
            )}

            {blog.images.length > 0 && (
                <div className={styles.blogContentPhotos}>
                    {blog.images.map((img, index) => (
                        <div key={index} className={styles.imageContainer}>
                            <img src={img.src} alt={`Blog image ${index + 1}`} />
                            <p className={styles.imageCaption}>{img.caption}</p>
                        </div>
                    ))}
                </div>
            )}

            {blog.subTitle1 && (
                <>
                    <h3 className={styles.subTitle}>{blog.subTitle1}</h3>
                    <div className={styles.subContent}>
                        <p>{blog.subContent}</p>
                    </div>
                </>
            )}

            {blog.images1.length > 0 && (
                <div className={styles.blogContentPhotos}>
                    {blog.images1.map((img, index) => (
                        <div key={index} className={styles.imageContainer}>
                            <img src={img.src} alt={`Blog image ${index + 1}`} />
                            <p className={styles.imageCaption}>{img.caption}</p>
                        </div>
                    ))}
                </div>
            )}

            {blog.contentFooter && (
                <div className={styles.blogContentFooter}>
                    <p>{blog.contentFooter}</p>
                </div>
            )}
        </div>
    );
};

export default BlogDetail;
