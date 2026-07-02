import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const skills = [
  "HTML5",
  "SASS",
  "CSS3",
  "Redux",
  "Tailwind",
  "MongoDB",
  "Bootstrap",
  "EJS",
  "ES6",
];

const SkillsSlide = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 1500,
      }}
      spaceBetween={50}
      slidesPerView={3}
      className="lg:hidden font-outfit text-base text-center bg-[#CCF381] dark:bg-[#1A1A1A] text-[#4732D3] dark:text-[#9A9A9A] border-t-[1px] border-b-[1px] border-[#3D155F] dark:border-[#242424]"
    >
      {skills.map((skill) => (
        <SwiperSlide key={skill} className="w-full h-full py-20">
          {skill}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SkillsSlide;
