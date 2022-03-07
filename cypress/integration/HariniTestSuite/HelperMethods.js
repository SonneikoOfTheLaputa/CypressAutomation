 function getMonthFromString(mon){

    var d = Date.parse(mon + "1, 2022");
    if(!isNaN(d)){
       return new Date(d).getMonth() ;
    }
    return -1;
  }
  export {  getMonthFromString };