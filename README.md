# Valentine-Card

To use this website, you need to follow a couple of steps:

1. Clone the website
```
git clone https://github.com/abyss01701/Valentine-Card.git
```
2. Create an Account on Email.js: https://www.emailjs.com/
3. Go to email services and link your google account, preferably gmail
4. Create a Email template:
   Go to email template -> Create New Template -> Enter subject and message. This will be what you receive on your gmail account.

5. Now go to the App.jsx file and navigate down to this section
   
```
 useEffect(() =>{
    emailjs.init("your-public-api-key");
  }, []);


const handleYesClick = () => {
    setGif('/icegif-193.gif'); // Change gif on "Yes"
    setIsYesClicked(true);   // Hide buttons and show "Yay" message

    // Send email silently
    emailjs.send(
      'your-email-service id',   // Replace with your EmailJS Service ID
      'your-template-id',  // Replace with your EmailJS Template ID
      { message: 'your custom message(eg she/he said yes).' }, // Email content
      'your-public-api-key'    // Replace with your EmailJS Public Key
    )
    .then(() => {
      console.log('Email sent successfully');
    })
    .catch(error => {
      console.error('Error sending email:', error);
    });
  }; 
  
```
i.   Change 'your-email-service-id' to your service id. This can be found on the top of left panel of Email.js panel

ii.  Change 'your-template-id' with your template id. This can be found under Emaiol templates

iii. Change 'your-public-api-key' to your key. This can be found under Account-> General -> API keys

iv.  Customize your message and you're good to go

6. To run the website you need to install these dependencies:
   
   i. Email.js
   ```
   npm install emailjs-com
   ```
   ii. Tailwindcss :
   ```
   npm install tailwindcss @tailwindcss/vite
   ```
   
   Then run
   ```
   npm run dev
   ```

   Happy Valentines to everyone For more details, feel free to contact me:

   <div align="left">
     <a href="https://www.facebook.com/XxAni10NxX/"><img src="https://github.com/abyss01701/portfolio/blob/main/icons/facebook.png?raw=true" alt="Facebook" width="30px" style="margin: 0 10px;"></a>
     <a href="https://www.instagram.com/incarcerated_abyss/"><img src="https://github.com/abyss01701/portfolio/blob/main/icons/instagram.png?raw=true" alt="Instagram" width="30px" style="margin: 0 10px;"></a>
     <a href="https://x.com/incarcerated_ab"><img src="https://github.com/abyss01701/portfolio/blob/main/icons/twitter.png?raw=true" alt="X (formerly Twitter)" width="30px" style="margin: 0 10px;"></a>
     <a href="https://www.linkedin.com/in/akshat-newal-700021268/"><img src="https://github.com/abyss01701/portfolio/blob/main/icons/linkedin.png?raw=true" alt="LinkedIn" width="30px" style="margin: 0 10px;"></a>
   </div>
