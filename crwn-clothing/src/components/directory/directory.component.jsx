import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss';
const Directory = ({ categoriesData }) => {
  return (
    <div className="directory-container">
      {categoriesData.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
