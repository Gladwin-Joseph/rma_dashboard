const express = require("express");
const sql = require("mssql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const dbConfig = {
  user: 'SahilT',
  password: 'sahil@0718',
  server: '192.168.100.1', 
  database: 'RashiPortal_Live',
  options: {
    encrypt: false, 
    enableArithAbort: true,
  },
};

// Endpoint to fetch notification counts by branch
app.get("/api/rpmoscounts", async (req, res) => {
  try {
    const pool = await sql.connect(dbConfig);
    const query = `
       SELECT 
          COUNT(*) AS Total_Rpmos_Created,
          COUNT(CASE WHEN SONumber IS NULL THEN 1 END) AS Null_SONumber_Count,
          COUNT(CASE WHEN SONumber IS NOT NULL THEN 1 END) AS Not_Null_SONumber_Count
      FROM 
          stockmaster
      WHERE 
          pkey = 'RPMOS'
          AND CreatedOn >= '2024-10-01'
    `;
    const result = await pool.request().query(query);
    res.json(result.recordset);
  } catch (err) {
    console.error("Database query error:", err);
    res.status(500).send("Database query error");
  }
});

app.get("/api/srpmoscounts", async (req, res) => {
  try {
    const pool = await sql.connect(dbConfig);

    // SQL query to get counts based on the conditions for SRPMOS
    const query = `
      SELECT 
          COUNT(*) AS Total_SRPMOS_Created,
          COUNT(CASE WHEN SONumber IS NULL THEN 1 END) AS Null_SONumber_Count,
          COUNT(CASE WHEN SONumber IS NOT NULL THEN 1 END) AS Not_Null_SONumber_Count
      FROM 
          stockmaster
      WHERE 
          pkey = 'SRPMOS'
          AND CreatedOn >= '2024-10-01';
    `;

    const result = await pool.request().query(query);
    res.json(result.recordset[0]); // Return the first record as a JSON response
  } catch (err) {
    console.error("Database query error:", err);
    res.status(500).send("Database query error");
  }
});

app.get("/api/regiccounts", async (req, res) => {
  try {
    const pool = await sql.connect(dbConfig);

    // SQL query to get counts based on the conditions for SRPMOS
    const query = `
      SELECT 
          COUNT(*) AS Total_REGIC_Created,
          COUNT(CASE WHEN SONumber IS NULL THEN 1 END) AS Null_SONumber_Count,
          COUNT(CASE WHEN SONumber IS NOT NULL THEN 1 END) AS Not_Null_SONumber_Count
      FROM 
          stockmaster
      WHERE 
          pkey = 'REGIC'
          AND CreatedOn >= '2024-10-01';
    `;

    const result = await pool.request().query(query);
    res.json(result.recordset[0]); // Return the first record as a JSON response
  } catch (err) {
    console.error("Database query error:", err);
    res.status(500).send("Database query error");
  }
});

app.get("/api/sregiccounts", async (req, res) => {
  try {
    const pool = await sql.connect(dbConfig);

    // SQL query to get counts based on the conditions for SRPMOS
    const query = `
      SELECT 
          COUNT(*) AS Total_SREGIC_Created,
          COUNT(CASE WHEN SONumber IS NULL THEN 1 END) AS Null_SONumber_Count,
          COUNT(CASE WHEN SONumber IS NOT NULL THEN 1 END) AS Not_Null_SONumber_Count
      FROM 
          stockmaster
      WHERE 
          pkey = 'SREGIC'
          AND CreatedOn >= '2024-10-01';
    `;

    const result = await pool.request().query(query);
    res.json(result.recordset[0]); // Return the first record as a JSON response
  } catch (err) {
    console.error("Database query error:", err);
    res.status(500).send("Database query error");
  }
});

app.get("/api/rep2pscounts", async (req, res) => {
  try {
    const pool = await sql.connect(dbConfig);

    // SQL query to get counts based on the conditions for SRPMOS
    const query = `
      SELECT 
          COUNT(*) AS Total_REP2PS_Created,
          COUNT(CASE WHEN SONumber IS NULL THEN 1 END) AS Null_SONumber_Count,
          COUNT(CASE WHEN SONumber IS NOT NULL THEN 1 END) AS Not_Null_SONumber_Count
      FROM 
          stockmaster
      WHERE 
          pkey = 'REP2PS'
          AND CreatedOn >= '2024-10-01';
    `;

    const result = await pool.request().query(query);
    res.json(result.recordset[0]); // Return the first record as a JSON response
  } catch (err) {
    console.error("Database query error:", err);
    res.status(500).send("Database query error");
  }
});

app.get("/api/rpsrcounts", async (req, res) => {
  try {
    const pool = await sql.connect(dbConfig);

    // SQL query to get counts based on the conditions for SRPMOS
    const query = `
      SELECT 
          COUNT(*) AS Total_RPSR_Created,
          COUNT(CASE WHEN SONumber IS NULL THEN 1 END) AS Null_SONumber_Count,
          COUNT(CASE WHEN SONumber IS NOT NULL THEN 1 END) AS Not_Null_SONumber_Count
      FROM 
          stockmaster
      WHERE 
          pkey = 'RPSR'
          AND CreatedOn >= '2024-10-01';
    `;

    const result = await pool.request().query(query);
    res.json(result.recordset[0]); // Return the first record as a JSON response
  } catch (err) {
    console.error("Database query error:", err);
    res.status(500).send("Database query error");
  }
});

app.get("/api/rep2ppcounts", async (req, res) => {
  try {
    const pool = await sql.connect(dbConfig);

    // SQL query to get counts based on the conditions for SRPMOS
    const query = `
      SELECT 
          COUNT(*) AS Total_REP2PP_Created,
          COUNT(CASE WHEN SONumber IS NULL THEN 1 END) AS Null_SONumber_Count,
          COUNT(CASE WHEN SONumber IS NOT NULL THEN 1 END) AS Not_Null_SONumber_Count
      FROM 
          stockmaster
      WHERE 
          pkey = 'REP2PP'
          AND CreatedOn >= '2024-10-01';
    `;

    const result = await pool.request().query(query);
    res.json(result.recordset[0]); // Return the first record as a JSON response
  } catch (err) {
    console.error("Database query error:", err);
    res.status(500).send("Database query error");
  }
});


app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
