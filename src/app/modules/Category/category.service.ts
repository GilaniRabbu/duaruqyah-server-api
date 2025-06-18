import connectDB from '../../db/connect'; // adjust the path if needed

const getAllCategories = () => {
  const db = connectDB();
  const stmt = db.prepare('SELECT * FROM category');
  const categories = stmt.all();
  return categories;
};

export const CategoryService = {
  getAllCategories,
};
