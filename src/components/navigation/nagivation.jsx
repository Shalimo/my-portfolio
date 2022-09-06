import { Link } from 'react-scroll';
import "./navigation.css";

const Navigation = () => {
  return (
    <div className="navLink">
    <a className='link'>
        <Link
            activeClass="active"
            to="Introduction"
            spy={true}
            smooth={true}
            offset={-130}
            duration={500}
        >
            Introduction
        </Link>
    </a>
    <a className='link'>
            <Link
            activeClass="active"
            to="Projects"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
        >
            Projects
      </Link>
    </a>
    <a className='link'>
        <Link
            activeClass="active"
            to="Contacts"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
        >
            Contacts
        </Link>
    </a>
    </div>
  );
}

export default Navigation;