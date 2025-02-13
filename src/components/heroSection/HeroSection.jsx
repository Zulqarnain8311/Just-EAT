// image import
import HeroImage from "../../assets/hero-image.jpg";

function HeroSection() {
  return (
    <div className="hero-container md:h-[300px] ">
      <img
        src={HeroImage}
        className="w-full h-full object-cover"
        alt="Hero Image"
      />
    </div>
  );
}

export default HeroSection;
