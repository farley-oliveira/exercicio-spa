import {Link} from 'react-router-dom';
import './styles.css';

const Header = () => {
    return(
        <main className='main-header'>
            <h1>Produtos Folclóricos</h1>
            <ul>
                <li><Link to='/'><a>Home</a></Link></li>
                <li><Link to='/produtos'><a>Produtos</a></Link></li>
                <li><Link to='/contato'><a>Contato</a></Link></li>
            </ul>
        </main>
    );
}

export default Header;