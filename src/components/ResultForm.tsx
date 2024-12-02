/*import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { generarResultadosHTML } from '@/components/Results';


interface ResultFormProps {
  respuestasUsuario: number[]; // Respuestas del usuario
  onBack: () => void; // Función para volver al test
}

export default function ResultForm({ respuestasUsuario, onBack }: ResultFormProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const htmlResultados = generarResultadosHTML(respuestasUsuario);

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-este p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4 bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold text-oeste text-center mb-4">
          Ingresa tus datos para recibir tus resultados
        </h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-oeste"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-oeste"
        />
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={onBack}
          >
            Atrás
          </Button>
          <Button type="submit">
            Enviar resultados
          </Button>
        </div>
      </form>
    </div>
  );
}
*/

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { generarResultadosHTML } from '@/components/Results';

interface ResultFormProps {
  respuestasUsuario: number[]; // Respuestas del usuario
  onBack: () => void; // Función para volver al test
  onFinish: () => void; // Función para finalizar y mostrar la página final
}

export default function ResultForm({ respuestasUsuario, onBack, onFinish }: ResultFormProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const htmlResultados = generarResultadosHTML(respuestasUsuario);

    const data = {
      name,
      email,
      htmlResultados,
    };

    console.log(data);

    try {
      await fetch('/api/sendResults', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Llama a onFinish para redirigir después de enviar los resultados
      onFinish();
    } catch (error) {
      console.error('Error al enviar los resultados:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-este p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4 bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold text-oeste text-center mb-4">
          Ingresa tus datos para recibir tus resultados
        </h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-oeste"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-oeste"
        />
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={onBack}
            disabled={isSubmitting}
          >
            Atrás
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar resultados'}
          </Button>
        </div>
      </form>
    </div>
  );
}
