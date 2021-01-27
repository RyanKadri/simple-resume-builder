window = {};

// These make the style-loader work in SSR!
styleEl = (function () {
  let contents = ""
  return {
    get contents() { return contents },
    appendChild,
    setAttribute,
    removeAttribute,
    childNodes: [],
  }
  
  function setAttribute(attr, val) {
  }

  function removeAttribute(attr) {
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