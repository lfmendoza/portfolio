import { useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  FaDownload,
  FaEye,
  FaGraduationCap,
  FaBriefcase,
  FaAward,
} from "react-icons/fa";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import { experience, education, certifications, personal } from "../../data";

const Resume = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeTab, setActiveTab] = useState("experience");
  const Div = motion.div;

  const TabButton = ({ id, label, icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
        activeTab === id
          ? "bg-blue-600 text-white"
          : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );

  const TimelineItem = ({ item, index }) => (
    <Div
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-8"
    >
      <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
      <div className="absolute left-2 top-4 w-0.5 h-full bg-gray-300 dark:bg-gray-600"></div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            {item.title || item.degree}
          </h3>
          <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
            {item.period}
          </span>
        </div>

        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
          {item.company || item.school}
        </p>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {item.description}
        </p>

        {item.achievements && (
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
            {item.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
        )}

        {item.courses && (
          <div className="flex flex-wrap gap-2 mt-4">
            {item.courses.map((course, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm"
              >
                {course}
              </span>
            ))}
          </div>
        )}
      </div>
    </Div>
  );

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mi Currículum
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Mi trayectoria profesional y académica en el mundo del desarrollo
            web. Cada experiencia ha contribuido a forjar mis habilidades
            actuales.
          </p>

          <div className="flex justify-center space-x-4">
            <Button href={personal.resumeUrl} target="_blank">
              <FaDownload className="mr-2" />
              Descargar PDF
            </Button>
            <Button variant="outline">
              <FaEye className="mr-2" />
              Ver Online
            </Button>
          </div>
        </Div>

        <Div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex space-x-2 bg-white dark:bg-gray-900 p-1 rounded-lg shadow-lg">
            <TabButton
              id="experience"
              label="Experiencia"
              icon={<FaBriefcase />}
            />
            <TabButton
              id="education"
              label="Educación"
              icon={<FaGraduationCap />}
            />
            <TabButton
              id="certifications"
              label="Certificaciones"
              icon={<FaAward />}
            />
          </div>
        </Div>

        <div className="max-w-4xl mx-auto">
          {activeTab === "experience" && (
            <div>
              {experience.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          )}

          {activeTab === "education" && (
            <div>
              {education.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          )}

          {activeTab === "certifications" && (
            <Div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {certifications.map((cert, index) => (
                <Card key={index} className="p-6" delay={index * 0.1}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <FaAward className="text-2xl text-yellow-500" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                        {cert.name}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                        Fecha: {cert.date}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">
                        ID: {cert.credential}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </Div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume;
