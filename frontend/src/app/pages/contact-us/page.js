'use client'
import LayoutOne from "@/components/Layout/LayoutOne";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import React, { useState } from "react";






export default function ContactUs() {

    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitting(true);
        const formElement = e.target;
        const formData = new FormData(formElement);
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
    
        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbxBauvSx301r4ZqzcHAsT5397MlkLXrzV93iHYsqynasqf9nt46ehMBl5qd5YucQ1u9HQ/exec", {
                method: "POST",
                body: formData,
            });
    
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
    
            const data = await response.json();
            setIsSubmitting(false);
            console.log(data);
            alert("Form submitted successfully!");
            // Reset the form fields
            formElement.reset();
        } catch (error) {
            setIsSubmitting(false);
            console.error("There was an error submitting the form:", error);
            alert("An error occurred while submitting the form.");
        }
    }
    
    

    return (
        <LayoutOne>
            <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]"></div>
            <section className="form-contact-us pt-20">
                <div className="container">
                    <div className="flex max-lg:flex-col lg:items-center justify-between gap-y-8">
                        <div className="w-full lg:w-1/2 lg:pr-3">
                            <div className="infor">
                                <div className="heading">
                                    <div className="tag caption1 font-bold uppercase">Contact Us</div>
                                    <h2 className="heading2 mt-4">We’d love to help</h2>
                                    <p className="body2 mt-4">Enabled a startup to launch a successful mobile app by providing end-to-end development, leading to high downloads and recognition.</p>
                                </div>
                                <div className="list-social flex items-center gap-5 mt-7">
                                    <Link className="item rounded-full w-12 h-12 flex items-center justify-center bg-white border-outline hover:bg-blue hover:text-white duration-300" href="https://www.facebook.com/" target="_blank">
                                        <i className="icon-facebook"></i>
                                    </Link>
                                    <Link className="item rounded-full w-12 h-12 flex items-center justify-center bg-white border-outline hover:bg-blue hover:text-white duration-300" href="https://www.linkedin.com/" target="_blank">
                                        <i className="icon-linkedin"></i>
                                    </Link>
                                    <Link className="item rounded-full w-12 h-12 flex items-center justify-center bg-white border-outline hover:bg-blue hover:text-white duration-300" href="https://www.twitter.com/" target="_blank">
                                        <i className="icon-twitter"></i>
                                    </Link>
                                    <Link className="item rounded-full w-12 h-12 flex items-center justify-center bg-white border-outline hover:bg-blue hover:text-white duration-300" href="https://www.youtube.com/" target="_blank">
                                        <i className="icon-youtube"></i>
                                    </Link>
                                    <Link className="item rounded-full w-12 h-12 flex items-center justify-center bg-white border-outline hover:bg-blue hover:text-white duration-300" href="https://www.instagram.com/" target="_blank">
                                        <i className="icon-instagram text-sm"></i>
                                    </Link>
                                </div>
                                <div className="list-more-infor lg:mt-10 mt-7">
                                    <div className="item flex items-center gap-6">
                                        <div className="icon flex items-center justify-center w-12 h-12 bg-blue text-white rounded-full">
                                            <Icon.Phone weight="bold" className="text-xl" />
                                        </div>
                                        <div className="text h-full flex-1 pl-6 border-l border-outline">
                                            <span className="body2">123 456 7890</span>
                                        </div>
                                    </div>
                                    <div className="item flex items-center gap-6 mt-5">
                                        <div className="icon flex items-center justify-center w-12 h-12 bg-blue text-white rounded-full">
                                            <Icon.EnvelopeSimple weight="bold" className="text-xl" />
                                        </div>
                                        <div className="text h-full flex-1 pl-6 border-l border-outline">
                                            <span className="body2">hi.avitex@gmail.com</span>
                                        </div>
                                    </div>
                                    <div className="item flex items-center gap-6 mt-5">
                                        <div className="icon flex items-center justify-center w-12 h-12 bg-blue text-white rounded-full">
                                            <Icon.MapPin weight="bold" className="text-xl" />
                                        </div>
                                        <div className="text h-full flex-1 pl-6 border-l border-outline">
                                            <span className="body2">4140 Rd. Allentown, New Mexico 31134</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 lg:pl-12">
                            <form className="form-block bg-white rounded-2xl p-10 shadow-xl" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="max-xl:col-span-2 max-lg:col-span-1 max-sm:col-span-2">
                                        <input className="w-full bg-surface caption1 px-4 py-3 rounded-lg" id="Name" type="text" name="Name" placeholder="Name" required />
                                    </div>
                                    <div className="max-xl:col-span-2 max-lg:col-span-1 max-sm:col-span-2">
                                        <input className="w-full bg-surface caption1 px-4 py-3 rounded-lg" id="Subject" type="text" name="Subject" placeholder="Subject" required />
                                    </div>
                                    <div className="col-span-2">
                                        <input className="w-full bg-surface caption1 px-4 py-3 rounded-lg" id="Email" type="email" name="Email" placeholder="Email" required />
                                    </div>
                                    <div className="col-span-2">
                                        <textarea className="w-full bg-surface caption1 px-4 py-3 rounded-lg" name="Messsage" rows="4" placeholder="Your Questions..." required></textarea>
                                    </div>
                                </div>
                                <button className="button-main lg:mt-10 mt-7"disabled={isSubmitting}>
                                {isSubmitting ? "Submitting..." : "Send Message"}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="our-location lg:py-20 sm:py-14 py-10 border-b border-outline">
                
            </section>
        </LayoutOne>
    );
}
