require("dotenv").config();


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Routes import (ALL together)
const authRoutes = require("./routes/auth");
const examRoutes = require("./routes/exam");


// ✅ Use routes (ALL together)
app.use("/api", authRoutes);
app.use("/api", examRoutes);


// ✅ Test Route
app.get("/", (req, res) => {
  res.send("Backend running successfully");
});

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// ✅ Server start
// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});