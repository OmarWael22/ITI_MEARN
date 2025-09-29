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