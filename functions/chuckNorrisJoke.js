




exports.handler = async function (event, context) {
    const fetch = (await import('node-fetch')).default;
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const joke = await response.json();

    return {
        statusCode: 200,
        body: JSON.stringify({ message: joke.value })
    };
};
