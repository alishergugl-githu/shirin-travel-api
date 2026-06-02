const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.get("/", (req, res) => {
  res.send("Shirin Travel API ishlayapti 🚀");
});

// Booking yaratish
app.post("/api/bookings", async (req, res) => {
  try {
    const { name, phone, destination, travelers, note } = req.body;

    if (!name || !phone || !destination || !travelers) {
      return res.status(400).json({
        error: "Majburiy maydonlar to‘ldirilmagan",
      });
    }

    const result = await pool.query(
      `
      INSERT INTO bookings
      (name, phone, destination, travelers, note)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
      `,
      [name, phone, destination, Number(travelers), note || ""]
    );

    res.status(201).json({
      message: "Bron muvaffaqiyatli saqlandi",
      booking: result.rows[0],
    });
  } catch (error) {
    console.error("Booking error:", error);

    res.status(500).json({
      error: "Server xatoligi",
    });
  }
});

// Bookinglarni olish
app.get("/api/bookings", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM bookings ORDER BY created_at DESC"
    );

    res.json(result.rows);
  } catch (error) {
    console.error("Get bookings error:", error);

    res.status(500).json({
      error: "Server xatoligi",
    });
  }
});

// Booking statusini o‘zgartirish
app.put("/api/bookings/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({
        error: "Status yuborilmadi",
      });
    }

    const result = await pool.query(
      `
      UPDATE bookings
      SET status = $1
      WHERE id = $2
      RETURNING *
      `,
      [status, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: "Booking topilmadi",
      });
    }

    res.json({
      message: "Status muvaffaqiyatli yangilandi",
      booking: result.rows[0],
    });
  } catch (error) {
    console.error("Status update error:", error);

    res.status(500).json({
      error: "Server xatoligi",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});