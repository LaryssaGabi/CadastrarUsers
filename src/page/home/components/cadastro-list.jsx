import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { User } from "./styler-users/usersList";
import Excluir from "/src/assets/img/lixeira.svg";

export default function CadastrarUsers({ users, setUsers }) {
  async function deleteUser(userId) {
    try {
      console.log("ID do usuário a ser excluído:", userId); // Adicionando um console.log para verificar o ID
      await axios.delete(`http://localhost:3000/users/${userId}`);
      const updatedUsers = users.filter(user => user.id !== userId);
      setUsers(updatedUsers);
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
    }
  }

  return (
    <ul>
      {users.map(user => (
        <User key={user.id}>
          <p>{user.name}</p>
          <p>{user.age}</p>
          <p>{user.telefone}</p>
          <button onClick={() => deleteUser(user.id)}>
            <img src={Excluir} alt="Lixeira" />
          </button>
        </User>
      ))}
    </ul>
  );
}
