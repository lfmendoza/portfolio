import { useInView } from "react-intersection-observer";
import { FaCode, FaLightbulb, FaUsers, FaRocket } from "react-icons/fa";
import Card from "../ui/Card";
import { motion } from "framer-motion";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const Div = motion.div;

  const features = [
    {
      icon: <FaCode className="text-3xl text-blue-600" />,
      title: "Algoritmos & Estructuras de Datos",
      description:
        "Expertise en diseño y optimización de algoritmos complejos, con herramientas educativas para visualización y análisis de complejidad",
    },
    {
      icon: <FaLightbulb className="text-3xl text-yellow-500" />,
      title: "Arquitectura de Software Enterprise",
      description:
        "Principal Engineer especializado en sistemas distribuidos, Event-Driven Architecture y disaster recovery a gran escala",
    },
    {
      icon: <FaUsers className="text-3xl text-green-600" />,
      title: "Liderazgo Técnico & Mentoring",
      description:
        "9+ años liderando equipos multifuncionales y mentoring desarrolladores en mejores prácticas y arquitecturas escalables",
    },
    {
      icon: <FaRocket className="text-3xl text-purple-600" />,
      title: "Optimización de Performance",
      description:
        "Track record comprobado en mejoras de rendimiento del 50%+ y manejo de millones de transacciones concurrentes",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre Mí
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Principal Software Engineer con 9+ años de experiencia liderando
            transformaciones digitales, arquitecturas de software y equipos de
            alto rendimiento en múltiples industrias.
          </p>
        </Div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <Div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Mi Trayectoria Profesional
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Como{" "}
                <strong>Principal Software Engineer en Hatchworks AI</strong>,
                me especializo en el diseño de arquitecturas de software
                complejas y la optimización de algoritmos para sistemas que
                manejan millones de transacciones concurrentes. Mi pasión por
                los algoritmos y estructuras de datos me ha llevado a crear
                herramientas educativas innovadoras.
              </p>
              <p>
                Mi expertise combina{" "}
                <strong>arquitectura de software enterprise</strong> con una
                profunda comprensión de algoritmos y complejidad computacional.
                He desarrollado plataformas como visualizadores de algoritmos,
                clones de LeetCode y analizadores de complejidad que demuestran
                mi capacidad para traducir conceptos técnicos complejos en
                soluciones accesibles.
              </p>
              <p>
                Mi enfoque de <strong>liderazgo técnico</strong> se basa en la
                mentoring continua, el establecimiento de estándares de calidad
                de código y la implementación de arquitecturas que no solo
                resuelven problemas actuales, sino que escalan para necesidades
                futuras.
              </p>
            </div>
          </Div>

          <Div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <img
              src="/images/about-architecture.jpg"
              alt="Software Architecture Design"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-purple-600/20 rounded-lg"></div>
            <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg p-3">
              <div className="text-sm font-semibold text-gray-900 dark:text-white">
                Actualmente en: Hatchworks AI
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-300">
                Principal Software Engineer & Tech Lead
              </div>
            </div>
          </Div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
            >
              <Card className="p-6 text-center h-full">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </Card>
            </Div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
