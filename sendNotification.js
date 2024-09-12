function sendNotification(email) {
    if (email.includes('@') === true) {
        userDomain = email.split('@');
        notification = userDomain[0] + ' sent you an email from ' + userDomain[1];
        return notification;
    } else {
        return "Invalid Email";
    }
}

console.log(sendNotification("rabbi.aidt@gmail.com"));
