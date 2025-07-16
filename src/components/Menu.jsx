import styled from "styled-components";
import dashboard from "../assets/menuImages/dashboard.png";
import produtos from "../assets/menuImages/produtos.png";
import carrinho from "../assets/menuImages/carrinho.png";
import { Link } from "react-router-dom";

const MenuComponent = styled.div`
    background-color: #1F2937;
    position: fixed;
    height: 100vh;
    left: 0;
    width: 200px;
    padding: 20px;
    height: calc(100vh - 60px);
    border-right: 1px solid #d9d9d9;

    & ul{
        display: flex;
        flex-direction: column;
        gap: 15px;
        
        & .navMenu{
            padding-left: 20px;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: start;
            gap: 10px;

            color: white;
            font-size: medium;
            font-weight: 400;
        
            & img{
                width: 25px;
            }
        }

        & .navMenu:hover{
            background-color: #39414C;
            border-radius: 10px;
            transition: 300ms;
        }
    }
`;

const Menu = () =>{
    return(
        <MenuComponent>
            <ul>
                <Link className="navMenu" to="/"><img src={dashboard} alt="Dashborad image" />Dashboard</Link>
                <Link className="navMenu" to="/products"><img src={produtos} alt="produto image" />Produtos</Link>
                <Link className="navMenu"><img src={carrinho} alt="carrinho image" />Pedidos</Link>
            </ul>
        </MenuComponent>
    );
}

export default Menu;