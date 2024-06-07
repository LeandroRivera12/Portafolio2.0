
const animationText = () => {
    let textAnimation = [
        ['H', 'o', 'l', 'a', ' ', 's', 'o', 'y', ' ', 'L', 'e', 'a', 'n', 'd', 'r', 'o'],
        ['U', 'n', ' ', 'D', 'e', 's', 'a', 'r', 'r', 'o', 'l', 'l', 'a', 'd', 'o', 'r', ' ', 'W', 'e', 'b']
    ];

    let countLetter = -1;
    let levelArray = 0;

    const animationContainer = document.querySelector('.text__animation');
    function printText(){
        countLetter++;
        animationContainer.textContent += textAnimation[levelArray][countLetter];

        if (countLetter === textAnimation[levelArray].length -1) {
          clearInterval(interval) 
          setTimeout(() => {
               interval = setInterval(() => {
                    animationContainer.textContent = "";
                    countLetter--;
                    textAnimation[levelArray].pop();

                    textAnimation[levelArray].forEach(element => {
                        animationContainer.textContent += element;
                    });

                    if (countLetter < 0) {
                        clearInterval(interval);
                        levelArray++;
                        interval = setInterval(printText, 150)
            
                        if (levelArray > textAnimation.length - 1) {
                            clearInterval(interval);
                            levelArray = 0;
                            animationText();
                        }
                    }
                }, 150);
          }, 1000);
        }
    }
    let interval = setInterval(printText, 150)

  return window.addEventListener("load", animationText);
      
}

export default animationText
