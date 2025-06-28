import styled from "styled-components";
import uploadImage from "../assets/extras/upload.png";
import { Link } from "react-router-dom";
import { useRef, useState} from "react";

const ProductAddComponent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    & #containerTop{
        display: flex;
        align-items: center;
        justify-content: space-between;

        & #botaoDashboard{
            all: unset;
            background-color: #39414C;
            width: 100px;
            height: 30px;

            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
        }

        & #botaoDashboard:hover{
            cursor: pointer;
            background-color: #2a2d31;
            color: #c7c7c7;
        }
    }

    & #containerBottom{
        background-color: #1F2937;
        height: 70vh;
        border-radius: 10px;
        padding: 20px;

        & form{

            & #uploadImageArea{
                background-color: #39414C;
                margin-top: 10px;
                border-radius: 10px;
                height: 200px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

            }

            & #uploadImageArea:hover{
                cursor: pointer;
            }

            & #infoProduto{
                margin-top: 10px;
                display: grid;
                justify-content: space-between;
                grid-template-columns: 49% 49%;
                
                & div{
                    display: flex;
                    flex-direction: column;
                    gap: 5px;

                    & label{
                        margin-top: 10px;
                    }

                    & .info{
                        all: unset;
                        padding-left: 10px;
                        height: 35px;
                        border-radius: 10px;
                        background-color: #39414C;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        color: #d1d1d1;
                    }
                }
                
            }



            & #desc{
                display: flex;
                flex-direction: column;
                margin-top: 10px;
            
                & textarea{
                    all: unset;
                    width: auto;
                    height: 120px;
                    margin-top: 5px;
                    padding: 2px 0 2px 5px;
                    border-radius: 10px;
                    white-space: pre-wrap;
                    word-wrap: break-word;
                    background-color: #39414C;

                    color: #d1d1d1;
                }
            }
        }
    }
`;

const ProductAdd = () =>{

    const inputRef = useRef(null)
    const [preview, setPreview] = useState(null);

    const imageClick = () =>{
        inputRef.current.click();
    }

    const fileChange = (e) =>{
        const file = e.target.files[0];
            
        if(file){
            setPreview(URL.createObjectURL(file));
        }
    }

    return(

        <ProductAddComponent id="outlet">
            <div id="containerTop">
                <div>
                    <h1>Novo Produto</h1>
                    <p>Adicione um novo produto</p>
                </div>

                <Link id="botaoDashboard" to="/">Voltar</Link>
            </div>

            <div id="containerBottom">
                <form>
                    <label>Imagem do produto</label>
                    <div id="uploadImageArea" onClick={imageClick}>
                        {preview ? (
                            <img
                                src={preview}
                                alt="Imagem selecionada"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    borderRadius: "10px"
                                }}
                            />
                        ):(
                            <>
                                <img src={uploadImage} alt="upload image" />
                                <p>Clique para enviar</p>
                            </>

                        )}
                        
                    </div>

                    <input 
                        type="file" 
                        accept="image/*"
                        ref={inputRef}
                        onChange={fileChange}
                        style={{display: "none"}}
                    />

                    <div id="infoProduto">
                        <div>
                            <label htmlFor="name">Nome do produto</label>
                            <input type="text" id="name" placeholder="Digite o nome do produto" className="info"/>
                        </div>
                        
                        <div>
                            <label htmlFor="category">Categoria</label>
                            <select id="category" className="info">
                                <option value="null" checked>Selecione uma categoria</option>
                                <option value="Video-game">Video game</option>
                                <option value="Pc-gamer">Pc gamer</option>
                                <option value="Setup">Setup</option>
                                <option value="Eletronicos">Eletronicos no geral</option>
                            </select>
                        </div>
                        
                        <div>
                            <label htmlFor="price">Preço (R$)</label>
                            <input type="number" id="price" placeholder="1,00" min="1.00" className="info"/>
                        </div>
                        
                        <div>
                            <label htmlFor="stock">Quantidade em estoque</label>
                            <input type="number" id="stock" placeholder="0" className="info"/>
                        </div>
                    </div>

                    <div id="desc">
                        <label htmlFor="">Digite a descrição do produto</label>
                        <textarea placeholder="Digite a descrição do produto..."></textarea>
                    </div>

                </form>
            </div>
        </ProductAddComponent>
    );
};

export default ProductAdd;