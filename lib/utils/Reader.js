const fs=require("fs")
class Reader{
	static readJsonFile(path){ //debe recibir una path del archivo a leer
		//logica para leer archivo y regresar informacion
		const raw data = fs.readFileSync("explorers.json"); //read json file
		return JSON.parse(rawdata); //content into json
 
	}
}

module.exports = Reader //exportando clase
