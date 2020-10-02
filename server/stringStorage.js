const strings = [];

// Adds a user-input string to the array
const addString = (req, res) => {
  const stringToAdd = req.body.data;
  const id = Date.now();
  strings.push({
    value: stringToAdd,
    id,
  });
  res.sendStatus(201);
};

// Returns all strings to the user
const getAllStrings = (req, res) => {
  res.status(200).json(strings);
};

module.exports = {
  addString,
  getAllStrings,
};
