// Init Http

const http = new BasicHTTP();

// Init UI

const ui = new UI();

// Get Posts on Dom load

document.addEventListener('DOMContentLoaded', getposts());


// Post Submit

const postSubmit = document.getElementById('post-submit');

// Listen for delete

document.getElementById('post-display').addEventListener('click', deletePost);

// Listen for Update

document.getElementById('post-display').addEventListener('click', updatePost);

// Add event listener

postSubmit.addEventListener('click', e => {

  // Get Inputs values

  const postTitle = document.getElementById('post-title').value;
  const postbody = document.getElementById('post-body').value;
  const id = document.getElementById('id').value;

  console.log(postTitle, '', postbody);


  const post = {

    title: postTitle,
    body: postbody

  }


  // check if fields are empty

  if (post.title === '' || post.body === '') {

    ui.showAlert('Please check inputs fields', 'message-body', 'message is-danger');


  } else {


    if (id === '') {

      // Create Post
      http.post('http://localhost:3000/posts', post)
        .then((results) => {

          ui.showAlert('Post Added', 'message-body', 'message is-success');


        }).catch(err => console.log(err));

    } else {

      // Update Post

      http.put(`http://localhost:3000/posts/${id}`, post)
        .then(results => {

          ui.showAlert('Post Updated ', 'message-body', 'message is-success');
        })
        .catch(err => console.log(err));



    }








  }

  e.preventDefault();

})





// Get Post Function 

function getposts() {

  http.get('http://localhost:3000/posts')
    .then((result) => {
      ui.showPost(result);
    }).catch((err) => {
      console.log(err);
    });




}

function deletePost(event) {

  const deleteid = event.target.parentElement.classList.contains("delete-post");
  if (deleteid == true) {

    const id = event.target.parentElement.dataset.id;

    if (confirm('Do you want to delet Post?')) {

      // Delete Post

      http.delete(`http://localhost:3000/posts/${id}`)
        .then(result => {

          ui.showAlert('Post Deleted', 'message-body', 'message is-success');
          getposts();

        }).catch(err => {

          console.log(err);
        });

    }

  }




  event.preventDefault();
}


function updatePost(event) {


  if (event.target.parentElement.classList.contains('edit-post')) {
    const id = event.target.parentElement.dataset.id;
    const title = event.target.parentElement.previousElementSibling.previousElementSibling.textContent;
    const body = event.target.parentNode.previousElementSibling.textContent;

    const posts = {

      id,
      title,
      body
    }

    ui.formFill(posts);

  }

  event.preventDefault();




}


