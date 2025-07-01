import styled from "styled-components";
import { Link } from "react-router-dom";
import produtosImage from "../assets/dashboardImages/produtos.png";
import vendasImage from "../assets/dashboardImages/vendas.png";
import estoqueImage from "../assets/dashboardImages/estoque.png"

const DashboardComponent = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 20px;
    gap: 25px;

    & #containerTop{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 10px;
        
        & .dados{
            background-color: #1F2937;
            width: 340px;
            height: 65px;
            border-radius: 10px;
            padding: 0 10px;
            gap: 10px;

            display: flex;
            justify-content: start;
            align-items: center;

            & h2{
                font-size: large;
            }
        }
    }

    & #containerBottom{
        background-color: #1F2937;
        height: 65vh;
        border-radius: 10px;
        
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        & div{
            display: flex;
            justify-content: space-between;
            padding: 30px;
            padding-bottom: 0;
            height: 10%;

            & #addProduto{
                all: unset;
                height: 30px;
                width: 150px;
                background-color: #3B82F6;
                border-radius: 10px;

                display: flex;
                justify-content: center;
                align-items: center;
            }

            & #addProduto:hover{
                cursor: pointer;
                color: #c7c7c7;
                background-color: #2e5fad;
            }
        }

        & #produtos{
            height: 70%;
            border-top: 1px solid #c7c7c7;
            border-bottom: 1px solid #c7c7c7;
        }

        & #pageProdutoContainer{
            all: unset;

            height: 14%;
            padding-right: 30px;
            display: flex;
            justify-content: end;
            align-items: center;
            
            & #pageProdutos{
                all: unset;
                height: 30px;
                width: 200px;
                background-color: #3B82F6;
                border-radius: 10px;
    
                display: flex;
                justify-content: center;
                align-items: center;
            }

            & #pageProdutos:hover{
                cursor: pointer;
                color: #c7c7c7;
                background-color: #2e5fad;
            }
        }

    }

`;

const Home = () =>{

    return(
        <DashboardComponent id="outlet">
                <h1>Dashboard</h1>

                <div id="containerTop">
                    <div className="dados">
                        <img src={produtosImage} alt="" />
                        <p>Total de Produtos:</p>
                        <h2>0</h2>
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
                    <div>
                        <h4>Produtos</h4>
                        <Link id="addProduto" to="/productadd">+ Novo Produto</Link>
                    </div>

                    <div id="produtos">
                        
                    </div>

                    <div id="pageProdutoContainer">
                        <Link id="pageProdutos" to="/products">Todos os Produtos</Link>
                    </div>
                    
                </div>
        </DashboardComponent>
    );
};

export default Home;