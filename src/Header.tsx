import { Link } from 'react-router-dom';

import './Header.css';

interface HeaderProps {
    title: string;
}

const Header = ({ title }: HeaderProps) => {
    return (
        <>
          <header>
            <h1 id='aaaa'>{title}</h1>
            <Link to="/">
              <button>スレッド一覧</button>
            </Link>
            <Link to="/create-threads">
              <button>Create New Thread</button>
            </Link>
          </header>
        </>
    )
}

export default Header;