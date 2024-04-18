import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from 'sweetalert2'
import 'aos/dist/aos.css';
const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(`${import.meta.env.VITE_serviecID}`, `${import.meta.env.VITE_templateID}`, form.current, `${import.meta.env.VITE_publickkey}`)
            .then((result) => {
                console.log(result.text);
                form.current.reset();
                Swal.fire(
                    'Your response has been send',
                    'Thank you for your massage',
                    'success'
                )
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div id="contact" className="my-10  p-5" data-aos="zoom-in">
            <h1 className="text-5xl font-bold text-center my-10">Contact Me</h1>
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <label className="input-group input-group-vertical">
                        <input name="user_name" type="text" placeholder="Rohim Islam" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <label className="input-group input-group-vertical">
                        <input type="email" name="user_email" placeholder="info@site.com" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Massage</span>
                    </label>
                    <label className="input-group input-group-vertical">
                        <textarea name="message" placeholder="Hey Toufiqul How are you? can we ...." className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                    </label>
                </div>
                <div className=''>
                    <input className='btn ' type="submit" value="Send" />
                </div>
            </form>
        </div>
    );
};

export default Contact;