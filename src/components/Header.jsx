import styled from "styled-components"
import accountPhoto from "../assets/accountPhoto.png"

const HeaderComponent = styled.div`
    background-color: #1F2937;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    border-bottom: 1px solid #d9d9d9;
    
    color: #3B82F6;
    font-size: small;

    & h1{
        width: 200px;
        padding: 20px;
        border-right: 1px solid #d9d9d9;
    }

    & #container{
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        & input{
            all: unset;
            background-color: #39414C;
            height: 35px;
            width: 25%;
            padding: 0 10px;
            border-radius: 10px;

            color: white;
        }

        & #account{
            width: 200px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 10px;
            
            color: white;
            font-size: smaller;
            
            & img{
                width: 45px;
                border-radius: 100%;
            }
        }
    }
    
`;

const Header = () =>{

    return(
        <HeaderComponent>
            <h1>E-Store Admin</h1>

            <div id="container">
                <input type="text" placeholder="Buscar..."/>

                <div id="account">
                    <div>
                        <h2>ADMIN USER</h2>
                        <p>ADMIN@EMAIL</p>
                    </div>

                    <img src={accountPhoto} alt="profileImage" />
                    
                </div>
            </div>
        </HeaderComponent>
    );
};

export default Header;