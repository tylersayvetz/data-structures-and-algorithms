const isSymmetric = function (root) {
  const RFQueue = [root];
  const LFQueue = [root];

  while (RFQueue.length && LFQueue.length) {
    const currRight = RFQueue.shift();
    const currLeft = LFQueue.shift();

    //if one is null and the other is not. return false.
    if ((currRight && !currLeft) || (!currRight && currLeft)) {
      return false;
      //if theyre both nodes.
    } else if (currRight && currLeft) {
      // the values are not equal
      if (currRight.val !== currLeft.val) {
        return false;
      } else {
        //right queue gets the right child first
        RFQueue.push(currRight.right);
        RFQueue.push(currRight.left);

        //left queue gets the left child first.
        LFQueue.push(currLeft.left);
        LFQueue.push(currLeft.right);
      }
    }
  }
  return true;
};
