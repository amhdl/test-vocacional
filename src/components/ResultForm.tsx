// src/components/ResultForm.tsx

import React, { useState } from 'react';
import { CategoryResult } from '@/types/quiz';
import { generarResultadosHTML } from '@/components/Results';
/////////




interface ResultFormProps  {
  respuestasUsuario: number[]; // Asume que el componente recibe las respuestas del usuario
  }






export default function ResultForm({ respuestasUsuario }: ResultFormProps ) {
  
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  console.log('respuestasUsuario1' + respuestasUsuario);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    //const htmlResultados = 'html'; 
    const htmlResultados = generarResultadosHTML([4, 2, 5, 3, 1,4, 2, 5, 3, 1,4, 2, 5, 3, 1,4, 2, 5, 3, 1]); 
    //const htmlResultados = respuestasUsuario;

console.log(htmlResultados);
    const data = {
      name,
      email,
      htmlResultados,
    };

    console.log(data);

    await fetch('/api/sendResults', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };

  return (

    
    <form onSubmit={handleSubmit} className="space-y-4"> 
      <h2>Ingresa tus datos para recibir tus resultados</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Correo electrónico"
        required
      />
      <button type="submit">Enviar resultados</button>
    </form>
  );
}
