const grandparent = document.getElementById("grandparent")
const parent = document.getElementById("parent")
const child = document.getElementById("child")

grandparent.addEventListener(
    "click",
    () => {

        console.log("GrandParent");

    },
    true
);

parent.addEventListener(
    "click",
    () => {

        console.log("Parent");

    },
    true
);

child.addEventListener(
    "click",
    () => {

        console.log("Child");

    },
    true
);
