import { useState, type ChangeEvent, type FormEvent } from "react";
import { SectionTemplate } from "@/templates";
import { FiArrowRight } from "react-icons/fi";
import { AnimatePresence } from "framer-motion";
import { Toast } from "@/atoms";
import { CONTACT_API_URL } from "@/shared/constants/contact";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactContent = () => {
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
      <section className="relative mb-10 md:mb-0 mt-14 sm:mt-28 md:mt-32 lg:mt-36">
        <div className="max-w-lg mx-auto text-left sm:text-center mb-16">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-[650] mb-3 mx-auto font-grotesk leading-tight bg-gradient-to-r from-[#4732D3] to-[#4732D3] dark:from-[#9A9A9A] dark:to-zinc-700 bg-clip-text text-transparent">
            Send me a message!
          </h3>
          <p className="text-[#3D155F] dark:text-[#9A9A9A] text-xs sm:text-base md:text-lg lg:text-xl font-normal font-grotesk">
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>
        </div>
        <div className=" max-w-3xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-9 md:gap-12 lg:gap-16"
          >
            <div className="w-full flex flex-col md:flex-row items-center gap-9 md:gap-12 lg:gap-16">
              <div className="w-full flex flex-col gap-1.5 group flex-1">
                <label
                  className="text-[#3D155F] dark:text-[#9A9A9A] opacity-80 text-xs md:text-sm font-[200]"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  className="py-3 text-sm text-[#4732D3] dark:text-[#9A9A9A] md:text-base bg-transparent border-b-[.6px] group-focus-within:border-[#4732D3] dark:group-focus-within:border-[#CCF381] border-[#3D155F] dark:border-[#9A9A9A] outline-none transition-all duration-700"
                  type="text"
                  id="name"
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
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="py-3 text-sm text-[#4732D3] dark:text-[#9A9A9A] md:text-base bg-transparent border-b-[.6px] group-focus-within:border-[#4732D3] dark:group-focus-within:border-[#CCF381] border-[#3D155F] dark:border-[#9A9A9A] outline-none transition-all duration-700"
                  id="email"
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
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="py-3 text-sm text-[#4732D3] dark:text-[#9A9A9A] md:text-base bg-transparent border-b-[.6px] group-focus-within:border-[#4732D3] dark:group-focus-within:border-[#CCF381] border-[#3D155F] dark:border-[#9A9A9A] outline-none transition-all duration-700 resize-none"
                rows={3}
              />
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="flex mx-auto items-center gap-5 w-fit font-outfit text-sm md:text-base dark:bg-[#1A1A1A] text-[#4732D3] hover:bg-[#4732D3] hover:text-white dark:text-[#9A9A9A] border-[1px] border-[#4732D3] dark:border-[#242424] py-2 md:py-3 px-14 md:px-20 hover:transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 cursor-pointer"
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

const Contact = () => (
  <SectionTemplate id="contact" className="md:min-h-[98vh]">
    <ContactContent />
  </SectionTemplate>
);

export default Contact;
