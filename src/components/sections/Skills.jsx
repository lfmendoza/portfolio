import { useInView } from "react-intersection-observer";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaSass,
  FaFigma,
  FaServer,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiVite,
  SiWebpack,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import Card from "../ui/Card";
import ProgressBar from "../ui/ProgressBar";
import { skills as skillsData } from "../../data";
import { motion } from "framer-motion";

const Skills = () => {
  const [_ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const iconMap = {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaSass,
    FaFigma,
    FaServer,
    SiTypescript,
    SiTailwindcss,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiVite,
    SiWebpack,
    SiVercel,
    SiNetlify,
  };
  const Div = motion.div;
  const Span = motion.span;

  const SkillCategory = ({ title, skills, delay = 0 }) => (
    <Div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          {title}
        </h3>
        <div className="space-y-4">
          {skills.map((skill) => {
            const IconComponent = iconMap[skill.icon];
            return (
              <div key={skill.name} className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {IconComponent && (
                    <IconComponent
                      className="text-2xl"
                      style={{ color: skill.color }}
                    />
                  )}
                </div>
                <div className="flex-grow">
                  <ProgressBar
                    level={skill.level}
                    color={skill.color}
                    label={skill.name}
                    animated={inView}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </Div>
  );

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Habilidades Técnicas & Arquitectura
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            8+ años de experiencia en arquitectura de software, diseño de
            sistemas distribuidos y liderazgo técnico en proyectos de gran
            escala para múltiples industrias.
          </p>
        </Div>{" "}
        <p>
          versátil de tecnologías y herramientas que me permiten crear
          soluciones web completas y modernas.
        </p>
        <Div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Habilidades Técnicas & Arquitectura
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            8+ años de experiencia en arquitectura de software, diseño de
            sistemas distribuidos y liderazgo técnico en proyectos de gran
            escala para múltiples industrias.
          </p>
        </Div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory
            title="Software Architecture"
            skills={skillsData.architecture}
            delay={0.1}
          />
          <SkillCategory
            title="Frontend Development"
            skills={skillsData.frontend}
            delay={0.2}
          />
          <SkillCategory
            title="Backend & APIs"
            skills={skillsData.backend}
            delay={0.3}
          />
          <SkillCategory
            title="Databases & Storage"
            skills={skillsData.databases}
            delay={0.4}
          />
          <SkillCategory
            title="Cloud & DevOps"
            skills={skillsData.cloud}
            delay={0.5}
          />
          <SkillCategory
            title="Tools & Quality Assurance"
            skills={skillsData.tools}
            delay={0.6}
          />
        </div>
        <Div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="mr-3 text-3xl">🏗️</span>
              Arquitectura de Software
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Especialización en diseño de sistemas distribuidos y arquitecturas
              escalables:
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Large Scale Systems",
                "Event-Driven Architecture",
                "Disaster Recovery Systems",
                "Performance Optimization",
                "OWASP Security",
                "Migration Strategies",
              ].map((tech) => (
                <Span
                  key={tech}
                  className="px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech}
                </Span>
              ))}
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="mr-3 text-3xl">👥</span>
              Liderazgo Técnico
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              8+ años liderando equipos de alto rendimiento y proyectos
              críticos:
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Tech Team Leadership",
                "Cross-functional Collaboration",
                "Technical Mentoring",
                "Project Architecture",
                "Code Quality Standards",
                "Agile Methodologies",
              ].map((tech) => (
                <Span
                  key={tech}
                  className="px-3 py-1 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech}
                </Span>
              ))}
            </div>
          </Card>
        </Div>
        <Div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-12"
        >
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-700">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
                <span className="mr-3 text-3xl">🎯</span>
                Expertise Principal
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                <strong>Principal Software Engineer</strong> especializado en
                transformaciones digitales, migraciones tecnológicas y
                optimización de rendimiento para plataformas que manejan
                millones de transacciones concurrentes.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    8+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Años de Experiencia
                  </div>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    50%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Mejora en Performance
                  </div>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    1M+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Requests Concurrentes
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Div>
      </div>
    </section>
  );
};

export default Skills;
