const { Country, Activity } = require("../db");

const getCountriesByActivity = async (req, res) => {
  try {
    const { id } = req.params;
    const activity = await Activity.findByPk(id, {
      include: [
        {
          model: Country,
          through: "country_activity",
        },
      ],
    });

    if (!activity) {
      return res.status(404).json({ error: "Activity not found" });
    }

    return res.status(200).json(activity);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = getCountriesByActivity;
