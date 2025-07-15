import styled from "styled-components";
import { Link } from "react-router-dom";
import produtosImage from "../assets/dashboardImages/produtos.png";
import vendasImage from "../assets/dashboardImages/vendas.png";
import estoqueImage from "../assets/dashboardImages/estoque.png";
import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import DeleteModal from "../components/DeleteModal";

const DashboardComponent = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  gap: 25px;

  & #containerTop {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;

    & .dados {
      background-color: #1f2937;
      width: 340px;
      height: 65px;
      border-radius: 10px;
      padding: 0 10px;
      gap: 10px;

      display: flex;
      justify-content: start;
      align-items: center;

      & h2 {
        font-size: large;
      }
    }
  }

  & #containerBottom {
    background-color: #1f2937;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
    border-radius: 10px;

    & #cabecalho {
      padding: 30px;
      padding-bottom: 0;
      display: flex;
      justify-content: space-between;
      height: 10%;

      & #addProduto {
        all: unset;
        height: 30px;
        width: 150px;
        background-color: #3b82f6;
        border-radius: 10px;

        display: flex;
        justify-content: center;
        align-items: center;
      }

      & #addProduto:hover {
        cursor: pointer;
        color: #c7c7c7;
        background-color: #2e5fad;
      }
    }

    & #produtos {
      display: grid;
      grid-template-columns: 260px 260px 260px 260px;
      flex-wrap: wrap;
      height: 300px;
      align-items: center;
      justify-content: space-around;
      border-top: 1px solid #c7c7c7;
      border-bottom: 1px solid #c7c7c7;

      & .produto {
        height: 250px;
        width: 260px;
        border-radius: 10px;
        border: 1px solid #c7c7c7;
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
          }
        }
      }

      & .produto:hover {
        cursor: pointer;
        transition: 200ms;
        height: 255px;
        width: 265px;

        & h1,
        & p {
          font-size: 110%;
        }
      }
    }

    & #pageProdutoContainer {
      display: flex;
      align-items: center;
      justify-content: end;
      padding: 30px;
      padding-top: 0px;

      & #pageProdutos {
        all: unset;
        height: 30px;
        width: 200px;
        background-color: #3b82f6;
        border-radius: 10px;

        display: flex;
        justify-content: center;
        align-items: center;
      }

      & #pageProdutos:hover {
        cursor: pointer;
        color: #c7c7c7;
        background-color: #2e5fad;
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
    const request = await fetch(`https://6866a33789803950dbb37048.mockapi.io/apiv1/produtos`);
    const dados = await request.json();
    setTotalProdutos(dados.length);

    if (dados.length >= 4) {
      for (let i = 1; i <= 4; i++) {
        setProdutos((newProduto) => [...newProduto, dados[dados.length - i]]);
      }
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
      await fetch(`https://6866a33789803950dbb37048.mockapi.io/apiv1/produtos/${produtoSelecionado.id}`, {
        method: "DELETE",
      });
      setProdutos((produtos) => produtos.filter((p) => p.id !== produtoSelecionado.id));
      setTotalProdutos((prev) => prev - 1);
      fecharModal();
    } catch (error) {
      console.error("Erro ao excluir produto:", error);
    }
  };

  return (
    <DashboardComponent id="outlet">
      <h1>Dashboard</h1>

      <div id="containerTop">
        <div className="dados">
          <img src={produtosImage} alt="" />
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
          <h4>Produtos adicionados recentemente</h4>
          <Link id="addProduto" to="/productadd">
            + Novo Produto
          </Link>
        </div>

        <div id="produtos">
          {produtos.map((produto) => (
            <div className="produto" key={produto.id}>
              <img src={produto.imagem} alt={produto.nome} />
              <h1>{produto.nome}</h1>
              <p>R$ {produto.preco}</p>
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

        <div id="pageProdutoContainer">
          <Link id="pageProdutos" to="/products">
            Todos os Produtos
          </Link>
        </div>
      </div>

      {mostrarModal && (
        <DeleteModal
          productName={produtoSelecionado.nome}
          onConfirm={confirmarExclusao}
          onCancel={fecharModal}
        />
      )}
    </DashboardComponent>
  );
};

export default Home;
