import {Link} from 'react-router-dom';
import imagem from '../../img/oleo-de-sapo-1.webp';
import './styles.css';

const Home = () => {
    return(
        <main className='main-home'>
            <img alt='Imagem' src={imagem} />
            <div>
                <h1>As Maravilhas do Óleo de Sapo</h1>
                <p>Sérum rejuvenescedor facial composto por 3 ativos (essência de sapo, caldo de pepino e sudorese de leitão) que auxiliam na prevenção e restauração da beleza de sua pele.</p>
                <Link to='/produtos'><button>Confira nossos produtos!</button></Link>
            </div>
        </main>
    );
}

export default Home;