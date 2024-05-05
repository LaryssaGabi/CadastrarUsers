import React, { useState, useRef } from 'react';
import People from "./assets/img/puffCadatsro.svg";
import Setinha from "./assets/img/setaE.svg";
import { Container, Imagem, ContainerItens, Title, FormGroup, Label, TyperInput, Button } from "./components/styler-cadastro/usersCasastro";
import CadastrarUsers from "./components/cadastro-list";

export default function App() {
  const [users, setUsers] = useState([]);
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const cellRef = useRef(null);

  function addNewUser() {
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    const cell = cellRef.current.value;

    if (name && age && cell) {
      const newUser = {
        id: Math.random(),
        name: name,
        age: parseInt(age),
        telefone: cell
      };

      // Limpar os campos após adicionar o usuário
      setUsers([...users, newUser]);
      nameRef.current.value = '';
      ageRef.current.value = '';
      cellRef.current.value = '';
    }
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
        {users.length > 0 && <CadastrarUsers users={users} onDeleteUser={setUsers} />}
      </ContainerItens>
    </Container>
  );
}