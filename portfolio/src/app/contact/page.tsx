import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';

function Contact() {
    return (
        <div className="flex flex-col items-center justify-center gap-24 mt-8">
            <h1 className="text-xl font-semibold">You Can Contact with This Links:</h1>
            <div className="flex w-full justify-evenly items-baseline">
                <a href="https://www.linkedin.com/in/your-profile" className="text-white text-4xl transition-colors duration-300 hover:text-blue-500" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={40} />
                </a>
                <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-white text-4xl transition-colors duration-300 hover:text-gray-700">
                    <FaGithub size={40} />
                </a>

                {/* Twitter Icon */}
                <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-white text-4xl transition-colors duration-300 hover:text-blue-400">
                    <FaTwitter size={40} />
                </a>

                {/* Facebook Icon */}
                <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-white text-4xl transition-colors duration-300 hover:text-blue-600">
                    <FaFacebook size={40} />
                </a>
            </div>
        </div>
    )
}

export default Contact;
