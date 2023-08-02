export const shuffler = (arr) => {
    const output = [];
    // while there are items
    let i = 0;
    while (i < 30) {
      let pos = Math.floor(Math.random() * arr.length);
      let each = arr[pos];
  
      output.push(each);
      i++;
    }
  
    console.log(output);
    return output;
  };
  