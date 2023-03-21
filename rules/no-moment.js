module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "disallow importing of the moment library",
      category: "Best Practices",
      recommended: true,
    },
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        const importValue = node.source.value;
        if (importValue === "moment") {
          context.report({
            node: node,
            message: "Do not import the moment library",
          });
        }
      },
    };
  },
};
