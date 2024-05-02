const textarea = document.querySelector("textarea");

const btn = document.querySelector("button");

// Variable to track the speaking state
let isSpeaking = true;

// Function to convert text to speech
const textToSpeech = () => {
  // Access the SpeechSynthesis API object
  const synth = window.speechSynthesis;

  // Get the text content from the textarea
  const text = textarea.value;

  // Check if the speech synthesizer is not currently speaking and there's text entered
  if (!synth.speaking && text) {
    // Create a SpeechSynthesisUtterance object representing the text to speak
    const utterance = new SpeechSynthesisUtterance(text);

    // Start speaking the text using the synthesizer
    synth.speak(utterance);
  }

  // Check if the entered text is longer than 50 characters
  if (text.length > 50) {
    // If the synthesizer is speaking and isSpeaking is true 
    if (synth.speaking && isSpeaking) {
      
      btn.innerText = "Pause⏸️";
      // Resume speaking (if previously paused)
      synth.resume();

      // Update isSpeaking to false 
      isSpeaking = false;
    } else {
      // If the synthesizer is speaking and isSpeaking is false 
      if (synth.speaking && !isSpeaking) {
        btn.innerText = "Resume⏯️";
        // Pause speaking
        synth.pause();

        // Update isSpeaking to true 
        isSpeaking = true;
      }
    }
  } else {
    // If the text is less than 50 characters, disable pausing
    isSpeaking = false;
    btn.innerText = "Speaking"; 
  }
};

// Add an event listener to the button for "click" events
btn.addEventListener("click", textToSpeech);



