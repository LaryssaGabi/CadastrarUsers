import axios from 'axios';
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import People from "../../assets/img/puffCadatsro.svg";
import Setinha from "../../assets/img/setaE.svg";
import { Container, Imagem, ContainerItens, Title, FormGroup, Label, TyperInput, Button } from "./components/styler-cadastro/usersCasastro";



export default function App() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const cellRef = useRef(null);



  async function addNewUser() {
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    const cell = cellRef.current.value;

    if (name && age && cell) {
      const newUser = {
        name: name,
        age: parseInt(age),
        telefone: cell
      };

      try {
        // Enviar os dados para o servidor
        const response = await axios.post("http://localhost:3000/users", newUser);
        const createdUser = response.data; // Obter os dados do usuário criado no servidor
        setUsers([...users, createdUser]); // Adicionar o usuário criado à lista de usuários no estado do componente
        console.log("Dados do usuário cadastrado:", createdUser);

        // Limpar os campos após adicionar o usuário
        nameRef.current.value = '';
        ageRef.current.value = '';
        cellRef.current.value = '';
      } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);
      }
    }

       navigate("/usuarios")
  }


  return (

    <Container>
      <Imagem alt="logo-img" src={People} />

      <ContainerItens>
        <Title>AgeView</Title>

        <FormGroup>
          <Label>Nome</Label>
          <TyperInput ref={nameRef} type="text" placeholder="Digite seu nome" />
        </FormGroup>

        <FormGroup>
          <Label>Idade</Label>
          <TyperInput ref={ageRef} type="text" placeholder="Digite sua idade" />
        </FormGroup>

        <FormGroup>
          <Label>Telefone</Label>
          <TyperInput ref={cellRef} type="tel" placeholder="Telefone" />
        </FormGroup>

        <Button onClick={addNewUser}> Cadastrar <img src={Setinha} alt="Seta" /></Button>

      </ContainerItens>
    </Container>

  );
}
