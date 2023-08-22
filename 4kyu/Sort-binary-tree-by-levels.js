//You are given a binary tree:
// class Node {
//     constructor(value, left = null, right = null) {
//       this.value = value;
//       this.left  = left;
//       this.right = right;
//     }
//   }
//   Your task is to return the list with elements from tree sorted by levels, which means the root element goes first, then root children (from left to right) are second and third, and so on.

//   Return empty array if root is null.

//   Example 1 - following tree:

//                    2
//               8        9
//             1  3     4   5
//   Should return following list:

//   [2,8,9,1,3,4,5]
//   Example 2 - following tree:

//                    1
//               8        4
//                 3        5
//                            7
//   Should return following list:

//   [1,8,4,3,5,7]

//solution:

class Node {
  //this constructor means that if left and right are not specified, they will be null
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function treeByLevels(node) {
  let result = [];
  let queue = [];
  if (node) queue.push(node);
  //if our node is Node{ value: 2, left: Node { value: 8, left: [Node], right: [Node] }, right: Node { value: 9, left: [Node], right: [Node] } } then queue = [Node { value: 2, left: [Node], right: [Node] }]
  while (queue.length > 0) {
    let node = queue.shift(); //shift() removes the first element from an array and returns that removed element. This method changes the length of the array.
    result.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return result;
}

//sample run:
console.log(treeByLevels(null)); // []
console.log(treeByLevels(new Node(1))); // [1]
console.log(treeByLevels(new Node(2, new Node(1), new Node(3)))); // [2, 1, 3]
console.log(
  treeByLevels(
    new Node(
      2,
      new Node(8, new Node(1), new Node(3)),
      new Node(9, new Node(4), new Node(5))
    )
  )
); // [2, 8, 9, 1, 3, 4, 5]
