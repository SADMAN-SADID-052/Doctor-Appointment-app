import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  const slides = [
    {
      img: "https://media.istockphoto.com/id/1178217129/photo/background.jpg?s=612x612&w=0&k=20&c=CtA0gnlwqvnyVAFm7M9s5e1Mx-fx7vuwqvnEEoGo81E=",
      title: "Innovating Architecture with VR",
    },
    {
      img: "https://media.istockphoto.com/id/2153227346/video/doctor-reviewing-x-ray-scan-on-a-digital-tablet-close-up.avif?s=640x640&k=20&c=fP_mQww83KY4AuPLYi2RMZ0R7sDCN4OLukJeKOlxV4s=",
      title: "Smart Control Room Solutions",
    },
    {
      img: "https://media.istockphoto.com/id/2196602780/photo/physician-and-patient-analyze-a-holographic-body-model-technology-discussions-on-optimizied.jpg?s=612x612&w=0&k=20&c=oTGBZO75hGo8TBQYI4Kc26jguCSvAlg4sZMT90Izvso=",
      title: "Efficiency in Engineering",
    },
    {
      img: "https://images.unsplash.com/photo-1679496124845-ac6957c8bffd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxkb2N0b3IlMjBhcHBvaW50bWVudHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Smart City with Holographic Tech",
    },
  ];

  return (
    <div className="">
      <Carousel autoPlay infiniteLoop interval={2000} showThumbs={false}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img src={slide.img} className="object-cover h-[500px] w-full" />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent px-4 py-6">
              <h2 className="text-white text-2xl md:text-4xl font-bold text-left">
                {slide.title}
              </h2>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
