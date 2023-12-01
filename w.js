
   
    
        document.addEventListener('DOMContentLoaded', function () {
            
            var name = document.getElementById('name');
            var email = document.getElementById('email');
            var number = document.getElementById('number');
            var submitButton = document.getElementById('submitButton');
            var outputTagline = document.getElementById('outputTagline');
    
            
            submitButton.addEventListener('click', function () {
                var value1 = name.value;
                var value2 = email.value;
                var value3 = number.value;

    alert('Your name is'+' '+value1)
    
    if (number.length = 10) {
       
        alert('your number is valid')    
    } else {
        
        alert('your number is invalid')    
    }
    
                var allowedDomains = ['gmail.com', 'hotmail.com', 'yahoo.com'];
                var containsAllowedDomain = allowedDomains.some(function (domain) {
                   
                });
    
                if (allowedDomains) {
                    
                    prompt('Please enter your official mail id.');
                } else {
                  
                    prompt('');
                }
                  
                var thankYouMessage = 'Thank you ' + value1 + ' for sharing your details. We will reach out to you on your mail id: ' + value2;
                                    document.querySelector('.tagline h3').innerText = thankYouMessage;
                    
                                    
        
                        });
                    });
                
                



                    
                    
        
                


               
        
    
    
   
       