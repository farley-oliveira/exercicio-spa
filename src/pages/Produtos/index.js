import Produto from '../../components/Produto';
import imgoleosapo from '../../img/oleo-de-sapo-1.webp';
import imgpeixeletrico from '../../img/banha-peixe-eletrico.jpg';
import imgpeixeboi from '../../img/banha-peixe-boi.jpg';
import imgpomada from '../../img/pomada-japonesa.jpg';
import imgoleocobra from '../../img/oleo-de-cobra.jpg';
import imgavestruz from '../../img/banha-avestruz.jpg';
import './styles.css';

const ListaProdutos = () => {
    return(
        <main className='main-produtos'>
            <Produto nome="Óleo de Sapo" imgproduto={imgoleosapo} />
            <Produto nome='Legítima Banha do Peixe Elétrico' imgproduto={imgpeixeletrico} />
            <Produto nome='Banha do Peixe Boi da Amazônia' imgproduto={imgpeixeboi} />
            <Produto nome='Pomada Japonesa' imgproduto={imgpomada} />
            <Produto nome='Óleo de Cobra Coral Verdadeira' imgproduto={imgoleocobra} />
            <Produto nome='Banha de Avestruz Africano' imgproduto={imgavestruz} />
        </main>
    );
}

export default ListaProdutos;