// cadastro-list.jsx
import React from 'react';
import { User } from "/src/components/styler-users/usersList";
import Excluir from "/src/assets/img/lixeira.svg";

export default function CadastrarUsers({ users }) { 
  return (
    <ul>
      {users.map(user => (
        <User key={user.id}>
          <p>{user.name}</p>
          <p>{user.age}</p>
          <p>{user.telefone}</p>
          <button><img src={Excluir} alt="Lixeira" /></button>
        </User>
      ))}
    </ul>
  );
}
