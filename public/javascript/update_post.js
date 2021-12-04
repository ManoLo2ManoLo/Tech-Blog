async function postFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const body = document.querySelector('#body').value.trim();
    const id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            body
        }),
        headers: { 'Content-Type': 'application/json' }
    })

    if (response.ok) {
        console.log('user updated');
        document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
}

document.querySelector('.post_form').addEventListener('submit', postFormHandler);