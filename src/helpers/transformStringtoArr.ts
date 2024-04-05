function transformStringtoArr(chr: string) {
  const arr = chr?.split("$$");
  return arr;
}

export default transformStringtoArr;
