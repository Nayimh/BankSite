document.getElementById('login').addEventListener('click', function () {
    const emailField = document.getElementById('userEmail');
    const userEmail = emailField.value;
 console.log('useremail')
    // get pass
    const passWord = document.getElementById('userPass');
    const userPassword = passWord.value;
    if (userEmail == 'naim@gmail.com' && userPassword == 'secret') {
        window.location.href = 'bank.html';
    } else {
        console.log('invalid password')
        
  }
})

