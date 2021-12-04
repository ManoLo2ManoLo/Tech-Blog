async function blogFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const body = document.querySelector('#body').value.trim();

    if (title && body) {
        const response = await fetch('/api/posts', {
            method: 'post',
            body: JSON.stringify({
                title,
                body
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/dashboard')
        } else {
            alert(response.statusText);
        } 
    }
}

document.querySelector('.blog_post').addEventListener('submit', blogFormHandler);