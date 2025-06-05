import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
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

const SkillCategory = ({ title, skills, delay, inView }) => (
  <Div
    initial={{ opacity: 0, y: 50 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8, delay }}
  >
    <Card className="p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-gray-900 dark:text-white">
        {title}
      </h3>

      <div className="space-y-4">
        {skills.map(({ name, icon, color, level }) => {
          const Icon = iconMap[icon];
          return (
            <div key={name} className="flex items-center space-x-4">
              {Icon && <Icon className="text-2xl" style={{ color }} />}
              <ProgressBar
                level={level}
                color={color}
                label={name}
                animated={inView}
              />
            </div>
          );
        })}
      </div>
    </Card>
  </Div>
);

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" ref={ref} className="bg-white py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Habilidades Técnicas &amp; Arquitectura
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
            9+ años de experiencia en arquitectura de software, diseño de
            sistemas distribuidos y liderazgo técnico en proyectos de gran
            escala para múltiples industrias.
          </p>
        </Div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <SkillCategory
            title="Software Architecture"
            skills={skillsData.architecture}
            delay={0.1}
            inView={inView}
          />
          <SkillCategory
            title="Frontend Development"
            skills={skillsData.frontend}
            delay={0.2}
            inView={inView}
          />
          <SkillCategory
            title="Backend & APIs"
            skills={skillsData.backend}
            delay={0.3}
            inView={inView}
          />
          <SkillCategory
            title="Databases & Storage"
            skills={skillsData.databases}
            delay={0.4}
            inView={inView}
          />
          <SkillCategory
            title="Cloud & DevOps"
            skills={skillsData.cloud}
            delay={0.5}
            inView={inView}
          />
          <SkillCategory
            title="Tools & QA"
            skills={skillsData.tools}
            delay={0.6}
            inView={inView}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
