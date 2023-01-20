let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.nav-links li a');
let Image = document.querySelector('.front-cover');
let nav = document.querySelectorAll('nav');

        window.addEventListener('mousemove', (e) => {
                mouseCursor.style.top = e.pageY + 'px';
                mouseCursor.style.left = e.pageX + 'px';
        });

        // function cursor(e) {
        //     mouseCursor.style.top = e.pageY + 'px';
        //     mouseCursor.style.left = e.pageX + 'px';
        // }

        navLinks.forEach(link => {
            link.addEventListener('mouseover', () => {
                mouseCursor.classList.add("link-grow");
                link.classList.add("white");
            })

            link.addEventListener('mouseleave', () => {
                mouseCursor.classList.remove("link-grow");
                link.classList.remove("white");
            })
        });

        Image.addEventListener('mouseover', () => {
            mouseCursor.classList.add("link-grow2");
        });

        Image.addEventListener('mouseleave', () => {
            mouseCursor.classList.remove("link-grow2");
        });

        document.addEventListener('click', () => {
             mouseCursor.classList.add("expand");

             setTimeout(() => {
                mouseCursor.classList.remove("expand");
             }, 200);
        });

        Image.addEventListener('click', () => {
            mouseCursor.classList.add("expand2");

            setTimeout(() => {
                mouseCursor.classList.remove("expand2");
            }, 200);
        });

        const body = document.body;
        let lastscroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll <= 0) {
                body.classList.remove("scroll-up");
                
            }

            if (currentScroll > lastscroll && !body.classList.contains("scroll-down")) {
                body.classList.remove("scroll-up");
                body.classList.add("scroll-down");
            }

            if (currentScroll  < lastscroll && body.classList.contains("scroll-down")) {
                body.classList.remove("scroll-down");
                body.classList.add("scroll-up");
            }

            lastscroll = currentScroll;
        })

