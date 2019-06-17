module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhancement<20){
    return { ...item,enhancement:item.enhancement+1 };
  }
  return {...item}
}

function fail(item) {
  // console.log('item ',item)
  if(item.enhancement<15){

    if(item.durability-5 >=0){
    return { ...item,durability:item.durability-5 };
    }
  }

  else if(item.enhancement===15){

    if(item.durability-10 >=0){
      // console.log('item durability ',item.durability-10)
    return { ...item,durability:item.durability-10 };
    }
  }

  else if(item.enhancement>15){

    if(item.enhancement-1 <=20){
    return { ...item,enhancement:item.enhancement-1 };
    }
  }

  return { ...item };
}

function repair(item) {
  // console.log('item durability ',item.durability)
  return { ...item,durability:100 };
}

function get(item) {
  if(item.enhancement===0){
  return { ...item };
  }
  console.log(`changed name is [+${item.enhancement}] ${item.name}`)
  return { ...item,name:`[+${item.enhancement}] ${item.name}` };
    
}
