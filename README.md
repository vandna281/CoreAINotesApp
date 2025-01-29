# CoreAINotesApp
## Overview

The Notes App backend is a RESTful API built using Node.js and Express.js. It provides endpoints for managing notes and integrates AI-powered summarization and sentiment analysis features using Hugging Face APIs.

## Features

RESTful API for creating, reading, updating, and deleting notes.

Integration with Hugging Face for:

  * Summarization using facebook/bart-large-cnn.

  * Sentiment analysis using distilbert-base-uncased-finetuned-sst-2-english.

## Technologies Used

**Node.js**: Runtime environment for server-side development.

**Express.js**: Framework for building RESTful APIs.

**Axios**: For making HTTP requests to Hugging Face APIs.

**MongoDB**: For storing notes persistently.

## Instructions to Run the Backend Locally

### Prerequisites:

  * Node.js and npm installed on your system.

  * A Hugging Face API key. You can generate one by creating an account on Hugging Face.

## Steps:

  1. Clone the Repository:

    git clone https://github.com/vandna281/CoreAINotesApp.git

  2. Install Dependencies:

    npm install

  3. Set Up Environment Variables:
    Replace this constant with your api key

    **HUGGINGFACE_API_KEY**=your_api_key_here

  4. Start the Backend:

    npm start

**The backend will be running at http://localhost:5000.**

## Endpoints

* POST /api/ai/summarize: Summarizes the provided text.

* POST /api/ai/sentiment: Analyzes the sentiment of the provided text.

* **CRUD Endpoints for Notes:**

  * GET /api/notes: Retrieve all notes.

  * POST /api/notes: Create a new note.

  * PUT /api/notes/:id: Update an existing note.

  * DELETE /api/notes/:id: Delete a note.

