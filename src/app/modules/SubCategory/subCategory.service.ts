import connectDB from '../../db/connect';

const getAllSubCategories = () => {
  const db = connectDB();
  const stmt = db.prepare('SELECT * FROM sub_category');
  const subCategories = stmt.all();
  return subCategories;
};

const getAllCategoriesWithSubCategories = () => {
  const db = connectDB();

  // 1. Get all categories
  const categories = db.prepare('SELECT * FROM category').all();

  // 2. Get all sub-categories
  const subCategories = db.prepare('SELECT * FROM sub_category').all();

  // 3. Group sub-categories under their category
  const categorized = categories.map((cat: any) => {
    const children = subCategories.filter(
      (sub: any) => sub.cat_id === cat.cat_id
    );
    return {
      ...cat,
      subCategories: children,
    };
  });

  return categorized;
};

const getSubCategoriesByCatId = (catId: number) => {
  const db = connectDB();
  const stmt = db.prepare('SELECT * FROM sub_category WHERE cat_id = ?');
  const subCategories = stmt.all(catId);
  return subCategories;
};

export const SubCategoryService = {
  getAllSubCategories,
  getSubCategoriesByCatId,
  getAllCategoriesWithSubCategories,
};
