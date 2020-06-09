var randomItemGenerator = function(n) {
  var result = []
  for (var i = 0; i < n; i++) {
    var parentId = parseInt(Math.random() * n)
    result.push({ id: i, name: 'item-' + i, parentId: parentId })
  }
  return result
}
 
var itemList = randomItemGenerator(10)


// resurcive function degiskenleri
var globalArr = [],
  count = 0;


/* resurcive function */
var convertToTree = function(mainArr) {
  count += 1;

  var changeFunc = function(arr){
    for(index in arr){
      // tum degiskenlere children property'si set ediliyor
      arr[index].children = [];
      // filter ile parentId ve id eslesmesi yapiliyor
      var subItem = arr.filter(item => item.parentId === arr[index].id);
      // tespit sorgusu
      if (subItem.length === 0) {
        arr.push({id: arr.length, name: 'item-'+arr.length, parentId: arr[index].id, children: [] })
      };
      // aktif objeye children icerikleri basiliyor
      arr[index].children.push(subItem)
    }
  };

  changeFunc(mainArr)





  /* count durdurma */
  if(count > 5){
    return false;
  } else {
    convertToTree(mainArr)
  }
  
  globalArr = mainArr
}



convertToTree(itemList)
console.log(globalArr)
