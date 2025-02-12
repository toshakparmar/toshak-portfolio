import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const github_url = "https://github.com/toshakparmar";
  const insta_url = "https://www.instagram.com/imtarts3/";
  const linkedin_url = "https://www.linkedin.com/in/toshak-parmar-673968263/";

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_g8k7dlm";
    const templateId = "template_pqmequc";
    const publicKey = "UiWuSRhairaEMoPJc";

    setLoading(true);

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: "Toshak",
          from_email: form.email,
          to_email: "arnavpal9999@gmail.com",
          message: form.message,
        },
        publicKey
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-5">
          <h3 className={`${styles.sectionHeadText} mb-2 sm:mb-0`}>Contact.</h3>
          <div className='flex justify-start sm:justify-end items-center gap-3 sm:gap-4'>
            <div
              onClick={() => window.open(github_url, "_blank")}
              className='w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer 
              hover:bg-white/10 transition-colors duration-300'
            >
              <FaGithub className="text-[20px] sm:text-[25px]" />
            </div>
            <div
              onClick={() => window.open(linkedin_url, "_blank")}
              className='w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer 
              hover:bg-white/10 transition-colors duration-300'
            >
              <FaLinkedin className="text-[20px] sm:text-[25px]" />
            </div>
            <div
              onClick={() => window.open(insta_url, "_blank")}
              className='w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer 
              hover:bg-white/10 transition-colors duration-300'
            >
              <FaInstagramSquare className="text-[20px] sm:text-[25px]" />
            </div>
          </div>
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="what's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="what's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="what do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      {!isMobile ? (
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      ) : null}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
