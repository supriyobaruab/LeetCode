/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let temp = list1.concat(list2);
  //   console.log(temp);
  temp.sort(function (a, b) {
    return a - b;
  });
  return temp;
};
let list1 = [1, 2, 4];
let list2 = [1, 3, 4];
mergeTwoLists(list1, list2);
