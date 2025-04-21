
import { motion } from "framer-motion";

export function Education() {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Geetanjali Institute of Technical Studies",
      period: "2023 - Present",
      details: "Current CGPA - 9.21",
      additional: "Relevant coursework in Computer Science"
    },
    {
      degree: "Secondary School",
      institution: "St. Matthew's Mission School",
      period: "2020 - 2022",
      details: "Percentage - 82%",
      additional: null
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 inline-block gradient-border-bottom pb-2">
            Education
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My academic journey and qualifications.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              className="relative pl-8 pb-8 mb-6 last:mb-0 last:pb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {index !== education.length - 1 && (
                <div className="absolute left-3 top-3 bottom-0 w-0.5 bg-gray-200"></div>
              )}
              
              <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-portfolio-purple flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{item.degree}</h3>
                  <span className="text-sm font-medium text-portfolio-purple px-2 py-1 bg-purple-50 rounded-md">
                    {item.period}
                  </span>
                </div>
                <p className="text-gray-700 mb-2">{item.institution}</p>
                <p className="text-gray-600 font-medium">{item.details}</p>
                {item.additional && (
                  <p className="text-gray-600 mt-2 text-sm">{item.additional}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
