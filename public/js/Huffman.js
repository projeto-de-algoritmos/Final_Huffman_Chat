class Huffman {
  encode(data) {
    let freq = {};
    let tree = new Heap(e => e[0]);

    for (let i = 0; i < data.length; i++) {
      if (freq.hasOwnProperty(data[i])) freq[data[i]]++;
      else freq[data[i]] = 1;
    }

    Object.keys(freq)
      .sort((a, b) => ~~(Math.random() * 2))
      .map(e => tree.push([freq[e], e]));

    while (tree.length > 1) {
      let [first, second] = [tree.pop(), tree.pop()];
      tree.push([first[0] + second[0], [first[1], second[1]]]);
    }

    let dict = {};
    let recurse = function(root, string) {
      if (root.constructor === Array) {
        recurse(root[0], string + "0");
        recurse(root[1], string + "1");
      } else {
        dict[root] = string;
      }
    };

    tree.items = tree.pop()[1];
    recurse(tree.items, "");

    let result = "";
    for (let i = 0; i < data.length; i++) result += dict[data.charAt(i)];

    let header =
      Object.keys(dict)
        .map(e => e.charCodeAt(0) + "|" + dict[e])
        .join("-") + "/";

    return { tree: header, coded: result, formattedTree: dict };
  }

  decode(string) {
    string = string.split("/");
    let data = string[1].split(""),
      header = {};

    string[0].split("-").map(e => {
      let values = e.split("|");
      header[values[1]] = String.fromCharCode(values[0]);
    });

    let result = "";
    while (data.length) {
      let cur = "";
      while (data.length) {
        cur += data.shift();

        if (header.hasOwnProperty(cur)) {
          result += header[cur];
          break;
        }
      }
    }

    return result;
  }
}
