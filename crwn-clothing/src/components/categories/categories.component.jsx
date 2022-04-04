import './categories.styles.scss';
import CategoriesData from '../data/categories';
import CategoryItem from '../category-item/category-item.component';

const Categories = () => {
  return (
    <div className="categories-container">
      {CategoriesData.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
    // <Categories />
  );
};

export default Categories;
