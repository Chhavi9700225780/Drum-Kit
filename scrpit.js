let mediaRecorder;
let audioChunks = [];
const recordButton = document.getElementById('recordButton');
const playButton = document.getElementById('playButton');
const audioPlayback = document.getElementById('audioPlayback');

recordButton.addEventListener('click', async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = event => {
        audioChunks.push(event.data);
    };

    mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        audioPlayback.src = audioUrl;
        playButton.disabled = false;
        audioChunks = [];
    };

    mediaRecorder.start();
    recordButton.disabled = true;
    recordButton.innerText = 'Recording...';

    setTimeout(() => {
        mediaRecorder.stop();
        recordButton.disabled = false;
        recordButton.innerText = 'Record';
    }, 5000);
});

playButton.addEventListener('click', () => {
    audioPlayback.play();
});
