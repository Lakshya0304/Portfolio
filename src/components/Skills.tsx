
import { motion } from "framer-motion";

export function Skills() {
  const skillCategories = [
    {
      name: "Languages",
      skills: ["C", "C++", "JavaScript", "TypeScript"]
    },
    {
      name: "Frameworks",
      skills: ["ReactJS", "NodeJS", "HonoJS", "ExpressJS", "NextJS", "TailwindCSS"]
    },
    {
      name: "Databases",
      skills: ["MongoDB", "PostgreSQL", "Prisma"]
    },
    {
      name: "Libraries",
      skills: ["Redux", "ShadCN", "Framer Motion"]
    },
    {
      name: "Others",
      skills: ["Git", "GitHub", "Docker", "AWS", "CI/CD"]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 inline-block gradient-border-bottom pb-2">
            Technical Skills
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I've worked with a range of technologies in the web development world,
            from frontend to backend, design to deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              className="bg-white rounded-lg shadow-sm p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-portfolio-purple">{category.name}</h3>
              
              <motion.div 
                className="flex flex-wrap gap-2"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="bg-gray-100 px-3 py-1.5 rounded-md text-sm text-gray-700"
                    variants={item}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: "rgb(233, 216, 253)", 
                      color: "rgb(106, 27, 154)"
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-white rounded-lg shadow-sm p-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-4">My Development Approach</h3>
          <p className="text-gray-700 mb-4">
            I believe in writing clean, maintainable code that delivers exceptional user experiences. Here's what's important to me:
          </p>
          
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-portfolio-purple mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span><strong>Performance Optimization:</strong> Creating fast, responsive applications that provide smooth user experiences.</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-portfolio-purple mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span><strong>Clean Architecture:</strong> Building scalable applications with separation of concerns.</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-portfolio-purple mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span><strong>User-Centered Design:</strong> Focusing on intuitive interfaces and accessible experiences.</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-portfolio-purple mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span><strong>Security Best Practices:</strong> Implementing robust security measures to protect data and users.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
