import styled from "styled-components";
import Background from "/src/assets/img/cadastroFundo.svg";

export const Container = styled.div`
  background: url("${Background}") no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100vh;
`

export const Imagem = styled.img`
  margin-top: 30px;
`

export const ContainerItens = styled.div`
  background: rgba(255, 255, 255, 0.6);
  border-radius: 15px; 
  padding: 30px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`

export const Title = styled.h1`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 34px;
  line-height: 40px;
  text-align: center;
  color: #FFFFFF;
  margin-bottom: 30px;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  width: 100%;
`

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  color: #fff;
  padding-left:18px;
`

export const TyperInput = styled.input`
  width: 100%;
  height: 58px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  border: none;
  outline: none;
  padding-left: 25px;
  font-style: normal;
  font-weight: normal;
  line-height: 28px;
  color: #fff;
`

export const Button = styled.button`
  width: 342px;
  height: 74px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 14px;
  border: none;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 28px;
  color: #FFFFFF;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  transition: all 0.3s ease; /* Adicionando transição */

  img {
    filter: invert(100%);
    width: 24px; /* Ajuste o tamanho da imagem da seta conforme necessário */
    height: 24px;
  }

  &:hover {
    transform: translateY(-3px); /* Movendo para cima quando hover */
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3); /* Adicionando uma sombra maior */
  }

  &:active {
    transform: translateY(0); /* Retornar à posição original quando clicado */
    box-shadow: none; /* Remover a sombra quando clicado */
  }
`