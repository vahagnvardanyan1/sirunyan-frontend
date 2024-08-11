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

            {blog.subTitle && <p className={styles.subTitle}>{blog.subTitle}</p>}

            {blog.subtitleContent && (
                <div className={styles.subtitleContent}>
                    <p>{blog.subtitleContent}</p>
                </div>
            )}

            {blog.images.length > 0 && (
                <div className={styles.blogContentPhotos}>
                    {blog.images.map((img, index) => (
                        <img key={index} src={img} alt={`Blog image ${index + 1}`} />
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
