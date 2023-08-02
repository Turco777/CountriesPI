const { Country, Activity } = require("../db.js");

const getCountryById = async (req, res) => {
  try {
    const { idPais } = req.params;
    const CountryFound = await Country.findByPk(idPais, {
      include: [Activity],
    });
    if (CountryFound) return res.status(200).json(CountryFound);
    else throw Error;
  } catch (error) {
    res.status(500).json({ error: "ID Not Found" });
  }
};

module.exports = getCountryById;
