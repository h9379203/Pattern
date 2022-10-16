const revlng = (() => {
  const a = 1
  const b = () => 2
  const public = {
    c : 2,
    d : () => 3
  }
  return public
})()
console.log(revlng)
console.log(revlng.a)
