import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { SwiperButtons } from "@/atoms";
import "swiper/css";
import "swiper/css/pagination";

interface ProjectImageSwipeProps {
  imageArr?: string[];
}

const ProjectImageSwipe = ({ imageArr }: ProjectImageSwipeProps) => {
  const pagination = {
    clickable: true,
  };

  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 10000 }}
      loop={true}
      pagination={pagination}
    >
      {imageArr?.map((image, i) => (
        <SwiperSlide key={i}>
          <img src={image} alt="project" />
        </SwiperSlide>
      ))}
      <SwiperButtons />
    </Swiper>
  );
};

export default ProjectImageSwipe;
