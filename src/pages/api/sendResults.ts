// src/pages/api/sendResults.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend'; // Asegúrate de que Resend esté instalado y configurado


const resend = new Resend('re_Rm3kxoac_6zNDW5Zr9kY9Xt2Tco8Poj5V');


//export default async function sendResults(req: NextApiRequest, res: NextApiResponse) {

export default async function handler(
    req: NextApiRequest,
     res: NextApiResponse) {

console.log('apiSendResult');

  if (req.method === 'POST') {
    const { email, name, htmlResultados } = req.body;

    try {
        console.log('htmlResultados'+htmlResultados);
        // Enviar correo electrónico con los datos del formulario
        await resend.emails.send({
            from: 'info@brujula.uy', // Cambia a tu correo o un correo autorizado
            to: email, // Cambia al correo donde deseas recibir los datos
            subject: 'Brújula - Resultado de test vocacional',
            html: htmlResultados,
          });
/*
          const response = await resend.emails.send({
            from: 'info@brujula.uy',
            to: 'alexanderh24@gmail.com',
            subject: 'Hola Mundo',
            html: '<h1>Hola desde Resend API</h1><p>Este es un mensaje enviado desde tu API.</p>',
          });
*/
      res.status(200).json({ message: 'Resultados enviados con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error enviando resultados' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
