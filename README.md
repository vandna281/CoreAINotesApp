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

    nodemon server.js

**The backend will be running at http://localhost:5000.**

## Endpoints

* POST /api/ai/summarize: Summarizes the provided text.

* POST /api/ai/sentiment: Analyzes the sentiment of the provided text.

* **CRUD Endpoints for Notes:**

  * GET /api/notes: Retrieve all notes.

  * POST /api/notes: Create a new note.

  * PUT /api/notes/:id: Update an existing note.

  * DELETE /api/notes/:id: Delete a note.

## How to Run Tests:

 1. Navigate to the backend app folder:

    _cd backend_repo_name_

2. Run the tests:

    _npm test_


## Screenshots of App

<img width="1723" alt="Screenshot 2025-01-28 at 16 12 17" src="https://github.com/user-attachments/assets/660face7-e687-4840-8ff2-3878ef2dfec7" />
<img width="1715" alt="Screenshot 2025-01-28 at 16 12 58" src="https://github.com/user-attachments/assets/51025355-c869-4384-902f-8b89f2ec10ec" />
<img width="1712" alt="Screenshot 2025-01-28 at 16 13 07" src="https://github.com/user-attachments/assets/bbeae4fc-b866-403c-bfd9-f554aee26aba" />
<img width="1722" alt="Screenshot 2025-01-28 at 16 13 20" src="https://github.com/user-attachments/assets/52662f0f-9db0-4e9d-a0e4-a0fa657d096a" />
<img width="1700" alt="Screenshot 2025-01-28 at 16 14 12" src="https://github.com/user-attachments/assets/ff842d10-0f50-4bbe-baa6-3fa9c81b03b8" />
<img width="1721" alt="Screenshot 2025-01-28 at 16 14 20" src="https://github.com/user-attachments/assets/bcb5b8aa-97b3-46a0-a8e2-2238fedbdb16" />




