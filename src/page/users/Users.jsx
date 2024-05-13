import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Avata from "../../assets/img/pessoasLogin.svg";
import Setinha from "../../assets/img/setaD.svg";
import { Container, Imagem, ContainerItens, Title, Button } from "./components/styler-cadastro/usersCasastro";
import CadastrarUsers from "./components/cadastro-list";


export default function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get("http://localhost:3000/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    }

    fetchUsers();
  }, []); // Passando um array vazio como segundo argumento para garantir que esta função seja executada apenas uma vez quando o componente for montado

  function goBackPage() {
    navigate('/')
  }


  return (

    <Container>
      <Imagem alt="logo-img" src={Avata} />

      <ContainerItens>

        <Title>Usuários</Title>

        {users.length > 0 && <CadastrarUsers users={users} setUsers={setUsers} />}

        <Button onClick={goBackPage}><img src={Setinha} alt="Seta" /> Voltar </Button>

      </ContainerItens>
    </Container>
   
  );
}
