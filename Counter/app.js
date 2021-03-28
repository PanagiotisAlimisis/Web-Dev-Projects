let count = 0;

let value = document.querySelector("#value");

let buttons = document.querySelectorAll(".btn");

buttons.forEach(function(button) {
    button.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            --count;
        }
        else if (styles.contains("reset")) {
            count = 0;
        }
        else if (styles.contains("increase")) {
            ++count;
        }
        if (count > 0) {
            value.style.color = 'green';
        }
        else if (count < 0) {
            value.style.color = 'red';
        }
        else {
            value.style.color = '#102B42';    
        }
        value.textContent = count;
    }); 
});