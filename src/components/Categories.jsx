import { Link, useLoaderData } from "react-router-dom";

const Categories = () => {
  const categories = useLoaderData();
  // console.log(categories);

  return (
    <div className="text-center">
      <h2 className="mb-2 font-semibold text-xl"> Categories</h2>
      <div className="flex flex-col gap-3">
        {categories.map((category) => (
          <Link
            to={`/category/${category.category_name}`}
            key={category.category_id}
            className="btn"
          >
            {category.category_name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
