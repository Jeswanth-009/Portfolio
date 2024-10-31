const texts = ['Web Developer', 'Freelancer', 'App Developer' ];
        let count = 0;
        let index = 0;
        let currentText = '';
        let letter = '';

        function type() {
            if (count === texts.length) {
                count = 0;
            }
            currentText = texts[count];
            letter = currentText.slice(0, ++index);
            
            document.querySelector('.typewriter-text').textContent = letter;
            
            if (letter.length === currentText.length) {
                setTimeout(() => {
                    index = 0;
                    count++;
                }, 2000);
            }
            
            setTimeout(type, 200);
        }

        type();

const menuBtn = document.querySelector('.menu-btn');
const links = document.querySelector('.links');

menuBtn.addEventListener('click', () => {
    links.classList.toggle('active');
});