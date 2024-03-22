// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {
    let sentence = event.queryStringParameters.sentence || ''
    let upper = false;
    let obnoxiousSentence = '';
    for (let c of sentence) {
      if (c.toLowerCase() != c.toUpperCase()) {
        c = upper ? c.toUpperCase() : c.toLowerCase();
        upper = !upper;
      }
      obnoxiousSentence += c;
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ sentence: obnoxiousSentence }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      }
    }
  } catch (error) {
    return {
      statusCode: 500, 
      body: error.toString(), 
      headers: {
        "Access-Control-Allow-Origin": "*",
      }
    }
  }
}

module.exports = { handler }
