const handleLogin = async (req, res) => {
  const { pwd } = req.body;
  if (!pwd) return res.status(400).json({ message: "Password is required." });
  //Find user from DB
  const foundUser = { password: "1234" };
  res.json({ message: 'Login success' });
};

module.exports = {
  handleLogin,
};
