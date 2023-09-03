// When we attended middle school were asked to simplify mathematical expressions like "3x-yx+2xy-x"
//(or usually bigger), and that was easy-peasy ("2x+xy"). But tell that to your pc and we'll see!

// Write a function: simplify, that takes a string in input, representing a multilinear non-constant
//polynomial in integers coefficients (like "3x-zx+2xy-x"), and returns another string as output where the
//same expression has been simplified in the following way ( -> means application of simplify):

// All possible sums and subtraction of equivalent monomials ("xy==yx") has been done, e.g.:
// "cb+cba" -> "bc+abc", "2xy-yx" -> "xy", "-a+5ab+3a-c-2a" -> "-c+5ab"

// All monomials appears in order of increasing number of variables, e.g.:
// "-abc+3a+2ac" -> "3a+2ac-abc", "xyz-xz" -> "-xz+xyz"

// If two monomials have the same number of variables, they appears in lexicographic order, e.g.:
// "a+ca-ab" -> "a-ab+ac", "xzy+zby" ->"byz+xyz"

// There is no leading + sign if the first coefficient is positive, e.g.:
// "-y+x" -> "x-y", but no restrictions for -: "y-x" ->"-x+y"

// N.B. to keep it simplest, the string in input is restricted to represent only multilinear non-constant
//polynomials, so you won't find something like `-3+yx^2'. Multilinear means in this context:
//of degree 1 on each variable.

// Warning: the string in input can contain arbitrary variables represented by lowercase characters
//in the english alphabet.

//solution:
//lets say poly = "2xy-yx"
function simplify(poly) {
  const terms = poly.match(/[-]?\d*[a-z]+/g).map(createTerm);
  const termMap = {};
  terms.forEach((t) => (termMap[t.vars] = (termMap[t.vars] || 0) + t.count));
  const reducedTerms = Object.keys(termMap)
    .map((k) => ({ count: termMap[k], vars: k }))
    .filter((term) => term.count !== 0);

  return reducedTerms.sort(compareTerms).map(termToString).join("");
}

function createTerm(s) {
  const sign = s[0] === "-" ? -1 : 1;
  const parsedCount = parseInt(s, 10);
  const count = isNaN(parsedCount) ? sign : parsedCount;
  const vars = s.match(/[a-z]/g).sort().join("");
  return { count: count, vars: vars };
}

function compareTerms(t1, t2) {
  const v1 = t1.vars,
    v2 = t2.vars;
  return v1.length !== v2.length
    ? v1.length - v2.length
    : v1 < v2
    ? -1
    : v1 > v2
    ? 1
    : 0;
}

function termToString(term, pos) {
  var n = term.count;
  var ns =
    n === -1
      ? "-"
      : n === 1 && pos === 0
      ? ""
      : n === 1
      ? "+"
      : n > 0 && pos === 0
      ? String(n)
      : n < 0
      ? String(n)
      : `+${n}`;
  return ns + term.vars;
}

//sample run:
console.log(simplify("dc+dcba")); // "cd+abcd"
console.log(simplify("2xy-yx")); // "xy"
console.log(simplify("-a+5ab+3a-c-2a")); // "-c+5ab"
console.log(simplify("-abc+3a+2ac")); // "3a+2ac-abc"
