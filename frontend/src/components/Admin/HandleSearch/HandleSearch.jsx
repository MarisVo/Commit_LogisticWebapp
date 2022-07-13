export const handleSearch = (dataToFilter, input, setDataRender, ) => {
  
  const filteredData = dataToFilter.filter((el) => {
    //if no input the return the original
    if (input === "") {
      return el;
    }
    //return the item which contains the user input
 
    else {
      el.item.toLowerCase().includes(input);
     
    }
  });
  // console.log(filteredData);
  setDataRender(filteredData);
};
