export function lvs(s, t) {
  if (s === t) {
      return 0;
  }

  const ignorePattern = / ?\([^)]*\)/g; // Regular expression to match text within brackets with optional leading space

    s = s.replace(ignorePattern, ''); // Remove text within brackets from string s
    t = t.replace(ignorePattern, ''); // Remove text within brackets from string t

    var n = s.length,
        m = t.length;

  
  var n = s.length,
      m = t.length;
  if (n === 0 || m === 0) {
      return n + m;
  }
  var x = 0,
      y,
      a,
      b,
      c,
      d,
      g,
      h,
      k;
  var p = new Array(n);
  for (y = 0; y < n; ) {
      p[y] = ++y;
  }

  for (; x + 3 < m; x += 4) {
      var e1 = normalizeCharacter(t.charAt(x));
      var e2 = normalizeCharacter(t.charAt(x + 1));
      var e3 = normalizeCharacter(t.charAt(x + 2));
      var e4 = normalizeCharacter(t.charAt(x + 3));
      c = x;
      b = x + 1;
      d = x + 2;
      g = x + 3;
      h = x + 4;
      for (y = 0; y < n; y++) {
          k = normalizeCharacter(s.charAt(y));
          a = p[y];
          if (a < c || b < c) {
              c = a > b ? b + 1 : a + 1;
          } else {
              if (e1 !== k) {
                  c++;
              }
          }

          if (c < b || d < b) {
              b = c > d ? d + 1 : c + 1;
          } else {
              if (e2 !== k) {
                  b++;
              }
          }

          if (b < d || g < d) {
              d = b > g ? g + 1 : b + 1;
          } else {
              if (e3 !== k) {
                  d++;
              }
          }

          if (d < g || h < g) {
              g = d > h ? h + 1 : d + 1;
          } else {
              if (e4 !== k) {
                  g++;
              }
          }
          p[y] = h = g;
          g = d;
          d = b;
          b = c;
          c = a;
      }
  }

  for (; x < m; ) {
      var e = normalizeCharacter(t.charAt(x));
      c = x;
      d = ++x;
      for (y = 0; y < n; y++) {
          a = p[y];
          if (a < c || d < c) {
              d = a > d ? d + 1 : a + 1;
          } else {
              if (e !== normalizeCharacter(s.charAt(y))) {
                  d = c + 1;
              } else {
                  d = c;
              }
          }
          p[y] = d;
          c = a;
      }
      h = d;
  }

  return h;
}

function normalizeCharacter(char) {
  const normalizationMap = {
      'a': 'a', 'á': 'a', 'à': 'a', 'â': 'a', 'ä': 'a', 'ã': 'a', 'å': 'a',
      'b': 'b',
      'c': 'c', 'ç': 'c',
      'd': 'd',
      'e': 'e', 'é': 'e', 'è': 'e', 'ê': 'e', 'ë': 'e',
      'f': 'f',
      'g': 'g',
      'h': 'h',
      'i': 'i', 'í': 'i', 'ì': 'i', 'î': 'i', 'ï': 'i',
      'j': 'j',
      'k': 'k',
      'l': 'l',
      'm': 'm',
      'n': 'n', 'ñ' : 'n',
      'o': 'o', 'ó': 'o', 'ò': 'o', 'ô': 'o', 'ö': 'o', 'õ': 'o', 'ø': 'o',
      'p': 'p',
      'q': 'q',
      'r': 'r',
      's': 's', 'ß': 's',
      't': 't',
      'u': 'u', 'ú': 'u', 'ù': 'u', 'û': 'u', 'ü': 'u',
      'v': 'v',
      'w': 'w',
      'x': 'x',
      'y': 'y', 'ý': 'y',
      'z': 'z',
  };
  const normalizedChar = char.toLowerCase(); // Normalize to lowercase before mapping
  return normalizationMap[normalizedChar] || char;
}

