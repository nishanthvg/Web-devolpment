async function fetchusers () {
    const resp = await fetch ('https://jsonplaceholder.typicode.com/users');
    const data = await resp.json();
    console.log(data);
}

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typiode.com/albums',
    'https://jsonplaceholder.typicode.com/posts'
]

async function getData () {
    try {
        const [users , albums , posts] = await Promise.all(urls.map(url =>
            fetch(url).then(people => people.json())
        ))
        console.log('users', users)
        console.log('albums', albums)
        console.log('posts', posts)
    }catch(err) {
        console.log("error",error)
    }
}