import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Categories = memo(function Categories({ activeCategoryIndex, items, onClickCategory }) {
  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onClickCategory(null)}
          className={activeCategoryIndex === null ? 'active' : ''}>
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeCategoryIndex === index ? 'active' : ''}
              onClick={() => onClickCategory(index)}
              key={`${name}_${index}`}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  // activeCategoryIndex: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = { activeCategoryIndex: null, items: [] };

export default Categories;
