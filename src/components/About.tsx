import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-4 gradient-border-bottom pb-2">About Me</h2>
          
          <motion.div 
            className="mt-10 bg-white p-8 rounded-xl shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-700 leading-relaxed mb-6">
              I'm a Full-Stack Developer with a strong foundation in high-performance web applications. Skilled in Next.js, React, and TypeScript for frontend, with expertise in Node.js, Prisma, and PostgreSQL for backend.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              I'm enthusiastic about improving performance, security, and accessibility in modern web applications. My approach combines technical expertise with a user-centered design philosophy.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              When I'm not coding, I enjoy conducting research in computer vision and machine learning, having contributed to academic research in potato plant disease detection using CNNs.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
