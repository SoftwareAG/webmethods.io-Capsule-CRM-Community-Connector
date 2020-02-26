module.exports = {
  label: "Connect to CapsuleCRM",
  mock_input: {},
  input: {
    type: "object",
    properties: {
      access_token: {
        type: "string",
        minLength: 1,
        label: "Access Token"
      }
    }
  },
  validate: function(input, output) {
    output(null, true);
  }
};
