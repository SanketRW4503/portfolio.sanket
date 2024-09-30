
function validate(form){    
    const name = form.current['from_name'].value;
    const email = form.current['from_email'].value;
    const message = form.current['message'].value;
  
    if (!name || !email  || !message) {
      return 'All fields are required!';
    }
  
    // Basic email validation
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailPattern.test(email)) {
      return 'Please enter a valid email address.';
    }
  
    return '';

}

export default validate;