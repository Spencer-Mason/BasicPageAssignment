function awesomeAnimation() {
    const box1 = document.getElementById("box1");
    const box2 = document.getElementById("box2");
    const container = document.getElementById("container");

    const containerWidth = container.offsetWidth;
    const boxWidth = box1.offsetWidth;

    let box1Position = 0;
    let box2Position = containerWidth - boxWidth;

    function animate() {
        if (box1Position < (containerWidth - boxWidth) / 2) {
            box1Position += 2;
            box2Position -= 2;

            box1.style.left = box1Position + "px";
            box2.style.right = (containerWidth - box2Position - boxWidth) + "px";

            if (box1Position + boxWidth >= box2Position) {
                box1.style.backgroundColor = "green";
                box2.style.backgroundColor = "green";
            } else {
                box1.style.backgroundColor = "blue";
                box2.style.backgroundColor = "yellow";
            }

            requestAnimationFrame(animate);
        }
    }

    animate();
}
