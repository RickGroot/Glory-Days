if ('serviceWorker' in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                return registration.update();
            })
            .catch((error) => {
                // registration failed
                console.log('Registration failed with ' + error);
            });
    });
}