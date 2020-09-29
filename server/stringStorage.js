const strings = ['test', 'welcome'];

// Adds a user-input string to the array
const addString = (req, res) => {
  const stringToAdd = req.body;
  strings.push(stringToAdd);
  res.send(201);
};

// Returns all strings to the user
const getAllStrings = (req, res) => {
  res.send(200).json(strings);
};

module.exports = {
  addString,
  getAllStrings,
};
