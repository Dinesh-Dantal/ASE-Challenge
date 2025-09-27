# Online Quiz App

A full-stack online quiz application where users can take quizzes and see their scores. Built with **React.js** for the frontend, **Node.js + Express** for the backend, and **MySQL** for the database. The project is containerized using **Docker** for easy deployment.

---

## Features

- Start a quiz and answer multiple-choice questions.
- Navigate between questions with “Next” and “Previous” buttons.
- Submit answers and see the score.
- Backend API handles questions, options, and scoring logic.
- Dockerized for consistent development and deployment environments.

---

## Tech Stack

- **Frontend:** React.js, Axios, React Router
- **Backend:** Node.js, Express.js, MySQL
- **Database:** MySQL
- **Containerization:** Docker, Docker Compose
- **Other:** CORS, dotenv for environment variables

---

## Folder Structure

online-quiz-app/
├─ backend/
│ ├─ server.js
│ ├─ package.json
│ ├─ Dockerfile
│ └─ .env
├─ frontend/
│ ├─ src/
│ ├─ package.json
│ ├─ Dockerfile
│ └─ ...
├─ docker-compose.yml
└─ README.md
