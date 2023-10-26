async function checkHash() {

    function tempAlert(msg,duration)
        {
        var el = document.createElement("div");
        el.setAttribute("class","feedback")
        el.innerHTML = msg;
        setTimeout(function(){
        el.parentNode.removeChild(el);
        },duration);
        document.querySelector(".container").insertBefore(el,document.querySelector("span"));
        }


    var userInput = document.getElementById("input").value.toLowerCase();

    // Calculate SHA-256 hash
    const encoder = new TextEncoder();
    const data = encoder.encode(userInput);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashedInput = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    
    console.log(hashedInput)

    var constantHash = "14ca1779036c22e5a2c6a34068bfb9fbb8f69d52b09727a60447be39a77f7eee"; // Replace this with your constant SHA-256 hash value

    if (hashedInput === constantHash) {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // Redirect to a specific website
    } else {
        tempAlert("Falsch.",1000);
    }
}
