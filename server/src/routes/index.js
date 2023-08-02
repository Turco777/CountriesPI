const { Router } = require("express");

const router = Router();

const getAllCountries = require("../controllers/getAllCountries.js");
const getCountryById = require("../controllers/getCountryById.js");
const postActivities = require("../controllers/postActivities.js");
const getActivities = require("../controllers/getActivities.js");
const getCountriesByActivity = require("../controllers/getCountriesByActivities");

router.get("/countries", getAllCountries);
router.get("/countries/:idPais", getCountryById);
router.post("/activities", postActivities);
router.get("/activities", getActivities);
router.get("/countries-by-activities/:id", getCountriesByActivity);

module.exports = router;
