// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import { slideUp } from "../../utility/animation";
// import { useNavigate } from "react-router-dom";

// import HeroImg1 from "../../assets/hero-1.jpg";
// import HeroImg2 from "../../assets/hero-2.jpg";
// import HeroImg3 from "../../assets/hero-3.jpg";

// import CachedImage from "../CachedImage";

// const Hero = () => {
//   // Array of background images
//   const images = [HeroImg1, HeroImg2, HeroImg3];

//   // State to track the current image index
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Automatically change the image every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000); // Change image every 5 seconds
//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, [images.length]);

//   // Framer Motion Variants for Background Animation
//   const backgroundVariants = {
//     initial: { opacity: 0, scale: 1.1 },
//     animate: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 1.5, // Smooth transition duration
//         ease: "easeOut",
//       },
//     },
//     exit: { opacity: 0, scale: 1.1, transition: { duration: 1.5 } },
//   };

//   const navigate = useNavigate();

//   return (
//     <>
//       <div className="container relative min-h-[600px] md:min-h-[700px] overflow-hidden">
//         <AnimatePresence>
//           {/* Background Image Slider */}
//           <motion.div
//             key={currentImageIndex} // Ensure unique key for each image
//             className="absolute inset-0"
//             variants={backgroundVariants}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//           >
//             <CachedImage
//               src={images[currentImageIndex]}
//               alt={`Background ${currentImageIndex + 1}`}
//               className="w-full h-full object-cover"
//             />
//           </motion.div>
//         </AnimatePresence>

//         {/* Overlay for Text */}
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-5">
//           <motion.h1
//             variants={slideUp(0.2)}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: false }}
//             className="text-4xl xl:text-5xl font-bold leading-tight text-center"
//           >
//             Verlässliche Pflegekräfte für Ihr Zuhause <br />
//             <span className="">Sernitas Care</span>
//           </motion.h1>

//           <motion.p
//             variants={slideUp(0.5)}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: false }}
//             className="mt-4 text-lg xl:text-xl text-center leading-relaxed"
//           >
//             Mit Herz, Kompetenz und Fürsorge begleiten wir Ihre Liebsten im
//             Alltag – individuell, persönlich und in vertrauter Umgebung. <br />
//             Weil Würde, Geborgenheit und Lebensqualität an erster Stelle stehen.
//           </motion.p>

//           {/* Bullet Points */}
//           <motion.ul
//             variants={slideUp(0.8)}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: false }}
//             className="mt-6 font-amatic text-slate-300 flex flex-row justify-center items-center text-lg xl:text-xl text-center list-disc list-inside gap-x-4"
//           >
//             <li>Pflege, die ankommt.</li>
//             <li>Zu Hause.</li>
//             <li>Mit Liebe.</li>
//           </motion.ul>

//           {/* Optional Subtitle/Slogan */}
//           <motion.p
//             variants={slideUp(1)}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: false }}
//             className="mt-8 text-md xl:text-lg text-center italic text-gray-200"
//           >
//             Ihre vertrauensvolle Pflegepartnerin für ein selbstbestimmtes Leben
//             daheim.
//           </motion.p>
//           <motion.div
//             variants={slideUp(0.8)}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: false }}
//             className="flex gap-4 mt-6"
//           >
//             <motion.button
//               whileHover={{ scale: 1.1 }} // Enlarge button on hover
//               whileTap={{ scale: 0.95 }} // Slightly shrink button on tap
//               onClick={() => navigate("/services")}
//               className="primary-btn border-2 border-white hover:border-primary hover:bg-secondary hover:text-white transition-transform duration-300 shadow-md hover:shadow-lg"
//             >
//               Mehr erfahren
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.1 }} // Enlarge button on hover
//               whileTap={{ scale: 0.95 }} // Slightly shrink button on tap
//               onClick={() => navigate("/application-form")}
//               className="primary-btn border-2 border-white hover:border-primary hover:bg-secondary hover:text-white transition-transform duration-300 shadow-md hover:shadow-lg"
//             >
//               Kostenlos beraten lassen
//             </motion.button>
//           </motion.div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Hero;

/** Hero: Homepage hero with background video, CTA buttons (application form, contact), and optional video modal. */
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { FaPhone, FaPlay } from "react-icons/fa";

const Hero = () => {
  const navigate = useNavigate();
  // const [hover, setHover] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const backgroundVideoUrl =
    "https://www.youtube.com/embed/5ORB8IWFxMo?autoplay=1&mute=1&loop=1&playlist=5ORB8IWFxMo&controls=0&showinfo=0&modestbranding=1";

  const popupVideoUrl = "https://www.youtube.com/embed/5ORB8IWFxMo?autoplay=1";

  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <iframe
          className="w-full h-full object-cover"
          src={backgroundVideoUrl}
          title="Sernitas Video Background"
          allow="autoplay; muted; loop"
          style={{ border: "none" }} // Replaces the deprecated frameBorder attribute
        />
      </div>

      {/* Overlay Content */}
      {!isVideoOpen && (
        <div className="absolute inset-0 z-10 bg-black bg-opacity-40 text-white flex flex-col justify-center items-start px-6 sm:px-6 md:px-12">
          <motion.h1
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
            }}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8 }}
            className="text-3xl xl:text-5xl font-semibold leading-snug"
          >
            Ihr Pflegedienst im Revier
          </motion.h1>

          <motion.p
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
            }}
            initial="initial"
            animate="animate"
            transition={{ duration: 1 }}
            className="mt-4 text-lg xl:text-xl"
          >
            Ambulante Krankenpflege und Seniorenpflege zu Hause
          </motion.p>

          <motion.div
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
            }}
            initial="initial"
            animate="animate"
            transition={{ duration: 1.2 }}
            className="mt-6 bg-primary/60 text-white/90 p-4 rounded-xl shadow-md flex items-center gap-4"
          >
            <FaPhone className="text-xl text--white/90" />
            <div>
              <div className="text-lg font-bold">0234 / 966 46 480</div>
              <div className="text-sm text-white/90">
                24h Notdienst – Beratung werktags 08:00 - 17:00 Uhr
              </div>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
            }}
            initial="initial"
            animate="animate"
            transition={{ duration: 1.4 }}
            className="flex gap-6 mt-6"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/services/grundpflege")}
              className="primary-btn border-2 border-white hover:border-primary hover:bg-secondary hover:text-white transition-transform duration-300 shadow-md hover:shadow-lg"
            >
              Mehr erfahren
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/application-form")}
              className="primary-btn border-2 border-white hover:border-primary hover:bg-secondary hover:text-white transition-transform duration-300 shadow-md hover:shadow-lg"
            >
              Kostenlos beraten lassen
            </motion.button>
          </motion.div>
        </div>
      )}

      {/* Play Button */}
      {!isVideoOpen && (
        <div className="absolute z-20 flex items-center justify-center w-full h-full pointer-events-none">
          <div
            className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-black/50 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 pointer-events-auto"
            onClick={() => setIsVideoOpen(true)}
          >
            <FaPlay className="text-white text-3xl md:text-4xl" />
          </div>
        </div>
      )}

      {/* Modal for Video */}
      <Modal
        isOpen={isVideoOpen}
        onRequestClose={() => setIsVideoOpen(false)}
        className="fixed inset-0 flex items-center justify-center bg-black/70 p-4"
        overlayClassName="fixed inset-0 bg-black/50"
      >
        <div className="bg-black rounded-lg overflow-hidden shadow-lg w-[90%] max-w-2xl relative">
          <button
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-2 right-3 text-white hover:text-gray-300 text-2xl z-10"
          >
            &times;
          </button>
          <iframe
            src={popupVideoUrl}
            className="w-full h-[calc(100vh-200px)] object-cover"
            title="Hero Video"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default Hero;
