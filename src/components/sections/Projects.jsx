import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode } from "react-icons/fa";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { projects } from "../../data/projects";
import { motion } from "framer-motion";

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const Div = motion.div;

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter(
          (project) => project.featured === (filter === "featured")
        );

  const ProjectModal = ({ project, onClose }) => (
    <Div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClose}
    >
      <Div
        className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-t-xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 rounded-full p-2 hover:bg-white"
          >
            ✕
          </button>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {project.description}
          </p>

          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Características Destacadas:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
              {project.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <Button href={project.demoUrl} target="_blank">
              <FaExternalLinkAlt className="mr-2" />
              Ver Demo
            </Button>
            <Button variant="outline" href={project.githubUrl} target="_blank">
              <FaGithub className="mr-2" />
              Código
            </Button>
          </div>
        </div>
      </Div>
    </Div>
  );

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mis Proyectos
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Una selección de proyectos que demuestran mis habilidades y pasión
            por el desarrollo web. Cada proyecto representa un desafío único y
            una oportunidad de aprendizaje.
          </p>

          <div className="flex justify-center space-x-4">
            <Button
              variant={filter === "all" ? "primary" : "secondary"}
              onClick={() => setFilter("all")}
            >
              Todos ({projects.length})
            </Button>
            <Button
              variant={filter === "featured" ? "primary" : "secondary"}
              onClick={() => setFilter("featured")}
            >
              <FaStar className="mr-2" />
              Destacados ({projects.filter((p) => p.featured).length})
            </Button>
          </div>
        </Div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full">
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      <FaStar className="inline mr-1" />
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="primary"
                      onClick={() => setSelectedProject(project)}
                    >
                      Ver Detalles
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs">
                        +{project.technologies.length - 3} más
                      </span>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                      >
                        <FaExternalLinkAlt />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800 dark:text-gray-400"
                      >
                        <FaGithub />
                      </a>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => setSelectedProject(project)}
                    >
                      <FaCode className="mr-1" />
                      Detalles
                    </Button>
                  </div>
                </div>
              </Card>
            </Div>
          ))}
        </div>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
