
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
 
  return (
    <footer className=" bg-black text-white text-center " >
    
      <div className=" flex p-3 justify-end gap-6">
        <a to={"https://www.facebook.com/profile.php?id=100030535123397"} target="_blank">
          <FaFacebookF />
        </a>
        <a to={"https://www.youtube.com/@CodeWithZeeshu"} target="_blank">
          <FaYoutube />
        </a>
        <a to={"https://www.youtube.com/@CodeWithZeeshu"} target="_blank">
          
        </a>
        <a to={"https://www.instagram.com/z_4_zeeshuuu/"} target="_blank">
          <RiInstagramFill />
        </a>
      </div>
      <div>&copy; All Rights Reserved By job  melagi .</div>
    </footer>
  );
};

export default Footer;
