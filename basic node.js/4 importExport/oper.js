

//define function
const add = (a,b) => { 
    return a + b; 
};

const multi= (a, b) => {
    return a * b;
};
//we want to export add(); and access them in index.js then we use
// module.exports = add;

const name="fayaz rashid";

module.exports = {
    add,
    name,
    multi
}