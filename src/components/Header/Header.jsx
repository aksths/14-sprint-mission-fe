import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo/panda_logo.png';
import './Header.css';

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? '#3692FF' : '',
  };
}

function Header() {
  return (
    <header>
        <div className='headerWrap'>
            <div className='headerLeft'>
                <h1>
                    <Link to="/">
                        <img src={logo} alt="판다마켓 로고"/>
                        <span>판다마켓</span>               
                    </Link>
                </h1>
                <ul>
                    <li>
                        <NavLink to="/">자유게시판</NavLink>
                    </li>
                    <li>
                        <NavLink style={getLinkStyle} to="/items">중고마켓</NavLink>
                    </li>
                </ul>
            </div>
            <Link to="/">로그인</Link>
        </div>
    </header>
  );
}

export default Header;