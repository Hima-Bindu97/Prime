function isPrime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }
  else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}
  var assert=require('assert');
  assert(isPrime(5),"Testcase1 passed");
  assert(isPrime(12),"Testcase2 passed");
  assert(isPrime(0),"Testcase3 passed");
  assert(isPrime(20),"Testcase4 passed");


  console.log("All testcases passed");