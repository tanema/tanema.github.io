export const randPick = (list, exclude) => {
  const index = ~~( Math.random() * list.length );
  const item = list[ index ];
  if(exclude && exclude.includes(item)) {
    return randPick(list, exclude)
  }
  return item;
}

export const pickMult = (list, count, exclude) => {
  const output = [];
  exclude = exclude || [];
  for(let i = 0; i < count; i++) {
    let item = randPick(list, exclude);
    exclude.push(item)
    output.push(item)
  }
  return output
}
