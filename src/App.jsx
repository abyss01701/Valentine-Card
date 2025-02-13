import { useEffect, useState } from "react";
import emailjs from 'emailjs-com';

function App() {

  const [gif, setGif] = useState("public/giphy.gif");
  const [isYesClicked, setIsYesClicked] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() =>{
   emailjs.init("your-public-api-key");
  }, []);

  const handleYesClick = () => {
    setGif("public/icegif-193.gif"); // Change gif on "Yes"
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
  
    const handleNoClick = () => {
      setScale(prevScale => prevScale + 0.50); // Increase the scale each time "No" is clicked
    };
  
  return (
    <>
      <div className="flex items-center justify-center mt-35 ">
        <img src={gif} alt="Gif"/>
      </div>

      <div className="-mt-20 text-center">
        {!isYesClicked && (
        <h2 className="text-black text-3xl" style={{ fontFamily: "'Lucy Said OK', cursive" }}>
          Will you be my valentine?
        </h2>
        )}

        {/* Buttons */}
        {!isYesClicked && (
        <div className="flex items-center justify-center gap-5">
          <button className="bg-green-500 text-white px-5 py-1 rounded-full font-semibold shadow-lg hover:bg-green-600 transition"
           style={{ transform: `scale(${scale})` }} // Apply scaling dynamically
           onClick={handleYesClick}
          >
            Yes
          </button>
          <button className="bg-red-500 text-white px-5 py-1 rounded-full font-semibold shadow-lg hover:bg-red-600 transition"
           onClick={handleNoClick}
          >
            No
          </button>
        </div>
         )}

         {/* "Yay" message and buttons disappearance */}
         {isYesClicked && (
            <p className="mt-12 text-2xl font-semibold text-green-500">Yay!</p>
          )}
      </div>
   
    </>
  );
}

export default App;
