let testing = [
    { name: 'a', no: '10.00' },
    { name: 'b', no: '2.00' },
    { name: 'c', no: '2.00' },
   { name: 'd', no: '0.00' },
  { name: 'e', no: '-3.00' },
]

let data = [];
for(let idx = 0; idx < testing.length; idx++){
    if(testing[idx].no > 0){
        data.push(testing[idx]);
    }
};

console.log(data);
let temp = 0;
let val;
for(let i = 0; i < data.length-1; i++){
    for(let j = 1; j < data.length; j++){
        if(data[i].no < data[j].no){
            val = i;
        }else if(data[j].no < data[i].no){
            val = j;
        }

        if(temp > val){
            temp == val
        }
    }
    console.log(temp);
}

// let testing2 = [];
// testing2.push(res);

// for(let i = 0; i < testing.length; i++){
//     if(testing[i].name != res.name){
//         let val = {"name" : testing[i].name, "no" : "0.00"}
//         testing2.push(val)
//     }
// }

// console.log(testing2);
























