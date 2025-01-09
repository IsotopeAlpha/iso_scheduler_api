const express = require('express');
const router = express.Router();
const User = require('../models/User.js');

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findByPk((""));
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.json(user);
    }
  } catch (err) {
    res.status(500).json({ message: 'Error fetching user' });
  }
});

router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error creating user' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const user = await User.findByPk((""));
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      await user.update(req.body);
      res.json(user);
    }
  } catch (err) {
    res.status(500).json({ message: 'Error updating user' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByPk((""));
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      await user.destroy();
      res.json({ message: 'User deleted successfully' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error deleting user' });
  }
});

module.exports = router;

