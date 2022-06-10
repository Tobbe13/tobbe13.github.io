const btns = document.querySelectorAll(".calcBtn")

btns.forEach((node) => {
    node.addEventListener("mousedown", function(event) {
        event.preventDefault()
        const value = node.innerText.trim()
        const $screen = document.querySelector(".screen")
        const resultText = $screen.innerText.trim()

        if(resultText == "0" || resultText == "undefined" || resultText == "Infinity") {
            $screen.innerText = ""
        }

        if (value == "=") {
            let solution = eval(resultText)
            $screen.innerText = solution
            return true
        }

        if (value.toLowerCase() == "c") {
            $screen.innerText = " "
            return true
        }
        
        $screen.append(value)
    })
})
