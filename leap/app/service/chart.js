export const idList = [];

export const getID = (min = 0, max = 100) => {
  let id;
  
  min = parseInt(min);
  max = parseInt(max);

  while (id === undefined || idList.includes(id)) {
    id = parseInt(Math.random() * (max - min)) + min;
  }

  idList.push(id);
  return id;
};