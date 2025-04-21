
import { useState } from "react";
import { motion } from "framer-motion";
import Resume from "../assets/Resume.pdf"

export function ResumeViewer() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-4 inline-block gradient-border-bottom pb-2">
            My Resume
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            View my full resume or download it for your reference.
          </p>
        </motion.div>
        
        <div className="flex flex-col items-center justify-center">
          <motion.div 
            className={`bg-white p-4 rounded-lg shadow-md max-w-2xl mx-auto overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[800px]' : 'max-h-[400px]'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="/src/assets/resume.png" 
              alt="Lakshya Khandelwal's Resume" 
              className="w-full h-auto rounded shadow-sm"
            />
          </motion.div>
          
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <motion.button
              className="px-4 py-2 bg-portfolio-purple text-white rounded-md hover:bg-portfolio-dark-purple transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Show Less' : 'Show More'}
            </motion.button>
            
            <motion.a
              href={Resume} 
              download
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
              Download Resume
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
