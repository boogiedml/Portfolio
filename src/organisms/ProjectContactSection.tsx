import { useState, type ChangeEvent, type FormEvent } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Toast } from "@/atoms";
import { AnimatePresence } from "framer-motion";
import { CONTACT_API_URL } from "@/shared/constants/contact";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ProjectContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsFormSubmitted(true);
      } else {
        console.error("Email sending failed");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setFormData({ name: "", message: "", email: "" });
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="flex flex-col md:flex-row gap-10 md:gap-5 pt-14 md:mb-20 border-t-[.6px] border-[#3D155F] dark:border-[#242424]">
        <div className="flex-1">
          <h2 className="text-[3rem] md:text-[4rem] lg:text-[5rem] max-w-[400px] font-[650] mb-5 font-grotesk leading-tight bg-gradient-to-r from-[#4732D3] to-[#4732D3] dark:from-[#9A9A9A] dark:to-zinc-700 bg-clip-text text-transparent">
            Let&apos;s work together!
          </h2>
          <p className="text-[#3D155F] dark:text-[#9A9A9A] text-xs md:text-base lg:text-lg xl:text-xl font-normal font-grotesk">
            Like my work and want something similar for your company? Sure,
            let&apos;s get to business!
          </p>
        </div>
        <div className="flex-1">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-9 md:gap-12 lg:gap-16"
          >
            <div className="w-full flex flex-col md:flex-row items-center gap-9 md:gap-12 lg:gap-16">
              <div className="w-full flex flex-col gap-1.5 group flex-1">
                <label
                  className="text-[#3D155F] dark:text-[#9A9A9A] opacity-80 text-xs md:text-sm font-[200]"
                  htmlFor="project-name"
                >
                  Your Name
                </label>
                <input
                  className="py-3 text-sm text-[#4732D3] dark:text-[#9A9A9A] bg-transparent border-b-[.6px] group-focus-within:border-[#4732D3] dark:group-focus-within:border-[#CCF381] border-[#3D155F] dark:border-[#9A9A9A] outline-none transition-all duration-700"
                  type="text"
                  id="project-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>
              <div className="w-full flex flex-col gap-1.5 group flex-1">
                <label
                  className="text-[#3D155F] dark:text-[#9A9A9A] opacity-80 text-xs md:text-sm font-[200]"
                  htmlFor="project-email"
                >
                  Email Address
                </label>
                <input
                  className="py-3 text-sm text-[#4732D3] dark:text-[#9A9A9A] bg-transparent border-b-[.6px] group-focus-within:border-[#4732D3] dark:group-focus-within:border-[#CCF381] border-[#3D155F] dark:border-[#9A9A9A] outline-none transition-all duration-700"
                  id="project-email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5 group flex-1">
              <label
                className="text-[#3D155F] dark:text-[#9A9A9A] opacity-80 text-xs md:text-sm font-[200]"
                htmlFor="project-message"
              >
                Your Message
              </label>
              <textarea
                placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
                id="project-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="py-3 text-sm text-[#4732D3] dark:text-[#9A9A9A] bg-transparent border-b-[.6px] group-focus-within:border-[#4732D3] dark:group-focus-within:border-[#CCF381] border-[#3D155F] dark:border-[#9A9A9A] outline-none transition-all duration-700 resize-none"
                rows={3}
              />
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="flex items-center gap-5 w-fit font-outfit text-sm md:text-base dark:bg-[#1A1A1A] text-[#4732D3] hover:bg-[#4732D3] hover:text-white dark:text-[#9A9A9A] border-[1px] border-[#4732D3] dark:border-[#242424] py-2 md:py-3 px-14 md:px-20 hover:transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 cursor-pointer"
              >
                {isLoading ? (
                  "Shooting"
                ) : (
                  <>
                    Shoot <FiArrowRight />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
      <AnimatePresence>
        {isFormSubmitted && (
          <Toast
            isVisible={isFormSubmitted}
            onClose={() => setIsFormSubmitted(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectContactSection;
