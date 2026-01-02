const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

// GET /person - Display list of people
router.get('/', async (req, res) => {
  try {
    const people = await Person.find().sort({ createdAt: -1 });
    res.render('index', { people });
  } catch (err) {
    res.status(500).send('Error fetching people: ' + err.message);
  }
});

// GET /person/create - Display create form
router.get('/create', (req, res) => {
  res.render('create', { error: null });
});

// POST /person - Create new person
router.post('/', async (req, res) => {
  try {
    const { name, age, gender, mobile } = req.body;
    const person = new Person({ name, age, gender, mobile });
    await person.save();
    res.redirect('/person');
  } catch (err) {
    res.render('create', { error: err.message });
  }
});

// GET /person/:id/edit - Display edit form
router.get('/:id/edit', async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (!person) {
      return res.status(404).send('Person not found');
    }
    res.render('edit', { person, error: null });
  } catch (err) {
    res.status(500).send('Error: ' + err.message);
  }
});

// PUT /person/:id - Update person
router.post('/:id', async (req, res) => {
  try {
    const { name, age, gender, mobile } = req.body;
    await Person.findByIdAndUpdate(req.params.id, { name, age, gender, mobile });
    res.redirect('/person');
  } catch (err) {
    const person = await Person.findById(req.params.id);
    res.render('edit', { person, error: err.message });
  }
});

// GET /person/:id/delete - Display delete confirmation
router.get('/:id/delete', async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (!person) {
      return res.status(404).send('Person not found');
    }
    res.render('delete', { person });
  } catch (err) {
    res.status(500).send('Error: ' + err.message);
  }
});

// DELETE /person/:id - Delete person
router.post('/:id/delete', async (req, res) => {
  try {
    await Person.findByIdAndDelete(req.params.id);
    res.redirect('/person');
  } catch (err) {
    res.status(500).send('Error deleting person: ' + err.message);
  }
});

module.exports = router;