const container = document.querySelector('.details');
const postid = new URLSearchParams(window.location.querySelector("id"));

console.log("postid", postid);

const renderposts = async() => {
 let uri = "https://localhosts/posts/{id}"
const post = await fetch(uri).json;

}
