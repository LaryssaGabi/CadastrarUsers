// cadastro-list.jsx
import React from 'react';
import { User } from "/src/components/styler-users/usersList";
import Excluir from "/src/assets/img/lixeira.svg";

export default function CadastrarUsers({ users, onDeleteUser }) { 
  function deleteUser(userId){
     const newUsers = users.filter( user => user.id !== userId)
     onDeleteUser(newUsers)
  }
  return (
    <ul>
      {users.map(user => (
        <User key={user.id}>
          <p>{user.name}</p>
          <p>{user.age}</p>
          <p>{user.telefone}</p>
          <button onClick={() => deleteUser(user.id)} ><img src={Excluir} alt="Lixeira" /></button>
        </User>
      ))}
    </ul>
  );
}

