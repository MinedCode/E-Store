import styled from "styled-components";
import { Link } from "react-router-dom";
import produtosImage from "../assets/dashboardImages/produtos.png";
import vendasImage from "../assets/dashboardImages/vendas.png";
import estoqueImage from "../assets/dashboardImages/estoque.png";
import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import DeleteProductModal from "../components/DeleteProductModal";

const DashboardComponent = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 20px;
    gap: 25px;

    .tituloDoDashboard {
        text-transform: uppercase;
    }

    #containerTop {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 10px;
        
        .dados {
            background-color: #1F2937;
            flex: 1;
            min-width: 280px;
            height: 65px;
            border-radius: 10px;
            padding: 0 10px;
            gap: 10px;
            display: flex;
            justify-content: start;
            align-items: center;

            h2 {
                font-size: large;
            }
        }
    }

    #containerBottom {
        background-color: #1F2937;
        height: auto;
        display: flex;
        flex-direction: column;
        gap: 40px;
        border-radius: 10px;
        justify-content: space-between;
        margin-bottom: 30px;
        
        #cabecalho {
            padding: 30px;
            padding-bottom: 0;
            display: flex;
            justify-content: space-between;           
            height: 10%;

            h2 {
                text-transform: uppercase;
            }

            #addProduto {
                all: unset;
                height: 30px;
                width: 150px;
                background-color: #3B82F6;
                border-radius: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            #addProduto:hover {
                cursor: pointer;
                color: #c7c7c7;
                background-color: #2e5fad;
            }
        }

        #produtos {
            width: 100%;
            height: 50vh;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-around;
            border-top: 1px solid #c7c7c7;
            border-bottom: 1px solid #c7c7c7;

            .produto {
                height: 90%;
                width: 20%;
                border-radius: 10px;
                border:1px solid #c7c7c7;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                padding-bottom: 10px;
                margin: 10px;
                transition: 200ms;

                img {
                    width: 100%;
                    height: 250px;
                    object-fit: cover;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                }

                h1 {
                    padding-left: 5px;
                    transition: 200ms;
                    font-size: 100%;
                }

                p {
                    padding-left: 5px;
                    transition: 200ms;
                    font-size: 100%;
                    color: #c7c7c7;
                }

                .botoes {
                    padding: 0 5px;
                    display: flex;
                    justify-content: space-between;
                    
                    .editar {
                        background-color: #39414C;
                        width: 65%;
                        height: 30px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 10px;
                        color: white;
                        transition: 200ms;
                    }

                    .editar:hover {
                        background-color: #4a525e;
                        transition: 200ms;
                    }

                    .remover {
                        background-color: #973e3e;
                        width: 30%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: white;
                        border-radius: 10px;
                        transition: 200ms;
                    }

                    .remover:hover {
                        background-color: #be5252;
                        transition: 200ms;
                    }
                }

                @media screen and (max-width: 1020px) {
                    p{
                        margin-bottom: 10px;
                        display: flex;
                        justify-content: center;
                    }
                }
            }

            .produto:hover {
                cursor: pointer;
                transition: 200ms;
                transform: scale(1.05);
                z-index: 1;

                h1 {
                    transition: 200ms;
                    font-size: 110%;
                }

                p {
                    transition: 200ms;
                    font-size: 110%;
                    color: #fff;
                }
            }
        }

        #pageProdutoContainer {
            display: flex;
            align-items: center;
            justify-content: end;
            padding: 30px;
            padding-top: 0px;
            
            #pageProdutos {
                all: unset;
                height: 30px;
                width: 200px;
                background-color: #3B82F6;
                border-radius: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            #pageProdutos:hover {
                cursor: pointer;
                color: #c7c7c7;
                background-color: #2e5fad;
            }
        }
    }

    @media (max-width: 1200px) {
        #produtos .produto {
            width: 28%;
        }
    }

    @media (max-width: 1024px) {
        #containerTop {
            justify-content: center;
        }
        #produtos .produto {
            width: 40%;
        }
    }

    @media (max-width: 768px) {
        padding-right: 0;
        padding-left: 0;

        h1 {
            text-align: center;
            padding: 15px 0;
        }

        #containerTop {
            flex-direction: column;
            align-items: center;
        }

        #containerTop .dados {
            width: 100% !important;
            margin: 0 auto !important;
            justify-content: center;
            height: 80px;
        }

        #containerBottom {
            padding: 15px 10px;
        }

        #cabecalho {
            flex-direction: column;
            align-items: center;
            padding: 15px 0;
            gap: 15px;
        }

        #cabecalho h2 {
            text-align: center;
        }

        #addProduto {
            width: 90% !important;
            margin: 0 auto;
        }

        #produtos {
            flex-direction: column !important;
            align-items: center !important;
            justify-content: flex-start !important;
            height: auto !important;
            border-top: none !important;
            border-bottom: none !important;
        }

        #produtos .produto {
            width: 90% !important;
            height: auto !important;
            margin: 10px 0 !important;

            img {
                height: 150px;
            }
        }
        
        #pageProdutoContainer {
            justify-content: center;
            padding: 15px 0;
        }

        #pageProdutos {
            width: 90% !important;
            margin: 0 auto;
        }
    }

    @media (max-width: 480px) {
        h1 {
            font-size: large;
            padding-left: 0;
        }
        #containerTop .dados {
            padding: 10px;
            font-size: small;
            h2 {
                font-size: medium;
            }
            img {
                width: 35px;
            }
        }
        #produtos .produto {
            h1 {
                font-size: 90%;
            }
            p {
                font-size: 90%;
            }
            img {
                height: 120px;
            }
        }
        .botoes {
            flex-direction: column;
            gap: 10px;
            align-items: center;
            
            .editar, .remover {
                width: 80% !important;
                padding: 5px;
            }
        }
        #pageProdutos {
            font-size: small;
        }
        #addProduto {
            font-size: small;
        }
    }

    @media screen and (max-width: 1020px) {
        & #containerBottom{
            margin-bottom: 20px;
            
            & #pageProdutoContainer{
                
                padding: 0;
            }
        }
    }
`;

const Home = () => {
    const [produtos, setProdutos] = useState([]);
    const [totalProdutos, setTotalProdutos] = useState(0);
    const [produtoSelecionado, setProdutoSelecionado] = useState(null);
    const [mostrarModal, setMostrarModal] = useState(false);

    async function buscarDados() {
        const request = await fetch(`http://localhost:3000/produtos`);
        const dados = await request.json();
        setTotalProdutos(dados.length);

        if (dados.length >= 4) {
            setProdutos(dados.slice(-4));
        } else {
            setProdutos(dados);
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

    const confirmarExclusao = async () => {
        try {
            await fetch(`http://localhost:3000/produtos/${produtoSelecionado.id}`, {
                method: "DELETE"
            });
            setProdutos((produtos) => produtos.filter((p) => p.id !== produtoSelecionado.id));
            setTotalProdutos((prev) => prev - 1);
            fecharModal();
        } catch (error) {
            console.error("Erro ao excluir produto:", error);
        }
    };

    return (
        <DashboardComponent>
            <h1 className="tituloDoDashboard">Dashboard</h1>

            <div id="containerTop">
                <div className="dados">
                    <img src={produtosImage} alt="Dashborad image" />
                    <p>Total de Produtos:</p>
                    <h2>{totalProdutos}</h2>
                </div>
                
                <div className="dados">
                    <img src={vendasImage} alt="" />
                    <p>Vendas do mês:</p>
                    <h2>R$ 0</h2>
                </div>
                
                <div className="dados">
                    <img src={estoqueImage} alt="" />
                    <p>Estoque:</p>
                    <h2>0</h2>
                </div>
            </div>

            <div id="containerBottom">
                <div id="cabecalho">
                    <h2>Produtos adicionados recentemente</h2>
                    <Link id="addProduto" to="/productadd">+ Novo Produto</Link>
                </div>

                <div id="produtos">
                    {produtos.map(produto => (
                        <div className="produto" key={produto.id}>
                            <img src={produto.image_url} alt={produto.name} />
                            <h1>{produto.name}</h1>
                            <p>R$ {produto.price}</p>
                            <div className="botoes">
                                <Link className="editar" to={`/productedit/${produto.id}`}>Editar</Link>
                                <button className="remover" onClick={() => abrirModal(produto)}>
                                    <FaTrashAlt />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div id="pageProdutoContainer">
                    <Link id="pageProdutos" to="/products">Todos os Produtos</Link>
                </div>
            </div>

            {mostrarModal && (
                <DeleteProductModal
                    productName={produtoSelecionado.nome}
                    onConfirm={confirmarExclusao}
                    onCancel={fecharModal}
                />
            )}
        </DashboardComponent>
    );
};

export default Home;
