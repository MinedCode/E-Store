import styled from "styled-components";
import uploadImage from "../assets/extras/upload.png";
import { Link, useParams } from "react-router-dom";
import {useRef, useEffect, useState} from "react";

const ComponentEdit = styled.div`
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
                    height: 90px;
                    margin-top: 5px;
                    padding: 2px 0 2px 5px;
                    border-radius: 10px;
                    white-space: pre-wrap;
                    word-wrap: break-word;
                    background-color: #39414C;

                    color: #d1d1d1;
                }
            }

            & #botao{
                display: flex;
                justify-content: end;
                align-items: center;
                height: 45px;

                & button{
                    all: unset;
                    height: 30px;
                    width: 170px;
                    background-color: #3B82F6;
                    border-radius: 10px;

                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                & button:hover{
                    cursor: pointer;
                    color: #c7c7c7;
                    background-color: #2e5fad;
                }
            }
        }
    }
`;

const ProductEdit = () =>{
    const inputRef = useRef(null);
    const [preview, setPreview] = useState(null);
    const [produto, setProduto] = useState({}); 
    const {id} = useParams();
    
    const [form, setForm] = useState({
        imagem: null,
        nome: "",
        preco: "",
        descricao: "",
        categoria: "",
        estoque: ""     
    });
    
    async function buscarProduto() {
        const dados = await fetch(`https://6866a33789803950dbb37048.mockapi.io/apiv1/produtos/${id}`);
        const produtoBuscado = await dados.json();
        setProduto(produtoBuscado);

        setForm({
            imagem: produto.imagem,
            nome: produtoBuscado.nome,
            preco: produtoBuscado.preco,
            descricao: produtoBuscado.descricao,
            categoria: produtoBuscado.categoria,
            estoque: produtoBuscado.estoque    
        })
    }


    const mudarValor = (e) =>{
        const {name, value, type, files} = e.target;
        
        if(type === "file"){
            const file = files[0];

            if(file){
                setPreview(URL.createObjectURL(file));
                setForm((prev) => ({...prev, [name]: file }));
            }
        }else{
            setForm((prev) => ({...prev, [name]: value }));
        }
    }

    const imageClick = () =>{
        inputRef.current.click();
    }

    async function atualizarProduto(){
        try{
            let urlImagem = produto.imagem;

            if(form.imagem !== null){
                const formData = new FormData();
                formData.append("file", form.imagem);
                formData.append("upload_preset", "e-store_presets");
    
                const response = await fetch("https://api.cloudinary.com/v1_1/dqrtfv8rr/image/upload", {
                    method: "POST",
                    body: formData
                });
    
                const dados = await response.json();
                urlImagem = dados.secure_url;
            }

            const updateProduto ={
                imagem: urlImagem,
                nome: form.nome,
                preco: form.preco,
                descricao: form.descricao,
                categoria: form.categoria,
                estoque: form.estoque
                
            };

            await fetch(`https://6866a33789803950dbb37048.mockapi.io/apiv1/produtos/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updateProduto)
            });

            alert("Produto atualizado com êxito");
            window.location.reload();

        }catch (err){
            console.log("erro ao salvar os dados: " + err)
        }    

    }

    useEffect(() =>{
        buscarProduto();
    }, []);

    return(

        <ComponentEdit id="outlet">
            <div id="containerTop">
                <div>
                    <h1>Editar Produto</h1>
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
                            
                            <img 
                                src={produto.imagem}
                                alt="imagem do produto" 
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    borderRadius: "10px"
                                }}
                            />
                            

                        )}
                        
                    </div>

                    <input 
                        type="file" 
                        accept="image/*"
                        name="imagem"
                        ref={inputRef}
                        onChange={mudarValor}
                        style={{display: "none"}}
                        required
                    />

                    <div id="infoProduto">
                        <div>
                            <label htmlFor="name">Nome do produto</label>
                            <input 
                                type="text"
                                name="nome"
                                id="name" 
                                value={form.nome}
                                placeholder="Digite o nome do produto" 
                                className="info" 
                                onChange={mudarValor}
                                required
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="category">Categoria</label>
                            <select id="category" className="info" name="categoria" required onChange={mudarValor} value={form.categoria}>
                                <option value="null">Selecione uma categoria</option>
                                <option value="Video-game">Video game</option>
                                <option value="Pc-gamer">Pc gamer</option>
                                <option value="Setup">Setup</option>
                                <option value="Eletronicos">Eletronicos no geral</option>
                            </select>
                        </div>
                        
                        <div>
                            <label htmlFor="price">Preço (R$)</label>
                            <input 
                                type="number" 
                                name="preco"
                                id="price" 
                                value={form.preco}
                                placeholder="1,00" 
                                min="1.00" 
                                className="info" 
                                onChange={mudarValor}    
                                required
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="stock">Quantidade em estoque</label>
                            <input 
                                type="number" 
                                name="estoque"
                                id="stock" 
                                value={form.estoque}
                                placeholder="0" 
                                className="info" 
                                onChange={mudarValor}    
                                required
                            />
                        </div>
                    </div>

                    <div id="desc">
                        <label htmlFor="">Digite a descrição do produto</label>
                        <textarea placeholder="Digite a descrição do produto..." name="descricao" onChange={mudarValor} value={form.descricao} required></textarea>
                    </div>

                    <div id="botao">
                        <button type="button" onClick={atualizarProduto}>Atualizar</button>
                    </div>
                    
                </form>
            </div>
        </ComponentEdit>
    );
};

export default ProductEdit;