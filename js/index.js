const container = document.querySelector('.blogs');

const renderposts = async () => {
    let uri = 'http://localhost:3000/posts';
    const posts = await (await fetch(uri)).json();

    let template ='';
    posts.forEach(element => {
        template+= `
        <div class="post">
        <h2>${element.title}</h2>
        <p><small>${element.likes} likes </small></p>
        <p>${element.body}</p>
        <a href="/details.html?id=${element.id}">read more...</a>
        </div>
        `
    });

    container.innerHTML = template;

}

window.addEventListener('DOMContentLoaded', ()=> renderposts());