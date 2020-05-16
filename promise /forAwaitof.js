
async function getData () {
    try {
        const [users , posts] = await Promise.all(urls.map(async function (url) {
            const response = await fetch(url);
            return response.json();
        })
        )
        console.log('users', users)
        console.log('posts', posts)
    }catch(err) {
        console.log("error",err)
    }
}

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts'
]


const getData2 = async function () {
    const arrayOfPromise = urls.map(url => fetch(url)); //we make a array of pormises 
    //looping through it using for await of 
    for await (let request of arrayOfPromise) {
        const data = await request.json();
        console.log(data)
    }
}