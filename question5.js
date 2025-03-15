const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

// Initialize Express application
const app = express();
const PORT = 3000;

// Set up Sequelize connection to MySQL database
const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, 
});

// Define User model. database model 
const User = sequelize.define('User', {
  id: { //collumn name
    type: DataTypes.INTEGER, //datatype
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true, 
    },
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'active', 
  },
}, {
  tableName: 'users', // Explicitly defining the table name
  timestamps: false, // Disables createdAt and updatedAt fields
});

// Route to fetch all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Test database connection and start the server
const startServer = async () => {
  try {
    await sequelize.authenticate(); // Check database connection
    console.log('Connected to MySQL database successfully.');

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();
