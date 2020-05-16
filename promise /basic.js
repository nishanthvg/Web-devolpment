const fakeApi = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/todos'
]

Promise.all(fakeApi.map(url => {
    return fetch(url).then(resp => resp.jon())
})).then(result => {
    console.log(resul[0]);
})
