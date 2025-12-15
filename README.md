# Task Manager – Angular Front-End

This project is a **task manager front-end** built with **Angular**, **TypeScript**, **HTML**, and **CSS**.

The application allows each user to **create, view and delete tasks (CRUD)**.  
Tasks have a title, summary and due date, and are linked to a specific user, so each user only sees their own tasks.

The project follows the **standard Angular folder structure**, using **standalone components** and a clear separation between layout, components and styles.  
Task data is stored in the browser using `localStorage`, so it persists between page reloads.

---

## Features

- **User-based tasks**
  - Select a user and see only that user’s tasks.
- **Task CRUD**
  - Create new tasks, list existing tasks and remove completed ones.
- **Modal form for new tasks**
  - Simple form with title, summary and due date.
- **Persistent data**
  - Tasks are saved in `localStorage` on the client side.

---

## Tech Stack

- **Framework:** Angular
- **Language:** TypeScript
- **Markup & Styles:** HTML, CSS
- **Storage:** Browser `localStorage`

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- Angular CLI installed globally (optional but recommended):

```bash
npm install -g @angular/cli
```
