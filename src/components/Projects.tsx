
import { motion } from "framer-motion";

export function Projects() {
  const projectData = [
    {
      title: "Web-Builder",
      description:
        "A full-stack website builder enabling users to create and customize websites effortlessly.",
      features: [
        "In-browser code execution using WebContainer for live previews",
        "Google Generative API integration for AI-assisted content generation",
        "Responsive UI with TailwindCSS for a seamless user experience",
      ],
      tech: [
        "ReactJs",
        "NodeJs",
        "TypeScript",
        "WebContainer",
        "TailwindCSS",
        "Google Generative API Key",
      ],
      github: "https://github.com/Lakshya0304/WebBuilder",
      live: null,
    },
    {
      title: "Discuss Application",
      description:
        "A full-stack discussion platform where users can create posts and discuss topics.",
      features: [
        "User authentication with GitHub OAuth",
        "Complete create, edit, and delete functionality implemented",
        "Minimalist and responsive UI",
      ],
      tech: [
        "NextJs",
        "NextAuth",
        "GitHub-OAuth",
        "Prisma SQLite",
        "TailwindCSS",
        "Zod",
        "ShadCN",
      ],
      github: "https://github.com/Lakshya0304/discuss-app",
      live: "https://discuss-app-alpha.vercel.app/",
    },
    {
      title: "Blogging Website",
      description:
        "A full-stack blogging website with authentication and database-driven content.",
      features: [
        "JWT-based user authentication",
        "Rich text editor for writing blogs",
        "Minimalist UI with a responsive design",
      ],
      tech: [
        "ReactJS",
        "Hono",
        "TypeScript",
        "Postgres",
        "TailwindCSS",
        "Authentication",
        "JWT",
        "Zod",
      ],
      github: "https://github.com/Lakshya0304/BlogHub",
      live: "https://blog-hub-sable.vercel.app/signup",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 inline-block gradient-border-bottom pb-2">
            Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one taught me something new
            and helped me grow as a developer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card bg-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">Tech Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-portfolio-purple hover:text-portfolio-dark-purple text-sm font-medium"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-portfolio-purple hover:text-portfolio-dark-purple text-sm font-medium"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z"/>
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
