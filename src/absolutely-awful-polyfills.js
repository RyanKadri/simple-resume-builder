window = {};
styleEl = (function () {
  let contents = ""
  return {
    get contents() { return contents },
    appendChild,
    setAttribute,
    childNodes: [],
  }
  
  function setAttribute(attr, val) {
    console.log(`${attr}="${val}"`)
  }

  function appendChild(txt) {
    contents = contents + txt;
  }
})()

document = { 
  all: true,
  createElement: (tag) => {
    return styleEl;
  },
  createTextNode: (txt) => {
    return txt;
  },
  querySelector() {
    return {
      appendChild() {

      }
    }
  } 
};