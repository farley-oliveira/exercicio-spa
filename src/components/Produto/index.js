import './styles.css';

const Produto = ({nome,imgproduto}) => {
    return(
        <div className='container'>
            <img src={imgproduto} alt="Produto"></img>
            <p>{nome}</p>
        </div>
    );
}

export default Produto;