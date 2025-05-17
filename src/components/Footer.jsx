import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Fatbardh Emini</p>
      <a
        href="https://github.com/fatbardheminii"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Fatbardh Emini's GitHub profile"
      >
        <FaGithub className="github-icon" />
      </a>
    </footer>
  );
};

export default Footer;
