/* This method takes two array, and shows the intersection, the duplicated data in both arrays. */

var seta = [5,10,4,7,1,3]; 
 var setb =[3,11,1,10,2,6];
 var duplicatedvalues = [...
    new Set (seta)].filter((x)=>setb.includes(x));
 console.log(duplicatedvalues);