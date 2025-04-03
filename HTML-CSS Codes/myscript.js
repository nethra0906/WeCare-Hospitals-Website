        const Navbarlist = document.querySelectorAll('#Navbarlist li a'); 
     
        Navbarlist.forEach(NavList => 
        {
     
            NavList.addEventListener('mouseover', function() 
            {
                this.style.color = "#75a6fa"; 
            });
     
            NavList.addEventListener('mouseout', function() 
            {
                this.style.color = 'white'; 
            });
        });

        document.addEventListener("DOMContentLoaded", function()
        {
          const footerLinks = document.querySelectorAll("#footerlist li a");
        
            footerLinks.forEach(link => 
              {
                link.addEventListener('mouseover', function() 
                {
                    this.style.color = "#75a6fa";
                });
        
                link.addEventListener('mouseout', function() 
                {
                    this.style.color = "white";
                });
            });
        });
  
        const form = document.getElementById('myForm'); 
        const NameInput = document.getElementById('Name'); 
        const EmailInput = document.getElementById('email'); 
        const PasswordInput = document.getElementById('password'); 
        const CPasswordInput = document.getElementById('cpassword');
        const errorMessage = document.getElementById('errorMessage'); 
     
        form.addEventListener('submit', function (event) 
        { 
          event.preventDefault(); 
          if (NameInput.value === '' && PasswordInput.value === '' && EmailInput.value === '' && CPasswordInput==='') 
          { 
            errorMessage.textContent = 'All Details are required!'; 
          } 
    
          else if (NameInput.value === '') 
          { 
            errorMessage.textContent = 'Name is required!'; 
          } 

          else if (EmailInput.value === '') 
          { 
            errorMessage.textContent = 'Email is required!'; 
          } 
    
          else if(PasswordInput.value === '')
          {
            errorMessage.textContent = 'Password is required!'; 
          }

          else if(CPasswordInput.value === '')
          {
            errorMessage.textContent = 'Confirmation of Password is required'; 
          }
          
          else 
          { 
            errorMessage.textContent = ''; 
            alert('Form submitted successfully!'); 
          } 
        });

        const Lform = document.getElementById('myForm'); 
        const UsernameInput = document.getElementById('Username'); 
        const LPasswordInput = document.getElementById('Password'); 
        const LerrorMessage = document.getElementById('errorMessage'); 
    
        Lform.addEventListener('submit', function (event) 
        { 
          event.preventDefault(); 
          if (UsernameInput.value === '' && LPasswordInput.value === '') 
          { 
            LerrorMessage.textContent = 'Username and Password is required!'; 
          } 

          else if (UsernameInput.value === '') 
          { 
            LerrorMessage.textContent = 'Username is required!'; 
          } 

          else if(LPasswordInput.value === '')
          {
            LerrorMessage.textContent = 'Password is required!'; 
          }
          
          else 
          { 
            LerrorMessage.textContent = ''; 
            alert('Form submitted successfully!'); 
          } 
        });


