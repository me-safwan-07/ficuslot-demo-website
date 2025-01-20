import { motion } from "framer-motion";
import { VideoDialog } from "./VideoDialog";

export default function About() {
  // const [isPlaying, setIsPlaying] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // const handlePlayVideo = () => {
  //   // Show loading effect for a short delay before starting the video
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsPlaying(true);
  //     setIsLoading(false);
  //   }, 2000); // 2 seconds delay
  // };

  return (
    <section  className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Empowering Businesses with Digital Excellence
            </h2>
            <p className="text-gray-400 mb-6">
              At Ficuslot Innovation, we specialize in web development, application development, and digital marketing
              to drive growth and innovation. Our mission is to break the barriers of technology access and create
              impactful solutions for businesses of all sizes.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Expertise in modern technologies",
                "Focus on innovation and creativity",
                "Comprehensive business solutions",
                "Commitment to client success",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center text-gray-300"
                >
                  <span className="h-2 w-2 rounded-full bg-blue-500 mr-3" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
              {/* <div
                className={`ytp-cued-thumbnail-overlay relative w-full h-full ${
                  isLoading ? "opacity-0 transition-opacity duration-500" : "opacity-100"
                }`}
              > */}
              <VideoDialog 
                videoSrc={"https://www.youtube.com/embed/NwZMS-1e-Oc?autoplay=1&rel=0"}
                thumbnailSrc={"https://i.ytimg.com/vi_webp/NwZMS-1e-Oc/sddefault.webp"}
                className="z-10"
              />
              {/* </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
