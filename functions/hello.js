// domain/.netlify/functions/hello
const items = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Kerry' },
  { id: 3, name: 'Tim' },
];
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
