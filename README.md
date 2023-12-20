# Client side for QuizWiz Application

## Project Overview

The QuizWiz front-end system is an integral part of an educational application designed to assist students in revising and enhancing their knowledge. This platform focuses on note-taking and engages users in AI-generated quizzes based on their notes. The quizzes are designed in a multiple-choice format, serving as a valuable tool for study and comprehensive revision.

This application efficiently utilizes MongoDB for managing and storing diverse information. It encompasses historical records of questions and their corresponding answers, user scores, notes, and registration details. These components synergistically contribute to the functionality and effective data management within the QuizWiz application.

## Features
- Create, organize, and store notes.
- Set timers for note-taking sessions.
- Take quizzes based on the notes taken.
- Receive scores based on quiz performance.
- View a leaderboard featuring top scorers.

## Installation and Setup

For full functionality, the front-end needs to be coupled with the back-end. You can download the back-end repository from `git@github.com:nine96as/reddy31_server.git`.

### Front-End Setup

Clone the repository and navigate into it:

```bash
git clone <repository_url> && cd $_
```

Install dependencies and start the application:

```bash
npm i && npm run dev
```

After both front-end and back-end setups, you can access the app via the following link:
http://localhost:5173/

## Future Improvements
- add possibility to get questions on specific topics.

## Known issues
- The fairness of the leaderboard is impacted as question difficulty varies based on user notes.

## Contributor

<a href="https://github.com/AleFin95/Client-Repo/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=AleFin95/Client-Repo" />
</a>