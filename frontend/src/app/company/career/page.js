'use client'
import React, { useState } from "react";
import LayoutOne from "@/components/Layout/LayoutOne";
import Link from 'next/link'

export default function Career() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [resumeFile, setResumeFile] = useState(null); // Store the selected file
    const [resumeUrl, setResumeUrl] = useState('');
    const [isResumeUploaded, setIsResumeUploaded] = useState(false);

    // Store the selected file in state instead of uploading immediately
    function handleFileChange(e) {
        const file = e.target.files[0];
        setResumeFile(file);
        setIsResumeUploaded(false); // Mark resume as not uploaded
    }

    async function uploadFile(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                const rawLog = reader.result.split(',')[1]; // Extract only the file data part
                const dataSend = {
                    dataReq: { data: rawLog, name: file.name, type: file.type },
                    fname: "uploadFilesToGoogleDrive"
                };
                fetch('https://script.google.com/macros/s/AKfycbyCUi6-Rwg0XHREud_PlMKCD2rj3XHrnV8rRlYsCagUG1DtojHBdoCIHNAcdbD_Vj_n_g/exec', {
                    method: "POST",
                    body: JSON.stringify(dataSend)
                })
                .then(res => res.json())
                .then((response) => {
                    if (response.result === 'success') {
                        resolve(response.url); // Resolve the promise with the URL
                    } else {
                        reject(new Error('Failed to upload resume: ' + response.message));
                    }
                })
                .catch(reject);
            };
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitting(true);
        const formElement = e.target;
        const formData = new FormData(formElement);

        try {
            if (resumeFile) {
                // Upload the resume and get the URL
                const uploadedUrl = await uploadFile(resumeFile);
                formData.delete('Resume'); // Remove the existing file entry
                formData.append('Resume', uploadedUrl); // Add the resume URL instead
            } else {
                alert('Please upload your resume first.');
                setIsSubmitting(false);
                return;
            }

            // Log form data for debugging purposes
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }

            // Submit the form data
            const response = await fetch("https://script.google.com/macros/s/AKfycbyCUi6-Rwg0XHREud_PlMKCD2rj3XHrnV8rRlYsCagUG1DtojHBdoCIHNAcdbD_Vj_n_g/exec", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            setIsSubmitting(false);
            console.log(data);
            alert("Form submitted successfully!");
            formElement.reset();
            setResumeFile(null); // Clear the file after submission
            setResumeUrl('');
            setIsResumeUploaded(true); // Mark resume as uploaded after successful submission
        } catch (error) {
            setIsSubmitting(false);
            console.error(error);
            alert("An error occurred while submitting the form.");
        }
    }

    return (
        <>
            <LayoutOne className="-style-1">
              
            <div className="form-login lg:py-20 sm:py-14 py-10 border-b border-outline">
              <div className="container flex items-center justify-center">
                <div className="form-inner w-[470px] max-[510px]:w-full">
                  <h3 className="heading3 text-center flex items-center justify-center whitespace-nowrap">
                    Join us in our Journey 
                  </h3>
                  <form className="form mt-6" onSubmit={handleSubmit}  >
                    <div className="form-group ">
                      <label htmlFor="Name">Name*</label>
                      <input id="Name" type="text" name="Name" className="form-control w-full mt-3 border border-outline px-4 h-[50px] rounded" placeholder="Full Name*" required />
                    </div>
                    <div className="form-group mt-6">
                      <label htmlFor="Email">Email address*</label>
                      <input id="username" type="email" name="Email" className="form-control w-full mt-3 border border-outline px-4 h-[50px] rounded" placeholder="Email address*" required />
                    </div>
                    <div className="form-group mt-6">
                      <label htmlFor="Contact">Contact No*</label>
                      <input id="Contact" type="number" name="Contact" className="form-control w-full mt-3 border border-outline px-4 h-[50px] rounded" placeholder="Contact No*" required />
                    </div>
                    <div className="form-group mt-6">
                      <label htmlFor="Role">Role*</label>
                      <input id="Role" type="text" name="Role" className="form-control w-full mt-3 border border-outline px-4 h-[50px] rounded" placeholder="Role*" required />
                    </div>
                   
                    <div className="form-group mt-6">
                      <label htmlFor="Resume">Upload your Resume*</label>
                      <input id="Resume" type="file" name="Resume" className="form-control w-full mt-3 h-[80px] rounded" accept=".pdf,.doc,.docx" required onChange={handleFileChange} />
                    </div> 
                    
                    <div className="sub-input-checkbox flex items-center gap-2 mt-6">
                      <input id="checkbox" type="checkbox" name="checkbox" required />
                      <label htmlFor="checkbox" className="text-surface1">
                        I agree to the <Link href={'#!'} className="text-button text-black hover:underline" scroll={false}>Terms of Use</Link>
                      </label>
                    </div>
                    <div className="block-button mt-6">
                      <button type="submit" className="button-main bg-blue w-full text-center" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Apply"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
           
            </LayoutOne>
        </>
    );
}
