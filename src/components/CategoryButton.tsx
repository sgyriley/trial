import React from 'react';
import { Category } from '../pages/HomePage';

type CategoryButtonProps = {
  category: Category;
  onClick: (index: number) => void;
  isSelected: boolean;
};

export const CategoryButton: React.FC<CategoryButtonProps> = ({
  category,
  onClick,
  isSelected,
}) => {
  return (
    <div
      className={`${!isSelected && 'opacity-40'}`}
      onClick={() => onClick(category.id)}
    >
      <img
        src={category.image}
        alt=""
        style={{
            transition: '0.3s'
          }}
        className={`${isSelected ? 'w-28 h-28':'w-20 h-20'} object-cover rounded-full`}
      />
      <div className="text-center">{category.label}</div>
    </div>
  );
};
