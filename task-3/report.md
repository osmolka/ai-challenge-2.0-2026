# 📄 AI Learning Assistant Bot

## 🛠 Tools and Technologies Used

- **n8n** — main workflow engine for building the chatbot logic
- **Telegram Bot API** — for user interaction
- **OpenAI (via n8n AI nodes)** — used for:
  - generating learning summaries (Teacher AI)
  - generating quiz questions and evaluating answers (Examiner AI)
- **n8n Data Table** — for storing user state (session data)

---

## ⚙️ Techniques Used

### 1. State-Based Conversation Flow

Instead of using loops, the bot relies on **state management**:

- Each user has a `stage` (`idle`, `selecting_topic`, `quiz_in_progress`)
- The bot behavior depends on the current stage
- This approach fits Telegram’s event-driven model

### 2. Step-by-Step Interaction

- Each user message triggers a new workflow execution
- The bot processes one step at a time (question → answer → next question)

### 3. JSON Serialization

- Quiz questions are stored as a serialized JSON string
- Parsed when needed for accessing individual questions

### 4. Multiple AI Roles

- **Teacher AI** → transforms articles into structured summaries
- **Examiner AI** → generates questions and evaluates answers

---

## ✅ What Worked Well

- The **state machine approach** enabled a clean multi-step conversation flow
- AI-generated questions and feedback worked reliably and added value
- The bot successfully handles:
  - article parsing
  - topic selection
  - quiz generation
  - answer evaluation
- Separation of responsibilities (Teacher vs Examiner AI) made the logic clearer

---

## ❌ Challenges and What Did Not Work Initially

### 1. Data Loss Between Nodes

- `$json` was frequently overwritten by intermediate nodes
- This caused missing values like `message.text` or `topicIndex`

👉 Solution:
- Used explicit references like `$node["..."]`
- Enabled “Include Other Input Fields” when needed

---

### 2. UX Issues (Duplicate Messages)

- Users received multiple error messages

👉 Solution:
- Introduced context-aware conditions using `stage`
- Limited error messages to appropriate scenarios

---

## 🧠 Notable Design Decisions

### 1. No Loops — State Machine Instead

Loops do not work well with Telegram because each message triggers a new run.

👉 Decision:
Use a state-based flow to control progression.

---

### 2. Explicit Node Data Access

Instead of relying on `$json`, the workflow uses:

- `$node[...]` for stable references
- `$items(...)` for array access

This avoids unpredictable data loss.

---

### 3. Storing Questions in DB

- Questions are saved per user session
- Enables resume and consistent navigation

---

### 4. Separation of Responsibilities

- Teacher AI → content generation
- Examiner AI → testing and evaluation

This improves modularity and debugging.

---

### 5. Resetting State After Quiz

- After finishing the quiz, user state is reset to `idle`
- Prevents unintended behavior on further messages

---

## 🎯 Summary

The project demonstrates how to build a **stateful conversational AI system** using n8n.

Key outcomes:

- Multi-step interaction in a stateless execution environment
- AI-driven learning and evaluation
- Robust handling of user input and state transitions

---

Built as a practical implementation of an AI-powered learning assistant using low-code tools.
