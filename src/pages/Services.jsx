import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/services.module.css';
import ServicesItem from '../components/ServicesItem';
import img1 from '../images/Services/servicesImg1.jpg';
import img2 from '../images/Services/servicesImg2.jpg';
import img3 from '../images/Services/servicesImg3.jpg';
import img4 from '../images/Services/servicesImg4.jpg';
import img5 from '../images/Services/servicesImg5.jpg';
import img6 from '../images/Services/servicesImg6.jpg';

const services = [
    {
        image: img1,
        title: 'Sketching',
        description: 'Transform your vision into exquisite jewelry pieces with our sketching services. As the first phase of the jewelry computer-aided design process, our detailed sketches lay the foundation for intricate 3D modeling. Collaborate with our sketchers to express your dream jewelry, ensuring every detail is captured before the magic of modeling begins.'
    },
    {
        image: img2,
        title: '3D modeling',
        description: 'Second phase of our comprehensive jewelry CAD services: 3D Modeling. After our initial sketching phase, we bring your jewelry designs to life with 3D modeling. Our skilled professionals create ready-to-print 3D models not only of jewelry pieces but also fashion accessories, ensuring every intricate detail is perfected before moving on to production.'
    },
    {
        image: img3,
        title: 'Sculpting',
        description: 'Our digital sculpting service elevates your designs by adding a unique, artisanal touch to your pieces. Whether it`s for jewelry or fashion accessories, our sculpting process enhances the design, bringing depth, texture, and new level of craftsmanship. By using advanced software, we meticulously sculpt intricate details and textures, bringing your jewelry and fashion accessory concepts to life. This service is ideal for creating bespoke, high-quality pieces that stand out.'
    },
    {
        image: img4,
        title: 'Rendering',
        description: 'After preparing the 3D model, we create photorealistic images that showcase every detail of your designs by utilizing advanced software. Perfect for presentations, marketing, and client approvals, our renderings bring your creations to life with stunning clarity and precision.'
    },
    {
        image: img5,
        title: 'Rendering & more for websites and smm',
        description: 'Tailored for social media marketing and website use, our rendering services create photorealistic images in digital studios that capture and highlight every intricate detail of your jewelry and accessories. These striking visuals elevate your brand’s digital presence, making your designs stand out and engage your audience with aesthetics and elegance.'
    },
    {
        image: img6,
        title: 'Animations',
        description: 'Jewelry animation services provide a dynamic way to showcase intricate designs and craftsmanship through animated visuals. By creating realistic 3D models and interactive presentations, these services help highlight the unique features and beauty of jewelry pieces, enhancing marketing and customer engagement. Ideal for online catalogs, promotional videos, and virtual try-ons, jewelry animation brings static designs to life, allowing clients to visualize and appreciate each piece in detail.'
    },
];

function Services() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();

    const handleImageClick = (category) => {
        navigate('/portfolio', { state: { category } });
    };

    return (
        <div className={styles.container}>
            {services.map((service, index) => (
                <ServicesItem
                    key={index}
                    image={service.image}
                    title={service.title}
                    description={service.description}
                    isReversed={index % 2 !== 0}
                    onClick={() => handleImageClick(service.title)}
                />
            ))}
        </div>
    );
}

export default Services;
