const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Ruta para obtener el archivo JSON
app.get('/api/db/db.json', (req, res) => {
  // Utiliza la función 'sendFile' para enviar el archivo JSON
  res.sendFile(__dirname + '/api/db/db.json');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
