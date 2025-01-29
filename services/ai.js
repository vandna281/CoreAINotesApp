const axios = require('axios');

const HUGGINGFACE_API_KEY = 'dummy_api_key';

async function performSummarization(text) {
  try {
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
      { inputs: text },
      {
        headers: {
            Authorization: `Bearer ${HUGGINGFACE_API_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error performing summarization:', error);
    throw error;
  }
}

async function performSentimentAnalysis(text) {
    try {
        const response = await axios.post(
        'https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english',
        { inputs: text },
        {
            headers: {
                Authorization: `Bearer ${HUGGINGFACE_API_KEY}`,
            },
        }
        );

        var sentiments = response.data;
        if (Array.isArray(sentiments) && Array.isArray(sentiments[0])) {
            sentiments = sentiments[0]; // Extract the inner array
        }
      
          // Ensure sentiments is a valid array
        if (!Array.isArray(sentiments) || sentiments.length === 0) {
            throw new Error('Invalid response from sentiment analysis API.');
        }
      
        // Find the sentiment with the highest score
        const bestSentiment = sentiments.reduce((max, sentiment) =>
        sentiment.score > max.score ? sentiment : max
        );
    
        return { label: bestSentiment.label };
    } catch (error) {
        console.error("Error analyzing sentiment:", error);
        res.status(500).json({ error: 'Failed to analyze sentiment.' });
    }
  }

module.exports = { performSummarization, performSentimentAnalysis };
