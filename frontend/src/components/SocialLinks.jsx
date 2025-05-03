import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const socialLinks = [
  {
    id: 1,
    url: "https://www.facebook.com",
    icon: <FaFacebook className="size-4 duration-200 text-gray-100 " />,
  },
  {
    id: 2,
    url: "https://x.com",
    icon: <FaTwitter className="size-4 duration-200 text-gray-100" />,
  },
  {
    id: 3,
    url: "https://youtube.com",
    icon: <FaYoutube className="size-4 duration-200 text-gray-100 " />,
  },
  {
    id: 4,
    url: "https://www.instagram.com",
    icon: <FaInstagram className="size-4 duration-200 text-gray-100 " />,
  },
];

const SocialLinks = () => {
  return (
    <ul className="flex flex-row space-x-4">
      {socialLinks.map((link) => {
        const { id, url, icon } = link;
        return (
          <li key={id}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default SocialLinks;
