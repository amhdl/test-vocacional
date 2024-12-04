import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebookSquare, faInstagram,  faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


interface FinalPageProps {
  onRestart: () => void; // Función para reiniciar el test si es necesario
}

export function FinalPage({ onRestart }: FinalPageProps) {
  return (
    <div className="brujula-oeste min-h-screen bg-background flex flex-col items-center justify-center space-y-6 text-center p-6">
      <h1 className="text-3xl font-bold text-gray-900">
        ¡Gracias por realizar el Test!
      </h1>
      <p className="text-lg text-gray-700 max-w-xl">
        Tus resultados han sido enviados a tu correo electrónico. Este es solo
        el inicio de tu proceso de orientación vocacional. Te invitamos a
        continuar este camino junto a nosotros.
      </p>
      <p className="text-lg text-gray-700 max-w-xl">
        Si tienes alguna pregunta o quieres comenzar el proceso de orientación,
        no dudes en contactarnos a través de los siguientes métodos:
      </p>

      <div className="flex space-x-4">
    <a href="https://www.facebook.com/profile.php?id=61568201455483" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFacebookSquare} size="2x" className="text-white hover:text-gray-200" />
    </a>
    <a href="https://www.instagram.com/orientacionvocacionalbrujula/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram} size="2x" className="text-white hover:text-gray-200" />
    </a>
    <a href="mailto:info@brujula.uy" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faEnvelope } size="2x" className="text-white hover:text-gray-200" />
    </a>
    <a href="https://api.whatsapp.com/send?phone=59891916894&text=Hola%21%20" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faWhatsapp} size="2x" className="text-white hover:text-gray-200" />
    </a>
  </div>

{/*}
      <button
        onClick={onRestart}
        className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Reiniciar Test
      </button>*/}
    </div>
  );
}
