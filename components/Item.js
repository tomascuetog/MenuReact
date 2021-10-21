import React, { Component, useState } from 'react';

export const Usuarios = () => {
    const [users, setUsers] = useState ([
    { id: 1, price: 1500, name: "Remera"},
    { id: 2, price: 20000, name: "Zapatilla"},
]);
    return (
    <ul>
    {users.map (u => <li key={u.id}>{u.name}</li>)}
    </ul>
  )}