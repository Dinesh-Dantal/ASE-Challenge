const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MySQL
let db;
async function initDb() {
  const db = await mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "Dinesh@1245",
  database: process.env.DB_NAME || "quiz_app",
});
  console.log("Connected to MySQL");
}

initDb();


app.get("/api/quiz", async (req, res) => {
  try {
    const [questions] = await db.execute("SELECT * FROM questions");
    const [options] = await db.execute("SELECT * FROM options");

    const data = questions.map(q => ({
      id: q.id,
      text: q.text,
      options: options.filter(o => o.question_id === q.id).map(o => ({
        id: o.id,
        text: o.text
      }))
    }));

    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.post("/api/quiz/submit", async (req, res) => {
  try {
    const { answers } = req.body;
    const [correct] = await db.execute("SELECT * FROM options WHERE is_correct = 1");

    const correctMap = {};
    correct.forEach(c => { correctMap[c.question_id] = c.id; });

    const results = answers.map(a => ({
      questionId: a.questionId,
      isCorrect: correctMap[a.questionId] === a.optionId
    }));

    const score = results.filter(r => r.isCorrect).length;
    res.json({ score, total: results.length, results });
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen(5000,()=>{
    console.log("listing")
});

