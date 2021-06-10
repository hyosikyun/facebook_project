window.addEventListener('DOMContentLoaded',function(){

        const bell = document.querySelector('.bell');
        const leftBox = document.querySelector('.left_box');
        const rightBox = document.querySelector('.right_box');

        console.log(rightBox);

        leftBox.style.right = '${innerWidth * 0.5 + 430}px';
        rightBox.style.left = '${innerWidth * 0.5 + 90}px';

        function resizeFunc(){
            leftBox.style.right = '${innerWidth * 0.5 + 430}px';
            rightBox.style.right = '${innerWidth * 0.5 + 90}px';
            console.log('resize');
        }

        function notification(){
            this.classList.toggle('on');
        }

        function scrollFunc(){
            let documentHeight = document.body.scrollHeight;
            let scrollHeight = pageXOffset + window.innerHeight;

            if (scrollHeight >= documentHeight) {
                /* Ajax */
                console.log('end');
            }
        }

        bell.addEventListener('click', notification);

        window.addEventListener('scroll', scrollFunc);
        window.addEventListener('resize', resizeFunc);
})