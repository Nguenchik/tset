import { GoodModel } from "@/models/GoodModel";
import { useCurrency } from "@/composition/useCurrency";

export const mergeId = (obj, Model, id) => {
  return Object.entries(obj).map((item) => {
    const [groupId, category] = item;
    category[id] = parseInt(groupId);
    return new Model(category);
  });
};

export const createResult = (arr) => {
  return arr.reduce((acc, cur) => {
    const obj = {
      products: [],
    };
    const hasCategory = acc.some((el) => {
      return el.category === cur.category;
    });
    if (!hasCategory) {
      obj.products.push(new GoodModel({ ...cur.product, ...cur }));
      acc.push({ ...cur, ...obj });
    } else {
      const curObj = acc.find((el) => el.category === cur.category);
      curObj.products.push(new GoodModel({ ...cur.product, ...cur }));
    }
    return acc;
  }, []);
};

export const randomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const changePriceToRub = (val) => {
  const { current } = useCurrency();
  return (val * current.value).toFixed(2);
};
