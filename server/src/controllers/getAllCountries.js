const { Country, Activity } = require("../db.js");
const { Op } = require("sequelize");

const getAllCountries = async (req, res) => {
  const { name } = req.query;

  try {
    if (name) {
      const countryByName = await Country.findAll({
        where: {
          name: { [Op.iLike]: `%${name}%` },
        },
        include: Activity,
      });

      if (countryByName) {
        return res.status(200).json(countryByName);
      } else {
        return res
          .status(404)
          .json({ error: `No countries with the name ${name}` });
      }
    } else {
      const allCountries = await Country.findAll();

      if (allCountries && allCountries.length > 0) {
        return res.status(200).json(allCountries);
      } else {
        return res
          .status(404)
          .json({ error: "No countries found in the database" });
      }
    }
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error al consultar la base de datos" });
  }
};

module.exports = getAllCountries;
