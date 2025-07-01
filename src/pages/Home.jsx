import styled from "styled-components";

const DashboardComponent = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 20px;
    gap: 25px;

    & #containerTop{
        display: flex;
        justify-content: space-between;
        
        & .dados{
            background-color: #1F2937;
            width: 340px;
            height: 65px;
            border-radius: 10px;
        }
    }

    & #containerBottom{
        background-color: #1F2937;
        height: 65vh;
        border-radius: 10px;
        
    }

`;

const Home = () =>{

    return(
        <DashboardComponent id="outlet">
                <h1>Dashboard</h1>

                <div id="containerTop">
                    <div className="dados">
                        
                    </div>
                    
                    <div className="dados">

                    </div>
                    
                    <div className="dados">

                    </div>
                </div>

                <div id="containerBottom">

                </div>
        </DashboardComponent>
    );
};

export default Home;