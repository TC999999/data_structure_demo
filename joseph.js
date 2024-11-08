// Solves the classic josephus algorithm. among a certain group of size "size", who would be the final survivor if we skipped every "skip" person

function JosephusSurvivor(size, skip) {
  let jLL = new LinkedList();

  for (let i = 1; i <= size; i++) {
    jLL.push(i);
  }

  let skipVal = skip;
  let skipCount = skip - 1;

  while (jLL.length > 1) {
    jLL.removeAt(skipCount);
    skipCount += skipVal - 1;

    while (skipCount >= jLL.length) {
      skipCount = skipCount - jLL.length;
    }
  }

  return jLL.head.val;
}
