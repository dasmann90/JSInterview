/**
 * input : [
 *          {name:'mang',gender:'boy'}.
 *          {name:'runu',gender:'girl'},
 *          {name:'runu1',gender:'girl'}
 * ]
 *
 * output : count of girls : 2
 *
 */

const arrObject = [
  { name: "mang", gender: "boy" },
  { name: "runu", gender: "girl" },
  { name: "runu1", gender: "girl" },
];

function findTotalCount(arr,key){
    // resolve with filter
    const count = arrObject.filter((x)=> x.gender === key).length;

    // resolve with reduce
    const count1 = arrObject.reduce((count, i)=>{
      return  count+(i.gender === key)
    },0)
    console.log(count1);
    
}

findTotalCount(arrObject,'boy')


