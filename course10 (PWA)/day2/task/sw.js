self.addEventListener('notificationclick', event => {
    console.log(event)
    const notification = event.notification
    const action = event.action
    
    notification.close()
    
    event.waitUntil(
        clients.openWindow('/')
    )
})