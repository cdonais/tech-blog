async function newFormHandler(event) {
    event.preventDefault();

    const postTitle = document.querySelector('input[name="postTitle"]').value;
    const content = document.querySelector('input[name="content"]').value;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title: postTitle,
            content: content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);