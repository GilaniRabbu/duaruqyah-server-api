import Database from 'better-sqlite3';
import path from 'path';

let db: Database.Database;

const connectDB = () => {
  if (db) return db;

  const dbPath = path.join(process.cwd(), 'dua_main.sqlite');

  try {
    db = new Database(dbPath, { verbose: console.log });
    console.log('✅ SQLite connected at:', dbPath);
    return db;
  } catch (error) {
    console.error('❌ SQLite connection error:', error);
    throw error;
  }
};

export default connectDB;
