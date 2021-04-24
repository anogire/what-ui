class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  pageCount = () => Math.ceil(this.itemCount() / this.itemsPerPage);

  itemCount = () => this.collection.length;

  pageIndex(itemIndex) { // на какой странице располагается элемент itemIndex
    const pageInd = Math.floor(itemIndex / this.itemsPerPage);
    return (itemIndex < 0 || this.itemCount() <= itemIndex) ? -1 : pageInd;
  }

  pageItemCount(pageIndex) { // количество элементов на странице pageIndex
    if (pageIndex < 0 || pageIndex >= this.pageCount()) {
      return -1;
    }
    const pageItem = this.itemCount() - this.itemsPerPage * pageIndex; // сколько элементов осталось разместить
    return Math.min(this.itemsPerPage, pageItem);
  }
}


console.log('\nTask #1. PaginationHelper');
const helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);

console.log(helper.pageCount()); //should == 2
console.log(helper.itemCount()); //should == 6

console.log(helper.pageItemCount(0)); //should == 4
console.log(helper.pageItemCount(1)); // last page - should == 2
console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid

console.log(helper.pageIndex(5)); //should == 1 (zero based index)
console.log(helper.pageIndex(2)); //should == 0
console.log(helper.pageIndex(20)); //should == -1
console.log(helper.pageIndex(-10)); //should == -1