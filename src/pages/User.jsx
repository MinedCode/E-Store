import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import DeleteAccountModal from "../components/DeleteAccountModal";

const UserComponent = styled.body`
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;;
    
    >div{
        background-color: #1F2937;
        height: auto;
        width: 400px;
        border-radius: 10px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        gap: 30px;

        h2{
            margin-bottom: 20px;
        }

        .buttonForm{
            all: unset;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;

            font-size: larger;
            color: white;
        }

        #newAccount{
            background-color: #16a34a;
        }

        #newAccount:hover{
            cursor: pointer;
            color: rgb(218, 218, 218);
            background-color: #15863f;
        }

        #deleteAccount{
            background-color:  #dc2626;
        }

        #deleteAccount:hover{
            cursor: pointer;
            color: rgb(218, 218, 218);
            background-color: #911c1c;
        }
    }
`;

const User = () =>{
    const [user, setUser] = useState({});
    const [openModal, setOpenModal] = useState(false);
    const navigate = useNavigate();
    
    const getUser = async () =>{
        const dataUser = sessionStorage.getItem("dataUser");
        setUser(JSON.parse(dataUser));
    }
    
    const dropUser = async () =>{
        try {
            await fetch(`http://localhost:3000/usuarios/${user.id}`,{
                method: "DELETE",
            });
            alert("Conta Deletada");
            alert("Sessão Expirada");
            navigate("/login");
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() =>{
        getUser();
    },[]);

    return(
        <UserComponent>
            <div>
                <h1>Dados do usuário</h1>

                <h3>Nome: {user.name}</h3>
                <h3>Idade: {user.age} anos</h3>
                <h3 htmlFor="email">Email: {user.email}</h3>
                <h3>Senha: ********</h3>
                    
                <Link className="buttonForm" id="newAccount" to="/registers" target="_blank">Cadastrar novo usuário</Link>
                <Link className="buttonForm" id="deleteAccount" onClick={() => setOpenModal(true)}>Deletar esta conta</Link>
                {openModal && (
                    <DeleteAccountModal
                        onConfirm={dropUser}
                        onCancel={() => setOpenModal(false)}
                    />
                )}
            </div>
        </UserComponent>
    );
}

export default User;