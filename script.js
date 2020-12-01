$("#HomeClick").click(function() {
  $('html, body').animate({ scrollTop: 0 }, 700);
});
$("#AboutClick").click(function() {
    $('html, body').animate({ scrollTop:$("#AboutMe").offset().top}, 700);
});
$("#ExperienceClick").click(function() {
    $('html, body').animate({ scrollTop:$("#Experience").offset().top}, 800);
});
$("#ProjectsClick").click(function() {
    $('html, body').animate({ scrollTop:$("#Projects").offset().top}, 900);
});
$("#ContactClick").click(function() {
    $('html, body').animate({ scrollTop:$("#Contact").offset().top}, 1000);
});


function sendEmail () {
  let name = document.getElementById("Name").value;
  let email = document.getElementById("Email").value;
  let message = document.getElementById("Message").value;

  if (!name || !email || !message) {
    document.getElementById("Error").innerHTML = "Please Complete Form Before Submitting :)";
    document.getElementById("Success").innerHTML = "";
  } else {
    let template = {
      name: name,
      email: email,
      message: message
    };
    document.getElementById("Success").innerHTML = "Email Sent :)";
    document.getElementById("Error").innerHTML = "";
    emailjs.send('service_fcwquyd','template_sj28st6', template, "user_HR0cZQyj1Qq0ENyYJJsHS");
  }
}


new WOW({ mobile:false, animateClass: 'animate__animated' }).init();
