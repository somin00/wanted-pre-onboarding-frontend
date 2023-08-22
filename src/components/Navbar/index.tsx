import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './styles';
function Navbar() {
  return (
    <Header>
      <nav>
        <ul>
          <li>
            <Link to="/signup">회원가입</Link>
          </li>
          <li>
            <Link to="/signin">로그인</Link>
          </li>
          <li>
            <Link to="/todo">투두리스트</Link>
          </li>
        </ul>
      </nav>
    </Header>
  );
}

export default Navbar;
