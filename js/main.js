const app = document.getElementById ('typewriter');
const typewriter = new typewriter(app,{
    loop: true,
    delay:75
});

typewriter
.typeString('La ciudad de la eterna primavera')
.pauseFor(200)
.start();