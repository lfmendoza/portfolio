import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";
import Button from "../ui/Button";
import { personal } from "../../data";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = personal.title;
  const Div = motion.div;
  const Image = motion.img;
  const Header1 = motion.h1;
  const Header2 = motion.h2;
  const Paragraph = motion.p;
  const Anchor = motion.a;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={personal.profileImage}
            alt={personal.name}
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-white shadow-xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          />

          <Header1
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {personal.name}
          </Header1>

          <Header2
            className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mb-6 h-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {text}
            <span className="animate-pulse">|</span>
          </Header2>

          <Div
            className="text-lg text-gray-600 dark:text-gray-300 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              {personal.subtitle}
            </span>
          </Div>

          <Paragraph
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {personal.description}
          </Paragraph>

          <Div
            className="flex justify-center space-x-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                8+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Años de Experiencia
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                Senior
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Tech Leadership
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                5+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Industries
              </div>
            </div>
          </Div>

          <Div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <Button onClick={scrollToProjects} size="lg">
              Ver Proyectos
            </Button>
            <Button variant="outline" onClick={scrollToContact} size="lg">
              <FaEnvelope className="mr-2" />
              Contactar
            </Button>
            <Button variant="secondary" href={personal.resumeUrl} size="lg">
              <FaDownload className="mr-2" />
              Descargar CV
            </Button>
          </Div>

          <Div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <Anchor
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-2xl transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </Anchor>
            <Anchor
              href={personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-2xl transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </Anchor>
            <Anchor
              href={personal.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-2xl transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter />
            </Anchor>
          </Div>
        </Div>

        {/* Animated scroll indicator */}
        <Div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"></div>
          </div>
        </Div>
      </div>
    </section>
  );
};

export default Hero;
