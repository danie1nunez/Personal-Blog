let blogHistory= JSON.parse(localStorage.getItem('formData'))||[];

console.log(blogHistory);

if (blogHistory.length > 0) {
    for (const blog of blogHistory) {
        const div=document.createElement('div');
        div.classList.add('card');
        const h2=document.createElement('h2');
        h2.textContent="Title: "+ blog.title;
        const contentP= document.createElement('p');
        contentP.textContent="Content: "+ blog.content;
        const usernameP= document.createElement('p');
        usernameP.textContent= "created by: "+ blog.username;
        div.append(h2, usernameP, contentP);
        const indexContent= document.getElementById('indexContent');
        indexContent.append(div);
    }
};