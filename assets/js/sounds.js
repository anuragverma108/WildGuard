let currentAudio = null; // Keep track of the currently playing audio

function playSound(audioSrc) {

    

    // Create a new audio element
    currentAudio = new Audio(audioSrc);
    currentAudio.play(); // Play the new audio
}
