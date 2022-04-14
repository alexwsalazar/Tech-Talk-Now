const newComntFH = async (event) => {
    event.preventDefault();
    const text = document.querySelector("#comnt-text").value.trim();

    if (text) {
        const response = await fetch(`/api/comments`,{
            method: 'POST',
            body: JSON.stringify({text}),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok){
            document.location.replace('/blog');
        } else {
            alert('Failed to create comment');
        }
    }
};
    const deleteComnt = async (event) => {
        if (event.target.hasAttribute('data-id')) {
          const id = event.target.getAttribute('data-id');
      
          const response = await fetch(`/api/comments/${id}`, {
            method: 'DELETE',
          });
      
          if (response.ok) {
            document.location.replace('/profile');
          } else {    
            alert('Failed to delete blog');
          }
        }
};