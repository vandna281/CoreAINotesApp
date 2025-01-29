const request = require('supertest');
const express = require('express');
const aiRoutes = require('../../routes/ai');

const app = express();
app.use(express.json());
app.use('/api/ai', aiRoutes);

describe('AI Routes Tests', () => {

  test('POST /api/ai/summarize should return a summary', async () => {
    const response = await request(app)
      .post('/api/ai/summarize')
      .send({ text: "This is a sample text that needs summarization." });

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body[0]).toHaveProperty('summary_text');
  });

  test('POST /api/ai/sentiment should return sentiment analysis', async () => {
    const response = await request(app)
      .post('/api/ai/sentiment')
      .send({ text: "I love this!" });

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    expect(typeof response.body.label).toBe('string');
    expect(['POSITIVE', 'NEGATIVE']).toContain(response.body.label);
  });

});
