import styled from "styled-components";
import alerta from "../assets/extras/alerta.png"
import { Link } from "react-router-dom";

const Page404 = styled.div`
    display: flex;
    justify-content: center;
    color: white;
    
    & div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 100px;
        gap: 10px;
        
        & #botaoDashboard{
            all: unset;
            background-color: #0046b8;
            font-size: 20px;
            font-weight: 600;
            
            margin-top: 20px;
            height: 45px;
            width: 350px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 15px;
        }

        & #botaoDashboard:hover{
            cursor: pointer;
            background-color: #001d4d;
            color: #c7c7c7;
        }
    }
`;

const NotFound = () =>{
    return(
        <Page404>
            <div>
                <img src={alerta} alt="" />
                <h1>Página não encontrada!</h1>
                <p>A página que voce procura não existe</p>
                <Link id="botaoDashboard" to="/">Volte ao início</Link>
            </div>
        </Page404>
    );
}

export default NotFound;