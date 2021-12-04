async function deletePost(data) {
    const response = await fetch(`/api/posts/${data}`, {
        method: "DELETE",
    });
    
    if (response.ok) {
        document.location.replace("/dashboard");
    } else {
        alert(response.statusText);
    }
}


async function aboutmeFormHandler(event) {
    event.preventDefault();

    const about_me = document.querySelector('#about_me').value.trim();

    const response = await fetch(`/api/users/`, {
        method: 'PUT',
        body: JSON.stringify({
            about_me
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

async function interestsFormHandler(event) {
    event.preventDefault();

    const interests = document.querySelector('#interests').value.trim();

    const response = await fetch(`/api/users/`, {
        method: 'PUT',
        body: JSON.stringify({
            interests
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

async function about_me() {
    document.querySelector('#about_me_text').style.display = 'none';
    document.querySelector('#about_me_edit').style.display = 'block';
}

async function interests() {
    document.querySelector('#interests_text').style.display = 'none';
    document.querySelector('#interests_edit').style.display = 'block';
}

document.querySelector('.about_me_form').addEventListener('submit', aboutmeFormHandler);
document.querySelector('.interests_form').addEventListener('submit', interestsFormHandler);
document.querySelector('#about_me_button').addEventListener('click', about_me);
document.querySelector('#interests_button').addEventListener('click', interests);