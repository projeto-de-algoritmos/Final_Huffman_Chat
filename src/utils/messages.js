const generateMessage = (username, text, coded, formattedTree) => {
  return {
    username,
    text,
    coded,
    formattedTree,
    createdAt: new Date().getTime()
  };
};

module.exports = {
  generateMessage
};
