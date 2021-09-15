const T_C4 = new Audio("tune/C4.mp3");
const T_Db4 = new Audio("tune/Db4.mp3");
const T_D4 = new Audio("tune/D4.mp3");
const T_Eb4 = new Audio("tune/Eb4.mp3");
const T_E4 = new Audio("tune/E4.mp3");
const T_F4 = new Audio("tune/F4.mp3");
const T_Gb4 = new Audio("tune/Gb4.mp3");
const T_G4 = new Audio("tune/G4.mp3");
const T_Ab4 = new Audio("tune/ab4.mp3");
const T_A4 = new Audio("tune/A4.mp3");
const T_Bb4 = new Audio("tune/Bb4.mp3");
const T_B4 = new Audio("tune/B4.mp3");
const T_C5 = new Audio("tune/C5.mp3");
const T_Db5 = new Audio("tune/Db5.mp3");
const T_D5 = new Audio("tune/D5.mp3");
const T_Eb5 = new Audio("tune/Eb5.mp3");
const T_E5 = new Audio("tune/E5.mp3");

const plSound = audio => {
    const clone = audio.cloneNode();
    clone.play();
    setTimeout(() => (clone.volume=0.8), 400);
    setTimeout(() => (clone.volume=0.6), 800);
    setTimeout(() => (clone.volume=0.4), 1200);
    setTimeout(() => (clone.volume=0.2), 1600);
    setTimeout(() => (clone.volume=0.0), 2000);
};

//C4
const C4 = document.querySelector(".C4");
const plyC4 = () => {
    plSound(T_C4);
    C4.classList.add("active");
    setTimeout(() => C4.classList.remove("active"), 200);
};

C4.addEventListener("click", plyC4);

//Db4
const Db4 = document.querySelector(".Db4");
const plyDb4 = () => {
    plSound(T_Db4);
    Db4.classList.add("active");
    setTimeout(() => Db4.classList.remove("active"), 200);
};

Db4.addEventListener("click", plyDb4);


//D4
const D4 = document.querySelector(".D4");
const plyD4= () => {
    plSound(T_D4);
    D4.classList.add("active");
    setTimeout(() => D4.classList.remove("active"), 200);
};

D4.addEventListener("click", plyD4);


//Eb4
const Eb4 = document.querySelector(".Eb4");
const plyEb4 = () => {
    plSound(T_Eb4);
    Eb4.classList.add("active");
    setTimeout(() => Eb4.classList.remove("active"), 200);
};

Eb4.addEventListener("click", plyEb4);


//E4
const E4 = document.querySelector(".E4");
const plyE4 = () => {
    plSound(T_E4);
    E4.classList.add("active");
    setTimeout(() => E4.classList.remove("active"), 200);
};

E4.addEventListener("click", plyE4);



//F4
const F4 = document.querySelector(".F4");
const plyF4= () => {
    plSound(T_F4);
    F4.classList.add("active");
    setTimeout(() => F4.classList.remove("active"), 200);
};

F4.addEventListener("click", plyF4);



//Gb4
const Gb4 = document.querySelector(".Gb4");
const plyGb4 = () => {
    plSound(T_Gb4);
    Gb4.classList.add("active");
    setTimeout(() => Gb4.classList.remove("active"), 200);
};

Gb4.addEventListener("click", plyGb4);



//G4
const G4 = document.querySelector(".G4");
const plyG4 = () => {
    plSound(T_G4);
    G4.classList.add("active");
    setTimeout(() => G4.classList.remove("active"), 200);
};

G4.addEventListener("click", plyG4);



//Ab4
const Ab4 = document.querySelector(".Ab4");
const plyAb4 = () => {
    plSound(T_Ab4);
    Ab4.classList.add("active");
    setTimeout(() => Ab4.classList.remove("active"), 200);
};

Ab4.addEventListener("click", plyAb4);



//A4
const A4 = document.querySelector(".A4");
const plyA4 = () => {
    plSound(T_A4);
    A4.classList.add("active");
    setTimeout(() => A4.classList.remove("active"), 200);
};

A4.addEventListener("click", plyA4);



//Bb4
const Bb4 = document.querySelector(".Bb4");
const plyBb4 = () => {
    plSound(T_Bb4);
    Bb4.classList.add("active");
    setTimeout(() => Bb4.classList.remove("active"), 200);
};

Bb4.addEventListener("click", plyBb4);

//B4
const B4= document.querySelector(".B4");
const plyB4 = () => {
    plSound(T_B4);
    B4.classList.add("active");
    setTimeout(() => B4.classList.remove("active"), 200);
};

B4.addEventListener("click", plyB4);

//C5
const C5 = document.querySelector(".C5");
const plyC5 = () => {
    plSound(T_C5);
    C5.classList.add("active");
    setTimeout(() => C5.classList.remove("active"), 200);
};

C5.addEventListener("click", plyC5);

//Db5
const Db5 = document.querySelector(".Db5");
const plyDb5 = () => {
    plSound(T_Db5);
    Db5.classList.add("active");
    setTimeout(() => Db5.classList.remove("active"), 200);
};

Db5.addEventListener("click", plyDb5);


//D5
const D5= document.querySelector(".D5");
const plyD5 = () => {
    plSound(T_D5);
    D5.classList.add("active");
    setTimeout(() => D5.classList.remove("active"), 200);
};

D5.addEventListener("click", plyD5);


//Eb5
const Eb5= document.querySelector(".Eb5");
const plyEb5 = () => {
    plSound(T_Eb5);
    Eb5.classList.add("active");
    setTimeout(() => Eb5.classList.remove("active"), 200);
};

Eb5.addEventListener("click", plyEb5);

//E5
const E5 = document.querySelector(".E5");
const plyE5 = () => {
    plSound(T_E5);
    Bb4.classList.add("active");
    setTimeout(() =>E5classList.remove("active"), 200);
};

E5.addEventListener("click", plyE5);

window.addEventListener("Keydown", ({keyCode}) => {
    if(keyCode === 81) return plyC4();

    if(keyCode === 50) return plyDb4();

    if(keyCode === 87) return plyD4();

    if(keyCode === 51) return plyEb4();

    if(keyCode === 69) return plyE4();

    if(keyCode === 82) return plyF4();

    if(keyCode === 53) return plyGb4();

    if(keyCode === 84) return plyG4();

    if(keyCode === 54) return plyAb4();

    if(keyCode === 89) return plyA4();

    if(keyCode === 55) return plyBb4(); 
    
    if(keyCode === 85) return plyB4();

    if(keyCode === 73) return plyC5();

    if(keyCode === 57) return plyDb5();

    if(keyCode === 79) return plyD5();

    if(keyCode === 48) return plyEb5();

    if(keyCode === 80) return plyE5();

});