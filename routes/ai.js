const express = require('express');
const router = express.Router();
const { performSummarization, performSentimentAnalysis } = require('../services/ai');

// Summarization Endpoint
router.post('/summarize', async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text is required for summarization.' });
  }

  try {
    const summary = await performSummarization(text);
    res.json(summary);
  } catch (error) {
    res.status(500).json({ error: 'Failed to summarize text.' });
  }
});

// Sentiment Analysis Endpoint
router.post('/sentiment', async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text is required for sentiment analysis.' });
  }

  try {
    const sentiment = await performSentimentAnalysis(text);
    res.json(sentiment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to analyze sentiment.' });
  }
});

module.exports = router;
