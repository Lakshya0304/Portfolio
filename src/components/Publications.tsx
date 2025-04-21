
import { motion } from "framer-motion";
import ResearchPaper from "../assets/Research paper.pdf"

export function Publications() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 inline-block gradient-border-bottom pb-2">
            Publications
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Research and academic contributions in technology and computer science.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Potato Plant Disease Detection Using CNN
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              International Research Journal of Science, Engineering and Technology, 2023
            </p>
            <p className="text-gray-600 mb-4">
              Lakshaya Khandelwal, Rhythm Sharma, Lovenesh Giri Goswami, Mehul Sagotia and Charu Kavadia
            </p>
            <div className="prose max-w-none text-gray-700">
              <p>
                Our research employs supervised machine learning achieving 96% accuracy for "Potato Plant Disease Detection". Leveraging Convolutional Neural Networks (CNNs) and libraries like TensorFlow, OpenCV, and K-Means Clustering, we preprocess and classify images into early blight, healthy, and late blight states.
              </p>
              <p className="mt-4">
                Our user-friendly flutter application interface enables streamlined diagnosis, with continuous enhancements to accuracy and usability.
              </p>
            </div>
            <div className="mt-6 flex items-center space-x-4">
              <a 
                href={ResearchPaper} 
                download
                className="text-portfolio-purple hover:text-portfolio-dark-purple inline-flex items-center text-sm font-medium"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                </svg>
                View Publication
              </a>
            </div>
          </div>
          <div className="bg-gray-50 px-6 py-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Achievements:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-portfolio-purple shrink-0 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Presented at ICMART-2024
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-portfolio-purple shrink-0 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Achieved 96% accuracy for disease detection
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-portfolio-purple shrink-0 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Developed user-friendly Flutter application interface
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
