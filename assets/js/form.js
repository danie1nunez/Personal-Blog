const username= document.getElementById('username');
const title= document.getElementById('title');
const content= document.getElementById('content')
const submitBtn= document.getElementById('submit')
const form= document.getElementById('inputs');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const blogHistory= JSON.parse(localStorage.getItem('formData'))||[];
    let tempStorageObject= {
        title: title.value,
        username: username.value,
        content: content.value,
    };
    
    if (title.value=== '' || username.value === '' || content.value === '') {
        return alert("Please fill out all the fields");
    };

    blogHistory.push(tempStorageObject);
    localStorage.setItem('formData', JSON.stringify(blogHistory));
    location.href="blog.html";
});
