// Form submission
const handleSubmit = event => {
    // stop the page from reloading on submit
     event.preventDefault();

     const formData = new FormData(event.target);
 
     // Get the form data by name
     const name = formData.get('name');
     const emailAddress = formData.get('email')
     const message = formData.get('message');

  console.log(`Name: ${name}`);
 console.log(`Email address: ${emailAddress}`);
console.log(`Message: ${message}`);
};

document
    .getElementById('form-data')
   .addEventListener(
        'submit', 
        handleSubmit, 
        false 
    );
}
