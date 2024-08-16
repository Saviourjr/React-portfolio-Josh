import logo from "../assets/My-logo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";

 const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink=0 items-center">
<img className='mx-2 w-10' src={logo} alt="logo" />
 </div>
<div className="m-8 flex items-center justify-center gap-4 text-2xl">
    <a href="https://www.linkedin.com/in/joshua-ikulayo-8b9809265/"><FaLinkedin /></a>
   <a href="https://github.com/Saviourjr"> <FaGithub /></a>
  <a href="https://www.instagram.com/josh_xxyy">  <FaInstagram /></a>
    <a href="https://www.twitter.com/saviour_jnr10"><FaSquareXTwitter /></a>
</div>
       
        </nav>
  );
} 
export default Navbar
