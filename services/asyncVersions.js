// write a fn tor etrieve a blob of JSON
// make an ajax request using the 'fetch' function

function fetchAlbumsOld() {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(json => console.log(json));
}

// refactor to async/await
async function fetchAlbumsAsync() {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const json = await res.json()
    console.log(json);
}

// refactor to async/await
const fetchAlbumsAsync2 = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const json = await res.json()
    console.log(json);
}

fetchAlbumsAsync2();