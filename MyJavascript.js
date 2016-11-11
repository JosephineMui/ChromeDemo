var stepNumber = 1;
var thing = "pigs";


aslslslskjsljlk
Fixed issues

function DoStuff() {

    console.log("hi");
    console.error("it broke");
    console.debug("debuggin");
    console.info("information");
    console.warn("warning");
    console.assert(10 == 5 * 3);

  

    console.group("%cFinishing part", "font-size: x-large")
    LoadBanners();
    SoundTrumpets();
    console.groupEnd();
   
}


function SecondStep() {
    debugger;
    console.log("Step %i", stepNumber);
}

function ThirdStep() {
    console.log("Step %i", stepNumber);
}

function LoadBanners() {
    console.log("Loading banners");
}

function SoundTrumpets() {
    console.log("Sound trumpets");
}
