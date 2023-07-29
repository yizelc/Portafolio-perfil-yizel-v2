let app = document.getElementById('typewriter');
let typewriter = new Typewriter(app, {
    loop: true, 
    delay: 75,
}
);

typewriter
.pauseFor(100)
.typeString('Yizel castro Rodriguez')
.pauseFor(300)
.deleteChars(10)
.start();

