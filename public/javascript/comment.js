async function commentFormHandler(event) {
    event.preventDefault();

    const comment_text = document.querySelector('#comment_text').value.trim();
    const post_id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1];

    if (comment_text) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({comment_text, post_id}),
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.replace(`/post/${post_id}`);
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.comment_form').addEventListener('submit', commentFormHandler);