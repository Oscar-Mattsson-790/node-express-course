// app.js
require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

// Connect to the database
const connectDB = require("./db/connect");

// Routers
const authRouter = require("./routes/auth");
const jobsRouter = require("./routes/jobs");

// Error handling middlewares
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// Middleware setup
app.use(express.json());

// Use routers
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

// Use error handling middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

start();
