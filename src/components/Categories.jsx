import React, {useState} from "react";

const Categories = ({ items, onClickItem }) => {
const [activeItem, setActiveItem] = useState('')
  return (
    <>
      <div className="categories">
        <ul>
          {
          items &&
          items.map((item, idx) => {
            return (
              <li
              className={activeItem === idx ? 'active' : ''}
              onClick={() => setActiveItem(idx)}
               key={idx}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Categories;
