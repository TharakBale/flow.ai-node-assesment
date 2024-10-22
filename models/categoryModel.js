const db = require('./db');

const Category = {
  getAllCategories: (callback) => {
    db.all(`SELECT * FROM categories`, [], callback);
  },

  addCategory: (category, callback) => {
    const { name, type } = category;
    db.run(`INSERT INTO categories (name, type) VALUES (?, ?)`, [name, type], callback);
  }
};

module.exports = Category;
