const { performSummarization, performSentimentAnalysis } = require('../../services/ai');

describe('AI Service Tests', () => {
  
  test('Should return a summary from performSummarization', async () => {
    const text = "This is a sample text that needs to be summarized.";
    const summary = await performSummarization(text);
    
    expect(summary).toBeDefined();
    expect(Array.isArray(summary)).toBe(true);
    expect(summary[0]).toHaveProperty('summary_text');
  });

  test('Should return the correct sentiment from performSentimentAnalysis', async () => {
    const text = "I love this product!";
    const sentiment = await performSentimentAnalysis(text);

    expect(sentiment).toBeDefined();
    expect(typeof sentiment).toBe('object'); // Expecting an object
    expect(sentiment).toHaveProperty('label'); // Ensure label exists
    expect(typeof sentiment.label).toBe('string'); // Validate label type
    expect(['POSITIVE', 'NEGATIVE']).toContain(sentiment.label); // Validate sentiment value
  });

});
