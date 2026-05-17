# 🤖 AI Learning Assistant Bot

An AI-powered Telegram bot built with n8n that helps users learn from articles and test their knowledge through interactive quizzes.

`@a1_learning_assistant_bot`

---

## 🚀 Features

- Learn from any article via URL  
- AI-generated summaries  
- Dynamic quiz generation (5 questions per topic)  
- Open-ended answers (no multiple choice)  
- Intelligent answer validation (semantic, not exact match)  
- Score tracking and feedback  
- Multi-step conversational flow with state management  

---

## ⚙️ How It Works

The bot integrates:

- n8n workflows for automation  
- Telegram Bot API for user interaction  
- AI agents:  
  - Teacher AI — generates summaries  
  - Examiner AI — generates questions and evaluates answers  
- Data Table — stores user session state  

---

## 🧭 Usage Guide

### 1. Start the bot

`/start`

Displays available commands.

---

### 2. Learn from an article

`/learn <URL>`

Example:

`/learn https://react.dev/learn/typescript`

The bot will:
- fetch the content  
- extract key information  
- generate a structured summary  

---

### 3. Start a quiz

`/quiz`

The bot will:
- show a list of available topics  
- ask you to choose one  

---

### 4. Choose a topic

Reply with a number:

1  
2  
3  

The bot will:
- select the topic  
- generate 5 questions  
- start the quiz  

---

### 5. Answer questions

For each question:
- type your answer in your own words  
- send it  

The bot will:
- evaluate your answer using AI  
- provide feedback  
- move to the next question  

---

### 6. Finish the quiz

After all questions:

- displays your score  
- sends completion message  

---

### 🔁 Restart

To start a new quiz:

`/quiz`

---

## 🧠 Key Design Decisions

- State-based flow instead of loops  
- Questions stored as serialized JSON  
- Index-based navigation through quiz  
- Separate AI agents for learning and testing  

---

## ⚠️ Notes

- Topic selection works only after starting quiz  
- Invalid selection appears only during topic selection  
- Answers are evaluated semantically  
- User state is reset after quiz completion  

---

## ✅ Tech Stack

- n8n  
- Telegram Bot API  
- OpenAI  
- Data Table  

---

## 🎯 Goal

This bot simulates a personal AI tutor that explains material, tests understanding, and provides feedback.

---

## 💡 Possible Improvements

- Inline buttons instead of numeric input  
- Show score per question  
- Add retry for incorrect answers  
- Track progress across sessions  

---

Built with ❤️ using n8n and AI
