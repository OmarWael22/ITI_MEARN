if('serviceWorker' in navigator){
    console.log('ServiceWorker is supported')
    window.addEventListener('load',event=>{
        navigator.serviceWorker.register("../sw.js")
        .then(reg=>{
            console.log('service worker registered successfully')
        })
        .catch(err=>{
            console.log(err)
        })
    })
}



const installButton = document.getElementById('installButton');
let installPrompt = null;

// When browser is ready to show install prompt
window.addEventListener('beforeinstallprompt', (event) => {
    installPrompt = event
});

// When user clicks your install button
installButton.addEventListener('click', async () => {
    // Make sure we have the install prompt
    if (!installPrompt) {
        console.log('Install not available');
        return;
    }
    // Show the install dialog
    installPrompt.prompt();

    // Hide button after user choice
    if (choice.outcome === 'accepted') {
        installButton.style.display = 'none';
        // Clear the prompt
        installPrompt = null;
    }
});

// When app gets installed
window.addEventListener('appinstalled', () => {
  console.log('✅ App installed successfully!');
  installButton.style.display = 'none';
  installPrompt = null;
});
// Check if app is already installed
if (window.matchMedia('(display-mode: standalone)').matches) {
    installButton.style.display = 'none';
}