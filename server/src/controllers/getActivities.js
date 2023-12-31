const { Activity } = require("../db.js");

const getActivities = async (req, res) => {
  try {
    const allActivities = await Activity.findAll();
    console.log(allActivities);
    if (allActivities.length > 0) return res.status(200).json(allActivities);
    else throw Error;
  } catch (error) {
    res.status(500).json({ error: "No activity found in DB" });
  }
};

module.exports = getActivities;
