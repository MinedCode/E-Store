import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import DeleteModal from "../components/DeleteModal";

const ProductsComponent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    & #container{
        width: auto;
        height: 75vh;
        overflow-y: auto;
        padding: 16px;
        background-color:#1F2937;
        border-radius: 10px;

        display: grid;
        grid-template-columns: 30% 30% 30%;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 25px;


        & .produto{
            height: 300px;
            width: 100%;
            border-radius: 10px;
            border:1px solid #c7c7c7;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-bottom: 10px;
            gap: 10px;
            transition: 200ms;
        
            & img {
                width: 100%;
                height: 60%;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
            }

            & h1 {
                padding-left: 5px;
                transition: 200ms;
                font-size: 100%;
            }

            & p {
                padding-left: 5px;
                transition: 200ms;
                font-size: 100%;
                color: #c7c7c7;
            }

            & .botoes {
                padding: 0 5px;
                display: flex;
                justify-content: space-between;

                & .editar {
                    background-color: #39414c;
                    width: 65%;
                    height: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 10px;
                    color: white;
                    transition: 200ms;
                }

                & .editar:hover {
                    background-color: #4a525e;
                }

                & .remover {
                    background-color: #973e3e;
                    width: 30%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: white;
                    border-radius: 10px;
                    transition: 200ms;
                }

                & .remover:hover {
                    background-color: #be5252;
                    cursor: pointer;
                }
            }
        }
    }

    @media screen and (max-width: 1020px) {
        
        & #container{
            display: flex;
        }
    }
`;

const Products = () =>{
    const [produtos, setProdutos] = useState([]);
    const [produtoSelecionado, setProdutoSelecionado] = useState(null);
    const [mostrarModal, setMostrarModal] = useState(false);

    async function buscarDados() {
        const request = await fetch(`http://localhost:3000/produtos`);
        const dados = await request.json();

        if(dados.length > 0){
            setProdutos(dados);
        }
    }


    useEffect(() => {
        buscarDados();
    }, [])
    
    const abrirModal = (produto) => {
        setProdutoSelecionado(produto);
        setMostrarModal(true);
    };

    const fecharModal = () => {
        setProdutoSelecionado(null);
        setMostrarModal(false);
    };

    const confirmarExclusao = async () => {
        try {
            await fetch(`http://localhost:3000/produtos/${produtoSelecionado.id}`, {
                method: "DELETE",
            });
            setProdutos((produtos) => produtos.filter((p) => p.id !== produtoSelecionado.id));
            fecharModal();
            window.location.reload();
        } catch (error) {
            console.error("Erro ao excluir produto:", error);
        }
    };

    return(
        <ProductsComponent>
            <div>
                <h1>Produtos</h1>
                <p>Todos os produtos</p>
            </div>
            
            <div id="container">
                
                {produtos.map((produto) => (
                    <div className="produto" key={produto.id}>
                        <img src={produto.image_url} alt={produto.name} />
                        <h1>{produto.name}</h1>
                        <p>R$ {produto.price}</p>
                        <div className="botoes">
                            <Link className="editar" to={`/productedit/${produto.id}`}>
                                Editar
                            </Link>
                            <button className="remover" onClick={() => abrirModal(produto)}>
                                <FaTrashAlt />
                            </button>
                        </div>
                    </div>
                ))}             
            </div>
            
            {mostrarModal && (
                <DeleteModal
                    productName={produtoSelecionado.nome}
                    onConfirm={confirmarExclusao}
                    onCancel={fecharModal}
                />
            )}
        </ProductsComponent>
    );
};

export default Products;