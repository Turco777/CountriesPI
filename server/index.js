const axios = require("axios");
const server = require("./src/server");
const { conn, Country } = require("./src/db.js");

const PORT = 3001;

conn
  .sync({ alter: true })
  .then(() => {
    server.listen(PORT, async () => {
      const dataBase = await Country.findAll();

      if (!dataBase.length) {
        const { data } = await axios.get("http://localhost:5000/countries");

        const mappedData = data.map((country) => {
          return {
            id: country.cca3,
            name: country.name.common,
            img: country.flags.svg,
            continent: country.continents.join(" - "),
            capital: country.capital
              ? country.capital.join(" - ")
              : "No capital Found",
            region: country.region,
            subregion: country.subregion
              ? country.subregion
              : "No Subregion Found",
            area: country.area,
            population: country.population,
          };
        });

        await Country.bulkCreate(mappedData);
        console.log("DT loaded");
      }

      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
