let testing = [
    { name: 'a', no: '1.00' },
    { name: 'b', no: '11.00' },
    { name: 'c', no: '12.00' },
   { name: 'd', no: '0.00' },
  { name: 'e', no: '-3.00' },
]

let data = [];
for(let idx = 0; idx < testing.length; idx++){
    if(testing[idx].no > 0){
        data.push(testing[idx]);
    }
};

const res = data.reduce((prev,curr)=>{
    return prev.no > curr.no ? prev : curr;
});

let testing2 = [];
testing2.push(res);

for(let i = 0; i < testing.length; i++){
    if(testing[i].name != res.name){
        let val = {"name" : testing[i].name, "no" : "0.00"}
        testing2.push(val)
    }
}

console.log(testing2);