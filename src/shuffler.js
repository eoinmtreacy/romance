export const shuffler = (arr) => {
  let copy = [...arr];

  const shuffledArr = copy.sort(() => Math.random() - 0.5);
  console.log(shuffledArr)
  return(shuffledArr);
  };  