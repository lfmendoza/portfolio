import { FaHeart, FaCode, FaCoffee } from "react-icons/fa";
import { personal } from "../../data";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const Div = motion.div;

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">{personal.name}</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Desarrollador apasionado por crear experiencias digitales que
              marquen la diferencia. Siempre dispuesto a enfrentar nuevos
              desafíos y aprender tecnologías innovadoras.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © {currentYear} {personal.name}. Todos los derechos reservados.
              </p>

              <div className="flex items-center space-x-1 text-gray-400">
                <span>Hecho con</span>
                <FaHeart className="text-red-500 mx-1" />
                <span>y</span>
                <FaCode className="text-blue-500 mx-1" />
                <span>y mucho</span>
                <FaCoffee className="text-yellow-600 mx-1" />
                <span>en Guatemala</span>
              </div>
            </div>
          </div>
        </Div>
      </div>
    </footer>
  );
};

export default Footer;
