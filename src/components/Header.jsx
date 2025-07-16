import styled from "styled-components";
import accountPhoto from "../assets/extras/accountPhoto.png";
import MenuIcon from '@mui/icons-material/Menu';

const HeaderComponent = styled.div`
    background-color: #1F2937;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    border-bottom: 1px solid #d9d9d9;
    color: #3B82F6;
    font-size: small;
    position: relative;
    z-index: 1100;

    & h1 {
        width: 200px;
        padding: 20px;
        border-right: 1px solid #d9d9d9;
        flex-shrink: 0;
        flex-grow: 0;
        color: #3B82F6;
    }

    & #container {
        width: 80%;
        flex-grow: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 20px;

        & input {
            all: unset;
            background-color: #39414C;
            height: 35px;
            width: 25%;
            margin-left: 20px;
            padding: 0 10px;
            border-radius: 10px;
            color: white;
        }

        & #account {
            display: flex;
            align-items: center;
            gap: 10px;
            color: white;
            font-size: smaller;
            gap: 10px;

            & img {
                width: 45px;
                border-radius: 100%;
            }
        }
    }

    .hamburger-icon {
        display: none;
        color: white;
        font-size: 30px;
        cursor: pointer;
        margin-left: 20px;
        order: -1;
    }

    @media (max-width: 768px) {
        flex-direction: column; 
        align-items: center; 
        padding: 10px 20px;
        
        & > div:first-of-type {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            margin-bottom: 10px;
        }

        & h1 {
            width: auto;
            padding: 0;
            border-right: none;
            font-size: large;
            text-align: center;
            margin: 0;
            flex-grow: 1;
            color: #3B82F6;
        }

        & #container {
            display: flex;
            flex-direction: column;
            width: 100%;
            padding-right: 0;
            margin-top: 0;
            order: 2;
            align-items: center;

            & input {
                width: 100%;
                margin-left: 0;
                padding: 10px;
            }

            & #account {
                display: none;
            }
        }

        .hamburger-icon {
            display: block;
            position: static;
            transform: none;
            margin-left: 0;
            order: -1;
        }
    }

    @media (max-width: 480px) {
        & h1 {
            font-size: medium;
        }

        & #container {
            & input {
                width: 100%;
            }
        }
    }
`;

const Header = ({ toggleMenu }) => {
    return (
        <HeaderComponent>
            <div>
                <MenuIcon className="hamburger-icon" onClick={toggleMenu} />
                <h1>E-Store Admin</h1>
                <div style={{ width: '30px' }}></div>
            </div>

            <div id="container">
                <input type="text" placeholder="Buscar..." />
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