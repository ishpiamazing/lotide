
const tail = function(arr) {
  
  const trail = [];
  for (let i = 1; i < arr.length; i++) {
   
    trail.push(arr[i]);
  }
  return trail;
};



module.exports = tail;








