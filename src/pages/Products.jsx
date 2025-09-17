

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import DeleteModal from "../components/DeleteModal";
import axios from 'axios'; // 1. Importar axios

const ProductsComponent = styled.div`
    /* Seu CSS continua o mesmo aqui... */
`;

const Products = () => {
    const [produtos, setProdutos] = useState([]);
    const [produtoSelecionado, setProdutoSelecionado] = useState(null);
    const [mostrarModal, setMostrarModal] = useState(false);


    async function buscarDados() {
        try {
            const response = await axios.get('http://localhost:3000/produtos');
            setProdutos(response.data);
        } catch (error) {
            console.error("Erro ao buscar dados dos produtos:", error);
        }
    }

    useEffect(() => {
        buscarDados();
    }, []);

    const abrirModal = (produto) => {
        setProdutoSelecionado(produto);
        setMostrarModal(true);
    };

    const fecharModal = () => {
        setProdutoSelecionado(null);
        setMostrarModal(false);
    };

    // 3. Função de exclusão 
    const confirmarExclusao = async () => {
        try {
            await axios.delete(`http://localhost:3000/produtos/${produtoSelecionado.id}`);
            setProdutos((produtosAtuais) => produtosAtuais.filter((p) => p.id !== produtoSelecionado.id));
            fecharModal();
        } catch (error) {
            console.error("Erro ao excluir produto:", error);
        }
    };

    return (
        <ProductsComponent>
            <div>
                <h1>Produtos</h1>
                <p>Todos os produtos</p>
            </div>

            <div id="container">
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
                    productName={produtoSelecionado.name} 
                    onConfirm={confirmarExclusao}
                    onCancel={fecharModal}
                />
            )}
        </ProductsComponent>
    );
};

export default Products;