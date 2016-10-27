var stepNumber = 1;
var thing = "pigs";

function DoStuff() {

    console.log("hi");
    console.error("it broke");
    console.debug("debuggin");
    console.info("information");
    console.warn("warning");
    console.assert(10 == 5 * 3);

    console.time("Steps time");
    console.group("Steps")
    FirstStep();
    stepNumber++;
    SecondStep();
    stepNumber++;
    ThirdStep();
    console.groupEnd();
    console.timeEnd("Steps time");

    console.group("%cFinishing part", "font-size: x-large")
    LoadBanners();
    SoundTrumpets();
    console.groupEnd();
   
}

function FirstStep() {
    console.group("Step %i", stepNumber)
    console.log("Finding %s", thing);
    console.log("Building %s farms", thing);
    console.log("Feeding %s", thing);
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
