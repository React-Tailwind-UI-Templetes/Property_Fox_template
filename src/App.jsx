
import './App.css';
import { FaFacebook, FaTwitter, FaLinkedIn } from 'react-icons/fa';

const App = () => {


  return (
    <footer className="bg-green-900 text-white p-4">
    <div className="container mx-auto flex flex-wrap justify-between">
      <div className="w-full md:w-1/4 mb-4 md:mb-0">
        <h3 className="text-lg font-bold mb-2">Pages</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/terms">Terms & Conditions</a></li>
          <li><a href="/features">Features</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="/legal">Legal Notice</a></li>
        </ul>
      </div>
      <div className="w-full md:w-1/4 mb-4 md:mb-0">
        <h3 className="text-lg font-bold mb-2">Contact</h3>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/career">Career</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </div>
      <div className="w-full md:w-1/4 mb-4 md:mb-0">
        <h3 className="text-lg font-bold mb-2">Stay Connected</h3>
        <div className="flex space-x-2">
          <a href="#" className="text-white"><FaFacebook /></a>
          <a href="#" className="text-white"><FaTwitter /></a>
          <a href="#" className="text-white"><FaLinkedIn /></a>
        </div>
      </div>
      <div className="w-full md:w-1/4">
        <h3 className="text-lg font-bold mb-2">Get News from Us</h3>
        <input type="email" placeholder="Email address" className="border p-2 w-full" />
      </div>
    </div>
  </footer>
  );
};

export default App;
