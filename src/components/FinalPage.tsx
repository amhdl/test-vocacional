import React from "react";

interface FinalPageProps {
  onRestart: () => void; // Función para reiniciar el test si es necesario
}

export function FinalPage({ onRestart }: FinalPageProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center space-y-6 text-center p-6">
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

      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Síguenos</h3>
        <div className="flex space-x-6 justify-center">
          <a
            href="https://www.facebook.com/profile.php?id=61568201455483"
            className="text-blue-700 hover:text-blue-900"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-square-facebook text-3xl"></i>
          </a>
          <a
            href="https://www.instagram.com/orientacionvocacionalbrujula/"
            className="text-pink-600 hover:text-pink-800"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram text-3xl"></i>
          </a>
          <a
            href="https://www.tiktok.com/@brujulaotientacion"
            className="text-black hover:text-gray-700"
            aria-label="TikTok"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-tiktok text-3xl"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=59891916894&text=Hola%21%20"
            className="text-green-600 hover:text-green-800"
            aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-whatsapp text-3xl"></i>
          </a>
        </div>
      </div>

      <button
        onClick={onRestart}
        className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Reiniciar Test
      </button>
    </div>
  );
}
