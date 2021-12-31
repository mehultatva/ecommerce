const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@assets": "src/assets",
    "@components": "src/components",
    "@view": "src/view",
    "@utils": "src/utils",
  })(config);

  return config;
};
