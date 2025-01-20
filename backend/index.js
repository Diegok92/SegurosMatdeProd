const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 3007;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Ruta para manejar el envío de formularios
app.post("/submit-form", async (req, res) => {
	const formData = req.body;

	const now = new Date();
	const data = {
		HOJA: formData.HOJA || "Leads",
		PRODUCTO: formData.PRODUCTO || "Contacto",
		FECHA: now.toLocaleDateString(),
		AÑO: now.getFullYear(),
		MES: now.getMonth() + 1,
		DIA: now.getDate(),
		"HH:MM": `${now.getHours()}:${now.getMinutes()}`,
		...formData,
	};

	const googleScriptUrl =
		"https://script.google.com/macros/s/AKfycbzQINUw9bE3dBw5bslOSO8CZS9vklSpFw-pOYA6iPwSwfRfBhkRp0z5RTvUIE22O2Q5/exec";

	try {
		await axios.post(googleScriptUrl, new URLSearchParams(data));
		res.status(200).json({ message: "Formulario enviado correctamente." });
	} catch (error) {
		console.error("Error al enviar el formulario:", error);
		res.status(500).json({ message: "Error al enviar el formulario." });
	}
});

// Inicia el servidor
app.get("/", (req, res) => {
	res.send("El servidor está funcionando correctamente.");
});

app.listen(PORT, () => {
	console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
