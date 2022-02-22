// function loadPost(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => displayPost(data))
//     // .then(data => console.log(data)) 
// };
// loadPost()
// function displayPost(posts){
//     const postContainer = document.getElementById('posts');
//     for (const post of posts){
//        const div = document.createElement('div');
//        div.classList.add('post');
//        div.innerHTML = `<h3>${post.title}</h3>
//        <p>${post.body}</p> `;
//        postContainer.appendChild(div);
//     }
// }

function loadPost (){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then( data => displayPost(data))
}

loadPost ()
function displayPost(posts){
    const postContainer = document.getElementById('posts');
    console.log(posts);
    for (const post of posts){
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = ` 
        <p>PostId:${post.id}</p>
        <h3>${post.title}</h3>
        <p>${post.body}</p> 
        <p>USERID:${post.userId}</p>`;      
        postContainer.appendChild(div);
    }
};

function addPost(){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: "POST",
        body:JSON.stringify({
            title:'This Is new Post title',
            body:'This is post content',
            userId:'10',
            id:'5'
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}