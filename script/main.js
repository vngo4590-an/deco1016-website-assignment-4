/* Initiate Libary */

// Initiate AOS
AOS.init();

/* Adding phone onto the html */
// Samsung
// Add features

// Function for menu slider
function menuSliderOpen() {
    // Get the menu sidebar
    let bar = document.getElementsByClassName("menu-sidebar")[0];
    bar.style.width = "250px";
    bar.style.marginLeft = "250px"; 
    
}

function menuSliderClose() {
    // Get the menu sidebar
    let bar = document.getElementsByClassName("menu-sidebar")[0];
    // Reset the menu bar
    bar.style.width = "0";
    bar.style.marginLeft = "0";
    
}





let samsungFeatures = {
    camera: "3D Depth Camera",
    display: "Supreme Cinematic Dynamic Display",
    pen: "Intelligent S Pen",
    getAll: function () {
        return [this.camera, this.display, this.pen];
    },
    getFeatures: function () {
        return ['camera', 'display', 'pen'];
    }
}
let samsungColors = ["#AAADAE", "#3C3C3E"];
let samsungColorCode = ["aura-white", "aura-black"];
let samsungPrice = {
    twelve_month: 70,
    thirty_six_month: 55
}
let samsungImages = {
    main: "img/Phone/samsung/samsung galax feature - 1.png",
    side1: "img/Phone/samsung/samsung galax feature - 2.png",
    getAll: function () {
        return [this.main, this.side1];
    }
};
let samsung = new Phone("Samsung Galaxy Note 10+", samsungColors, samsungColorCode, samsungFeatures, samsungPrice, samsungImages);


// iPhone
// Add features
let iPhoneFeatures = {
    camera: "Triple-camera with 12MP Ultra Wide",
    display: "6.5-inch Super Retina XDR OLED display",
    feature: "Dust and Water resistant",
    getAll: function () {
        return [this.camera, this.display, this.feature];
    },
    getFeatures: function () {
        return ['camera', 'display', 'feature'];
    }
}
let iPhoneColors = ["#4e5851", "#535150", "#ebebe3", "#fad7bd"];
let iPhonePrice = {
    twelve_month: 68,
    thirty_six_month: 30
}
let iPhoneColorCode = ["Midnight-Green", "Grey", "White-Grey", "Pink"];
let iPhoneImages = {
    main: "img/Phone/iphone/iphone sample phone _ green.png",
    side1: "img/Phone/iphone/iphone sample phone _ grey.png",
    side2: "img/Phone/iphone/iphone sample phone _ white.png",
    side3: "img/Phone/iphone/iphone sample phone _ pink.png",
    getAll: function () {
        // return this;
        return [this.main, this.side1, this.side2, this.side3];
    }
};
let iPhone = new Phone("iPhone 11", iPhoneColors, iPhoneColorCode, iPhoneFeatures, iPhonePrice, iPhoneImages);
// Plans
let plan1 = new Plan("plan1", 85, ["100 GB Total Data", "80GB + 20GB Extra!"]);
let plan2 = new Plan("plan2", 75, ["60 GB Total Data", "$10 per extra 1GB"]);
let plan3 = new Plan("plan3", 45, ["4 GB Total Data", "$10 per extra 1GB"]);
let allPlans = [plan1, plan2, plan3];
// create function that loads out iphone or samsung content
function loadPhoneDesription(className, phoneType, hasLogo, logoColor, isForm, formName) {
    /*
    Rule: the function can only be loaded inside a div with
    a classname
    */

    /* Initialise Phase */
    // Get the class
    let containerPhone = document.querySelectorAll("div." + className);
    // console.log(containerPhone);
    // Phone Color Picker
    // Phone Description
    let phone;
    /* Implementation Phase*/
    if (phoneType.toLowerCase() == "iphone") {
        phone = iPhone;
    } else if (phoneType.toLowerCase() == "samsung") {
        phone = samsung;
    }


    for (let i = 0; i < containerPhone.length; i++) {

        // Images + Slider
        // Every Phone has links for images
        // Images are represented as main, side1, side2
        let imageContainer = document.createElement("div");
        imageContainer.setAttribute("class", "phone-image-container");

        // Now create a ul list that contains all the images
        let imageList = document.createElement("ul");
        imageList.setAttribute("class", "phone-image-list");
        imageContainer.appendChild(imageList);

        let allImages = phone.getImgLink().getAll();

        for (let i = 0; i < allImages.length; i++) {

            let listElementIMG = document.createElement("li");
            let imagePhone = document.createElement("img");
            imagePhone.setAttribute("src", allImages[i]);
            imagePhone.setAttribute("class", phoneType + "-color " + phone.getColorCode()[i] + " img-color");
            // imagePhone.setAttribute("data-aos", "fade-up");
            if (i == 0) {
                imagePhone.style.display = "block";
            } else {
                imagePhone.style.display = "none";
            }
            listElementIMG.appendChild(imagePhone);
            imageList.appendChild(listElementIMG);
        }

        // Phone Heading
        let phoneHeading = document.createElement("h2");
        phoneHeading.setAttribute("class", "phone-heading");
        phoneHeading.textContent = phone.getName();



        /* Image and Colours have the same colorcode class*/
        // Phone colours
        // We have a large container reserving tehy colours values
        let colorContainer = document.createElement("div");
        colorContainer.setAttribute("class", "phone-colors-container");
        // Create ul elemenent to store colors
        let colorList = document.createElement("ul");
        colorList.setAttribute("class", "phone-color-list");
        colorContainer.appendChild(colorList);
        let allColors = phone.getColors();

        let phoneColorStorage;
        for (let i = 0; i < allColors.length; i++) {
            let listElementColor = document.createElement("li");
            let colorPhone = document.createElement("div");
            // linking Image by setting color
            colorPhone.setAttribute("class", phoneType + "-color " + phone.getColorCode()[i] + " color-box");
            // Background color should be the listed colour
            colorPhone.style.backgroundColor = allColors[i];
            colorPhone.style.width = "30px";
            colorPhone.style.height = "30px";
            colorPhone.style.margin = "20px";
            colorPhone.addEventListener("click", function () {
                // Simulation of radio, Jquery could achieve this in a faster manner but i prefer this way
                let siblings = document.getElementsByClassName(phoneType + "-color " + "color-box");
                // get all images
                let imagesAdded = document.querySelectorAll("img." + phoneType + "-color");
                for (let i = 0; i < siblings.length; i++) {
                    siblings[i].style.borderWidth = "4px";
                    siblings[i].style.borderStyle = "none";
                    siblings[i].style.borderColor = "rgba(33,99,128, 1)";
                    for (let i = 0; i < imagesAdded.length; i++) {
                        console.log(siblings[i].className.split(" ")[1]);
                        if (imagesAdded[i].className.split(" ")[1] == siblings[i].className.split(" ")[1]) {
                            
                            imagesAdded[i].style.display = "none";
                        }
                    }

                }
                colorPhone.style.borderWidth = "4px";
                colorPhone.style.borderStyle = "solid";
                colorPhone.style.borderColor = "rgba(33,99,128, 1)";

                for (let i = 0; i < imagesAdded.length; i++) {
                    if (imagesAdded[i].className.split(" ")[1] == colorPhone.className.split(" ")[1]) {
                        
                        imagesAdded[i].style.display = "inline-block";
                        phoneColorStorage = imagesAdded[i].className.split(" ")[1];
                    }
                }


            });
            listElementColor.appendChild(colorPhone);
            colorList.appendChild(listElementColor);
        }



        // Phone description
        let descriptionContainer = document.createElement("div");
        descriptionContainer.setAttribute("class", "phone-description-container");
        // Create a list of descriptions
        let descriptionList = document.createElement("ul");
        descriptionList.setAttribute("class", "phone-description-list");
        // Get description values from the phone pack s
        let descriptionPack = phone.getValues();
        let descriptionKeys = descriptionPack.getAll();
        let descriptionKeyNames = descriptionPack.getFeatures();
        for (let i = 0; i < descriptionKeys.length; i++) {
            let description = document.createElement("li");
            // If the aggreed to get some icon
            if (hasLogo) {
                // Import image
                let iconPhone = document.createElement("img");
                iconPhone.setAttribute("class", "phone-description-icon");
                iconPhone.setAttribute("src", "img/Logo/" + descriptionKeyNames[i] + "_" + logoColor + ".png");
                description.appendChild(iconPhone);
            }
            description.innerHTML += descriptionKeys[i];
            descriptionList.appendChild(description);
        }
        descriptionContainer.appendChild(descriptionList);

        // Price
        let priceHeading = document.createElement("h3");
        priceHeading.className = "phone-price";
        priceHeading.textContent = "$" + phone.getPrice().twelve_month + " /month";



        containerPhone[i].appendChild(phoneHeading);
        containerPhone[i].appendChild(imageContainer);
        containerPhone[i].appendChild(colorContainer);
        containerPhone[i].appendChild(descriptionContainer);
        containerPhone[i].appendChild(priceHeading);

        // If this is a form then
        if (isForm) {
            let phoneSelect = document.createElement("button");
            let formValue = document.querySelectorAll("form." + formName)[0];


            phoneSelect.setAttribute("type", "submit");
            phoneSelect.setAttribute("class", "phone-select");
            phoneSelect.textContent = "Buy Now";

            // when submitting, we need to consider if the pplan has been selected
            let plan = localStorage.getItem("plan");
            if (plan == null || plan == "null" || plan == "") {
                // if this is the case, 
                // if plan has not been chosen then we chose plan
                formValue.setAttribute("action", "choose-plan.html");

            } else {
                formValue.setAttribute("action", "signup.html");
            }
            // console.log(localStorage.getItem("phone"));
            // When the user hover the mouse on here, it is obvious that they click on here
            phoneSelect.addEventListener("click", function () {

                if (localStorage.getItem("phone") != phoneType) {
                    // We need to save current phone first
                    localStorage.setItem("phone", phoneType);
                    // Save color
                    localStorage.setItem("phone-color", phoneColorStorage);
                }
                // submit the form to move to the next page
                phoneSelect.addEventListener("submit", function () {});
            });

            containerPhone[i].appendChild(phoneSelect);
        }
    }
}

function loadPlan(className, planNo, isForm, formName) {
    // The goal is to load the plan structure into designated slot
    // heading / price
    let heading = document.createElement("h2");
    heading.setAttribute("class", "plan-heading");
    heading.textContent = "$" + allPlans[planNo].getPrice() + "/month";
    // content
    let subheading = document.createElement("h3");
    subheading.setAttribute("class", "plan-subheading");
    subheading.textContent = allPlans[planNo].getValues()[0];

    // bonus
    let bonus = document.createElement("p");
    bonus.setAttribute("class", "plan-bonus");
    bonus.textContent = allPlans[planNo].getValues()[1];

    let container = document.getElementsByClassName(className);

    for (let i = 0; i < container.length; i++) {
        container[i].appendChild(heading);
        let planContent = document.createElement("div");
        planContent.setAttribute("class", "content-container");
        planContent.appendChild(subheading);
        planContent.appendChild(bonus);
        container[i].appendChild(planContent);
        if (isForm) {
            let formValue = document.querySelectorAll("form." + formName)[0];
            let phone = localStorage.getItem("phone");
            if (phone == null || phone == "null" || phone == "") {
                formValue.setAttribute("action", "choose-phone.html");
            } else {
                formValue.setAttribute("action", "signup.html");
            }
        }
        container[i].addEventListener("click", function () {
            // We need to save current phone first
            localStorage.setItem("plan", planNo);

            // submit the form to move to the next page
            container[i].addEventListener("submit", function () {});
        });
    }
}

function loadChoices(className) {
    // We just need class name is this case to load out previous choices we have made
    // We have the nav element
    let container = document.getElementsByClassName("previous-selection");
    let mainContent = document.getElementsByClassName(className)[0];

    // Load phone image
    let phone;
    let phoneType = localStorage.getItem("phone");
    /* Implementation Phase*/
    if (phoneType.toLowerCase() == "iphone") {
        phone = iPhone;
    } else if (phoneType.toLowerCase() == "samsung") {
        phone = samsung;
    }

    // Now we find image by index
    let allImgLinks = phone.getImgLink().getAll();

    // retrieve data from local storage
    let imgColor = localStorage.getItem("phone-color");
    let colorCodes = phone.getColorCode();
    let index = 0;
    // Find the index of the color
    for (let i = 0; i < colorCodes.length; i++) {
        if (imgColor == colorCodes[i]) {
            index = i;
            break;
        }
    }
    // Add heading
    let phoneHeading = document.createElement("h2");
    phoneHeading.setAttribute("class", "phone-heading");
    phoneHeading.textContent = phone.getName();

    // Add Image
    let phoneLink = allImgLinks[index];
    let phoneImage = document.createElement("img");
    phoneImage.setAttribute("class", "phone-image");
    console.log(phoneLink);
    phoneImage.setAttribute("src", phoneLink);

    // Price
    let phonePrice = document.createElement("h3");
    phonePrice.setAttribute("class", "phone-price");
    let phonePriceD = phone.getPrice().twelve_month;
    phonePrice.textContent = "$" + phonePriceD + " /month";

    // Get plan number from previous value
    let planNo = parseInt(localStorage.getItem("plan"));

    // Total value
    // The goal is to load the plan structure into designated slot
    // heading / price
    let heading = document.createElement("h3");
    heading.setAttribute("class", "plan-heading");
    let planPriceD = allPlans[planNo].getPrice();
    heading.textContent = "$" + planPriceD + " /month";
    // content
    let subheading = document.createElement("h4");
    subheading.setAttribute("class", "plan-subheading");
    subheading.textContent = allPlans[planNo].getValues()[0];

    // bonus
    let bonus = document.createElement("p");
    bonus.setAttribute("class", "plan-bonus");
    bonus.textContent = allPlans[planNo].getValues()[1];

    // Get into form value
    let formMain = document.querySelector("form.check-out");
    let insurance = document.getElementsByName("insurance");
    let isInsurance = "no";
    let total = phonePriceD + planPriceD;

    let plusSign = document.createElement("h2");
    plusSign.setAttribute("class", "plus-sign");
    plusSign.textContent = "+";
    mainContent.appendChild(phoneHeading);
    mainContent.appendChild(phoneImage);
    mainContent.appendChild(phonePrice);
    mainContent.appendChild(plusSign);
    mainContent.appendChild(heading);
    mainContent.appendChild(subheading);
    mainContent.appendChild(bonus);
    let addOn = document.createElement("h3");
    addOn.setAttribute("class", "insurance");
    let plusIf = document.createElement("h2");
    plusIf.setAttribute("class", "plus-sign");
    for (let i = 0; i < insurance.length; i++) {
        insurance[i].addEventListener("input", function () {
            if (insurance[i].checked) {
                isInsurance = insurance[i].value;
                // console.log(isInsurance);
                // total amount
                if (isInsurance == "yes") {
                    plusIf.textContent = "+"
                    addOn.textContent = "$19 Insurance /month";
                    total = phonePriceD + planPriceD + 19;
                } else {
                    total = phonePriceD + planPriceD;
                }
            }
        });
    }


    let totalHeading = document.createElement("h2");
    totalHeading.setAttribute("class", "total-heading");
    totalHeading.textContent = "Total:";
    let totalValue = document.createElement("h1");
    totalValue.setAttribute("class", "total-value");
    totalValue.textContent = "$" + total + " /month";
    let totalContainer = document.createElement("div");
    totalContainer.setAttribute("class", "total-container");
    totalContainer.appendChild(totalHeading);
    totalContainer.appendChild(totalValue);

    mainContent.appendChild(plusIf);
    mainContent.appendChild(addOn);
    
    mainContent.appendChild(totalContainer);
    
}

function loadFinal(className) {
    let mainContent = document.getElementsByClassName(className)[0];
    let name = localStorage.getItem("first-name");
    // Load phone image
    let phone;
    let phoneType = localStorage.getItem("phone");
    /* Implementation Phase*/
    if (phoneType.toLowerCase() == "iphone") {
        phone = iPhone;
    } else if (phoneType.toLowerCase() == "samsung") {
        phone = samsung;
    }
    // Now we find image by index
    let allImgLinks = phone.getImgLink().getAll();
    // retrieve data from local storage
    let imgColor = localStorage.getItem("phone-color");
    let colorCodes = phone.getColorCode();
    let index = 0;
    // Find the index of the color
    for (let i = 0; i < colorCodes.length; i++) {
        if (imgColor == colorCodes[i]) {
            index = i;
            break;
        }
    }
    // Add heading
    let phoneHeading = document.createElement("h3");
    phoneHeading.setAttribute("class", "phone-heading");
    phoneHeading.textContent = phone.getName();

    // Add Image
    let phoneLink = allImgLinks[index];
    let phoneImage = document.createElement("img");
    phoneImage.setAttribute("class", "phone-image");
    console.log(phoneLink);
    phoneImage.setAttribute("src", phoneLink);

    // Add main heading with user's name
    let mainLine = document.createElement("h2");
    mainLine.setAttribute('class', "main-final-line");
    mainLine.innerHTML = "Thank you " + name + "!";
    let imgMain = document.createElement("img");
    imgMain.setAttribute('class', "img-main-final" );
    // imgMain.setAttribute('src' , 'img/Logo/box.png');
    
    let lastLine = document.createElement("h3");
    lastLine.setAttribute('class', 'main-sub-line');
    lastLine.innerHTML = "Your " + phone.getName() + " is on the way!";
    
    let subject = document.querySelector("."+className);
    subject.appendChild(mainLine);
    subject.appendChild(phoneImage);
    subject.appendChild(imgMain);
    subject.appendChild(lastLine);

}