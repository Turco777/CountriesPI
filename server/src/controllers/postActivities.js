const { Country, Activity } = require("../db.js");

const postActivities = async (req, res) => {
  try {
    const { countryId, name, difficulty, duration, season } = req.body;
    if ( !countryId || !name || !difficulty || !duration || !season) {
      return res.status(404).json({ error: "Missing data to add activity" });
    }
    const newActivity = await Activity.create({
      name,
      difficulty,
      duration: duration !== "" ? duration : null,
      season,
    });

    await newActivity.addCountries(countryId);

    return res.status(200).json(newActivity);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = postActivities;
