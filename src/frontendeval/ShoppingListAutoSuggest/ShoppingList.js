import React, { useEffect, useState } from "react";
import "../../styles/ShoppingList.css";

const ShoppingList = () => {
  const [food, setFood] = useState("");
  const [shoppingList, setShoppingList] = useState([]);
  const [bucketList, setBucketList] = useState([]);

  const handleInput = (e) => {
    console.log(e.target.value);
    setFood(e.target.value);
  };

  const fetchItems = async (food) => {
    const url = `https://api.frontendeval.com/fake/food/${food}`;
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
    setShoppingList(data);
  };

  useEffect(() => {
    if (food.length >= 2) {
      fetchItems(food);
    }
  }, [food]);

  const handleShoppingList = (e) => {
    //console.log(e.target.getAttribute("data-id"));
    const idx = e.target.getAttribute("data-id");
    if (idx) {
      const obj = {
        id: Date.now(),
        data: shoppingList[idx],
        isDone: false,
      };
      const copyBucketList = [...bucketList];
      copyBucketList.push(obj);
      setBucketList(copyBucketList);
    }
    //setFood("");
  };
  //console.log(bucketList);
  const handleRightClick = (id) => {
    const copyBucketList = [...bucketList];
    const newBucketList = copyBucketList.map((item) => {
      if (item.id == id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setBucketList(newBucketList);
  };

  const handleDelete = (id) => {
    const copyBucketList = [...bucketList];
    const newList = copyBucketList.filter((item) => item.id != id);
    setBucketList(newList);
  };

  return (
    <div className="container">
      <h1>My Shopping List</h1>
      <div>
        <input type="text" value={food} onChange={handleInput} />
      </div>

      <div className="shopping-list" onClick={handleShoppingList}>
        {shoppingList.map((item, index) => {
          return (
            <div data-id={index} className="product">
              {item}
            </div>
          );
        })}
      </div>
      {food.length >= 2 ? (
        <div className="bucket">
          {bucketList.map((item) => {
            return (
              <div className="shopping-item">
                <button onClick={() => handleRightClick(item.id)}>✓</button>
                <div className={item.isDone ? `strike` : ""}>{item.data}</div>
                <button onClick={() => handleDelete(item.id)}>X</button>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default ShoppingList;
