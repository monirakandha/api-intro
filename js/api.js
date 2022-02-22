function loadData(){
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(data => console.log(data));
}


function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data));
}

function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPostTitle(data));
}

function displayUsers(data){
    const ul = document.getElementById('users');

    for (const user of data){
        // console.log(user.name);
        const li = document.createElement('li');
        li.innerText = `Name : ${user.name} email: ${user.email}`;
        ul.appendChild(li);
    }
}


function displayPostTitle(data){
    
    const postTitle = document.getElementById('posttitle');
    for (const post of data ){
        const li = document.createElement('li');
        li.innerText = `Post Title : ${post.title}`;
        postTitle.appendChild(li);
    }
}

