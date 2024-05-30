import { styled } from "styled-components";
import search from "../../../public/icones/lupa.png";

const ContainerEstilizado = styled.div`
  position: relative;
  display: inline-block;
`;

const CampoEstilizado = styled.input`
  width: 100%;
  max-width: 602px;
  height: 56px;
  border-radius: 10px;
  border: 2px solid #c98cf1;
  background-color: transparent;
  box-sizing: border-box;
  color: #d9d9d9;
  padding: 18px 16px;
  font-size: 20px;
  line-height: 20px;
  font-weight: 400;
`;

const IconeLupa = styled.img`
  position: absolute;
  top: 16px;
  right: 20px;
  width: 20px;
  height: 20px;
`;

export const CampoTexto = (props) => {
  return (
    <ContainerEstilizado>
      <CampoEstilizado placeholder="O que você procura?" {...props} />
      <IconeLupa src={search} alt="imagem de uma lupa" />
    </ContainerEstilizado>
  );
};
