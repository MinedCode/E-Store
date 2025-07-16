import styled from "styled-components";
import { FaExclamationTriangle } from "react-icons/fa";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalBox = styled.div`
  background-color: #1f2937;
  color: #fff;
  padding: 30px;
  border-radius: 12px;
  width: 400px;
  text-align: center;
  box-shadow: 0 0 20px rgba(0,0,0,0.5);

  @media screen and (max-width: 1020px){
    width: 350px;
  }
`;

const Icon = styled(FaExclamationTriangle)`
  color: #f87171;
  font-size: 40px;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 20px;
`;

const Text = styled.p`
  font-size: 14px;
  color: #d1d5db;

  & strong {
    color: #fff;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`;

const CancelButton = styled.button`
  all: unset;
  background-color: #374151;
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #4b5563;
  }
`;

const ConfirmButton = styled.button`
  all: unset;
  background-color: #ef4444;
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #dc2626;
  }
`;

const DeleteModal = ({ productName, onConfirm, onCancel }) => {
  return (
    <Overlay>
      <ModalBox>
        <Icon />
        <Title>Confirmar exclusão</Title>
        <Text>
          Tem certeza que deseja excluir o produto <strong>{productName}</strong>?<br />
          Essa ação não poderá ser desfeita.
        </Text>
        <Buttons>
          <CancelButton onClick={onCancel}>Cancelar</CancelButton>
          <ConfirmButton onClick={onConfirm}>Excluir Produto</ConfirmButton>
        </Buttons>
      </ModalBox>
    </Overlay>
  );
};

export default DeleteModal;
