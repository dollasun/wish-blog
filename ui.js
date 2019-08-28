class UI {

  constructor() {
    this.posts = document.getElementById('post-display');
    this.titleInput = document.getElementById('post-title');
    this.bodyInput = document.getElementById('post-body');
    this.idInput = document.getElementById('id');
  }

  showPost(results) {

    let output = '';
    results.forEach(result => {

      output += ` 

        <div class="container">

        <h4 class="title">${result.title}</h4>
        <p class="subtile">${result.body}</p>

        <a href="#" class="edit-post card-link" data-id="${result.id}">
        <i class="fas fa-edit"></i>
        </a>
        <a href="#" class="delete-post card-link" data-id="${result.id}">
        <i class="far fa-trash-alt"></i>
        </a>
      </div>
     <br>
        `;

    });

    this.posts.innerHTML = output;



  }


  showAlert(message, className1, className2) {

    // Create Div 
    const div = document.createElement('div');

    // Add Class

    div.className = className1;

    // Add Txt

    div.appendChild(document.createTextNode(message));


    // Get  element

    const container = document.getElementById('errContainer');

    container.className = className2;

    // Get  err title

    const errTitle = document.querySelector('.errTitle');

    // Insert alert div

    container.insertBefore(div, errTitle);

    // Time out

    setTimeout(() => {

      document.querySelector('.message-body').remove();
    }, 3000);




  }

  formFill(data) {

    this.idInput.value = data.id;
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
  }

}