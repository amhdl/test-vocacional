import { Button } from "@/components/ui/button";

interface StartPageProps {
  onStart: () => void; // Función que se ejecutará al hacer clic en "Iniciar Test"
}

export function StartPage({ onStart }: StartPageProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center space-y-6 text-center p-6">
      <h1 className="text-4xl font-bold text-gray-900">
        Bienvenido al Test de Orientación Vocacional
      </h1>
      <p className="text-lg text-gray-700 max-w-xl">
        Este es un test <span className="font-semibold text-gray-800">básico</span> diseñado para explorar algunos aspectos de tus intereses y habilidades.
        No es un diagnóstico definitivo, pero es una herramienta inicial para ayudarte a comenzar un proceso más profundo de orientación vocacional.
      </p>
      <p className="text-lg text-gray-700 max-w-xl">
        Responde de manera honesta y abierta. El objetivo es ofrecerte una base para entender mejor tus preferencias y 
        acompañarte en el inicio de este camino.
      </p>
      <Button onClick={onStart} className="px-6 py-3 text-xl font-semibold">
        Iniciar Test
      </Button>
    </div>
  );
}
