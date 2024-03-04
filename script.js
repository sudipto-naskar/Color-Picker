let button = document.querySelector('.button');
let result = document.querySelector('#input');

let copyBtn = document.querySelector('.result .fa-copy');

// color picker
const colorPick = async () =>{
     
     const eyeDropper = new EyeDropper();
     
     const { sRGBHex } = await eyeDropper.open();
     
  result.value = sRGBHex;

  document.body.style.backgroundColor = sRGBHex; 
}

button.addEventListener("click", colorPick);


// copy color text
copyBtn.addEventListener("click",()=>{

  // Select the text field
  result.select();
  result.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(result.value);
  
  
  // Alert the copied text
  // alert("Copied the text: " + result.value);
  
});



// change photo

let file = document.querySelector('.file');
let img = document.querySelector('.img');

file.addEventListener("change",(event)=>{
  
  img.style.backgroundImage = `url('${URL.createObjectURL(event.target.files[0])}')`;
  
});
