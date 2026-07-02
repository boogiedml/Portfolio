import { SectionTemplate } from "@/templates";
import {
  ProjectContactSection,
  ProjectDetails,
  ProjectImageSwipe,
} from "@/organisms";
import { ProjectName } from "@/atoms";
import posL from "@/assets/pos/pos.light.png";
import posD from "@/assets/pos/pos.dark.png";
import pos1 from "@/assets/pos/pos1.png";
import pos2 from "@/assets/pos/pos2.png";
import pos3 from "@/assets/pos/pos3.png";
import pos4 from "@/assets/pos/pos4.png";
import pos5 from "@/assets/pos/pos5.png";
import pos6 from "@/assets/pos/pos6.png";
import pos7 from "@/assets/pos/pos7.png";
import pos8 from "@/assets/pos/pos8.png";
import pos9 from "@/assets/pos/pos9.png";

const PosContent = () => {
  return (
    <div className="project">
      <div>
        <ProjectName name="Posxena" />
        <ProjectImageSwipe
          imageArr={[
            posL,
            posD,
            pos1,
            pos2,
            pos3,
            pos4,
            pos5,
            pos6,
            pos7,
            pos8,
            pos9,
          ]}
        />
        <ProjectDetails
          paragraphArr={[
            "At Posxena, we embarked on a journey to revolutionize the way businesses handle their transactions. We recognized the need for a powerful and versatile Point of Sale system that not only simplifies product management but also enhances customer interactions, streamlines invoicing, and keeps track of receipts efficiently.",
            "To bring this vision to life, our team set out to build a comprehensive suite of tools and features that cater to the diverse needs of businesses. As a Frontend Engineer at Posxena, I was entrusted with the responsibility of creating these essential components.",
            "One of our primary objectives was to ensure that the user experience remained at the forefront of our application. We understood that a POS system plays a pivotal role in a business's day-to-day operations. Therefore, we focused on making it intuitive and user-friendly.",
            "To kickstart this endeavor, we collaborated with a professional designer who crafted a unique brand identity and provided us with stunning mockups. Leveraging this foundation, I spearheaded the development of our design system, which would serve as the backbone of our application's UI. Subsequently, I led the creation of a brand new marketing website that adhered to these design guidelines.",
            "Within the application, I took charge of designing and implementing various UI components, seamlessly integrating them with REST APIs. One of our standout achievements was the messaging system, which I built from the ground up, leveraging the API infrastructure provided by our Rails backend. This was a particularly challenging endeavor, as we aimed to deliver a messaging experience that rivaled the functionality of well-known platforms like Facebook Messenger.",
            "Collaborating closely with a colleague, we developed a robust appointment scheduling system that perfectly complemented our product's ecosystem. Our classroom app, a core element of Posxena, featured innovative tools such as a customizable real-time whiteboard, video and audio communication capabilities, and other features designed to facilitate seamless interactions between tutors and students.",
            "Our project was vast and complex, comprising hundreds of thousands of lines of code and utilizing a diverse stack of technologies, including React, Rails, Sass, Redux, Webpacker, GoLang, and Java. Throughout the development process, we continuously evaluated our strategies, particularly in areas like state management, performance optimization, and development workflows.",
            "As the Lead Frontend Engineer, I had the privilege of collaborating with a talented team of engineers and contractors, each contributing their expertise to various aspects of our application. This experience was incredibly enriching, as it allowed me to explore different facets of product development, from design to DevOps, and from strategy to implementation.",
            "While our journey was marked by its challenges and complexities, we remained steadfast in our pursuit of delivering a game-changing POS solution. Regrettably, the product hasn't yet ventured into the real world, but I hold onto the hope that it will someday. I would also like to acknowledge the exceptional design work by my friend Caleb, whose talent and creativity greatly contributed to our project.",
            "This narrative highlights the ambitious goals and technical achievements of the Posxena project, showcasing your role as a Frontend Engineer in driving its development forward.",
          ]}
        />
      </div>
      <ProjectContactSection />
    </div>
  );
};

const Pos = () => (
  <SectionTemplate id="projects" className="min-h-screen">
    <PosContent />
  </SectionTemplate>
);

export default Pos;
