const express = require('express');
const Note = require('../models/Note');
const router = express.Router();

// Create a new note
router.post('/', async (req, res) => {
  try {
    const { title, content, category } = req.body;
    const newNote = new Note({ title, content, category });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all notes
router.get('/', async (req, res) => {
    const { search } = req.query;
  
    try {
      let notes;
      if (search) {
        // Find notes that match the search query (case insensitive search)
        notes = await Note.find({
          $or: [
            { title: { $regex: search, $options: 'i' } }, // Search in title
            { content: { $regex: search, $options: 'i' } }, // Search in content
          ],
        });
      } else {
        // Fetch all notes if no search query is provided
        notes = await Note.find();
      }
  
      res.json(notes);
    } catch (error) {
      console.error("There was an error fetching the notes", error);
      res.status(500).json({ error: 'Failed to fetch notes' });
    }
  });

// Update a note
router.put('/:id', async (req, res) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a note
router.delete('/:id', async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Note deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
