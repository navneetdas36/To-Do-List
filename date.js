
 //whatever we are exporting here goes to where we require it.Take care we are not putting parantheses
                        //it's exports not export.
module.exports.getDate=function(){ //ananymous func.

let today=new Date();

let options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

return today.toLocaleDateString("en-US", options);
};

module.exports.getDay=function(){
  let today=new Date();

  let options={
    weekday:'long'
  }

  return today.toLocaleDateString("en-US",options);
};
