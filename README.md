Here’s a clean, concise README for your **ThinkBoard** project:

---

# ThinkBoard 🧠

A beginner-friendly MERN stack note-taking app 

---

## ✨ Highlights

* **Full-Stack MERN** – MongoDB, Express, React, Node
* **CRUD Notes** – Create, update, delete notes with title & description
* **REST API** – Learn HTTP methods and status codes
* **Rate Limiting** – Powered by Upstash Redis
* **Responsive UI** – Works well on desktop and mobile
* **Beginner-Friendly** – Build a real-world app step-by-step

---

## 🚀 Setup

### 1. Backend

Create a `.env` in `/backend`:

```bash
MONGO_URI=<your_mongo_uri>
UPSTASH_REDIS_REST_URL=<your_redis_rest_url>
UPSTASH_REDIS_REST_TOKEN=<your_redis_rest_token>
NODE_ENV=development
```

Run:

```bash
cd backend
npm install
npm run dev
```

### 2. Frontend

Run:

```bash
cd frontend
npm install
npm run dev
```


---

## 🛠️ API Endpoints

| Route            | Method | Description    |
| ---------------- | ------ | -------------- |
| `/api/notes`     | GET    | List all notes |
| `/api/notes`     | POST   | Add a new note |
| `/api/notes/:id` | PUT    | Update a note  |
| `/api/notes/:id` | DELETE | Remove a note  |

---




