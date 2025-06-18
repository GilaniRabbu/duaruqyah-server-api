import connectDB from '../../db/connect';

const getAllDuas = () => {
  const db = connectDB();
  const stmt = db.prepare('SELECT * FROM dua');
  return stmt.all();
};

const getDuasByCategory = (catId: number) => {
  const db = connectDB();
  const stmt = db.prepare('SELECT * FROM dua WHERE cat_id = ?');
  return stmt.all(catId);
};

const getDuasBySubCategory = (subcatId: number) => {
  const db = connectDB();
  const stmt = db.prepare('SELECT * FROM dua WHERE subcat_id = ?');
  return stmt.all(subcatId);
};

const getDuaById = (duaId: string) => {
  const db = connectDB();
  const stmt = db.prepare('SELECT * FROM dua WHERE dua_id = ?');
  return stmt.get(duaId); // get one
};

export const DuaService = {
  getAllDuas,
  getDuasByCategory,
  getDuasBySubCategory,
  getDuaById,
};
