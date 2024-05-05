import React, { useState } from 'react';
import People from "./assets/img/puffCadatsro.svg";
import Setinha from "./assets/img/setaE.svg";
import { Container, Imagem, ContainerItens, Title, FormGroup, Label, TyperInput, Button } from "./components/styler-cadastro/usersCasastro";
import CadastrarUsers from "./components/cadastro-list";

export default function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [cell, setCell] = useState('');

  function addNewUser() {
    if (name && age && cell) {
      const newUser = {
        id: Math.random(),
        name: name,
        age: parseInt(age),
        telefone: cell
      };

      // Limpar os campos após adicionar o usuário
      setUsers([...users, newUser]);
      setName('');
      setAge('');
      setCell('');
    }
  }

  return (
    <Container>
      <Imagem alt="logo-img" src={People} />

      <ContainerItens>
        <Title>AgeView</Title>

        <FormGroup>
          <Label>Nome</Label>
          <TyperInput value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Digite seu nome" />
        </FormGroup>

        <FormGroup>
          <Label>Idade</Label>
          <TyperInput value={age} onChange={(e) => setAge(e.target.value)} type="text" placeholder="Digite sua idade" />
        </FormGroup>

        <FormGroup>
          <Label>Telefone</Label>
          <TyperInput value={cell} onChange={(e) => setCell(e.target.value)} type="tel" placeholder="Telefone" />
        </FormGroup>

        <Button onClick={addNewUser}> Cadastrar <img src={Setinha} alt="Seta" /></Button>
        {users.length > 0 && <CadastrarUsers users={users} />}
      </ContainerItens>
    </Container>
  );
}
