import React, { useEffect, useState } from 'react';
import EmailJS from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../css/contactUs.module.css';
import phone from '../assets/phone.png';
import message from '../assets/message.png';
import location from '../assets/location.png';
import ring from '../assets/ring.png';
import letterSend from '../assets/letter_send 1.png';
import closeBtn from '../assets/closeBtn.svg';
import linkedIn from "../assets/linkedIn.jpg";

function ContactUsModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        service: [],
        message: '',
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        if (type === 'checkbox') {
            setFormData((prevState) => {
                if (checked) {
                    return {
                        ...prevState,
                        service: [...prevState.service, value],
                    };
                } else {
                    return {
                        ...prevState,
                        service: prevState.service.filter((service) => service !== value),
                    };
                }
            });
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };


    const handleSubmit = (event) => {
        event.preventDefault();

        const { firstName, email, service, message } = formData;

        if (!email || !message) {
            toast.error('Please fill in your email and message.');
            return;
        }

        const serviceList = service.join(', ');

        const templateParams = {
            from_name: `${firstName} `,
            email,
            service: serviceList,
            message,
        };

        EmailJS.send(
            'service_dtp8z3b',
            'template_gq86ohf',
            templateParams,
            '0tjBaTjbTk7MPTU8G'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                toast.success('Your message has been sent successfully!');
                setFormData({ firstName: '', email: '',  service: [], message: '' });
            })
            .catch((err) => {
                console.error('FAILED...', err);
                toast.error('An error occurred. Please try again later.');
            });
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <ToastContainer />
            <div className={styles.contactUs}>
                <button className={styles.closeButton} onClick={onClose}>
                    <img src={closeBtn} alt="Close" className={styles.closeButton} />
                </button>

                <div className={styles.contactInformation}>
                    <div className={styles.contactTitles}>
                        <div className={styles.title}>Contact Information</div>
                    </div>
                    <div className={styles.contactDetails}>
                        <div className={styles.detailItem}>
                            <img src={phone} alt="Phone"/>
                            <span>+374 77 543 443</span>
                        </div>
                        <div className={styles.detailItem}>
                            <img src={message} alt="Email"/>
                            <span>hello@sirunyan.com</span>
                        </div>
                        <div className={styles.detailItem}>
                            <img src={location} alt="Location"/>
                            <span>75 Baghramyan Ave, 0033 Yerevan, Republic of Armenia</span>
                        </div>
                        <div className={styles.detailItem}>
                            <img src={location} alt="Location"/>
                            <span>Unit A, 841 Grange St, Glendale, CA 91202, USA</span>
                        </div>
                    </div>
                    <div className={styles.socials}>
                        <a target="_blank" href={'https://www.linkedin.com/in/tatev-sirunyan/'}>
                            <img src={linkedIn} alt="LinkedIn"/>
                        </a>
                    </div>
                    <img src={ring} alt="Background" className={styles.backgrounImg} />
                </div>

                <div className={styles.contactForm}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.personalInfoContainer}>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="firstName">Name</label>
                                    <input
                                        id="firstName"
                                        className={styles.inputField}
                                        type="text"
                                        placeholder=""
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        id="email"
                                        className={styles.inputField}
                                        type="email"
                                        placeholder=""
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={styles.SelectFormGroup}>
                            <div className={styles.formgroupTitle}>Select Subject</div>
                            <div className={styles.checkbox}>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="service"
                                        value="sketching"
                                        checked={formData.service.includes('sketching')}
                                        onChange={handleChange}
                                    />
                                    <span className={styles.customCheckbox}></span>
                                    Sketching
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="service"
                                        value="rendering"
                                        checked={formData.service.includes('rendering')}
                                        onChange={handleChange}
                                    />
                                    <span className={styles.customCheckbox}></span>
                                    Rendering
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="service"
                                        value="modeling"
                                        checked={formData.service.includes('modeling')}
                                        onChange={handleChange}
                                    />
                                    <span className={styles.customCheckbox}></span>
                                    3D Modeling
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="service"
                                        value="web"
                                        checked={formData.service.includes('web')}
                                        onChange={handleChange}
                                    />
                                    <span className={styles.customCheckbox}></span>
                                    Rendering for Websites and SMM
                                </label>

                                <label>
                                    <input
                                        type="checkbox"
                                        name="service"
                                        value="sculpting"
                                        checked={formData.service.includes('sculpting')}
                                        onChange={handleChange}
                                    />
                                    <span className={styles.customCheckbox}></span>
                                    Sculpting
                                </label>

                                <label>
                                    <input
                                        type="checkbox"
                                        name="service"
                                        value="animation"
                                        checked={formData.service.includes('animation')}
                                        onChange={handleChange}
                                    />
                                    <span className={styles.customCheckbox}></span>
                                    Animations
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="service"
                                        value="other"
                                        checked={formData.service.includes('other')}
                                        onChange={handleChange}
                                    />
                                    <span className={styles.customCheckbox}></span>
                                    Other
                                </label>
                            </div>
                        </div>
                        <div className={styles.textFormGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                className={styles.textArea}
                                placeholder="Write your message.."
                                rows="3"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.sendMessageButtonContainer}>
                            <button type="submit" className={styles.sendMessageButton} id="sendMessageButton">Send Message</button>
                            <label htmlFor="sendMessageButton" className={styles.letterSendLabel}>
                                <img src={letterSend} alt="Letter Send" className={styles.letterSend}/>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUsModal;
