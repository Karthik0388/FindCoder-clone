let languages = ["java", 'js', "nodejs", "python", "reactjs"];

let option = document.querySelector("#select");


for (let lang of languages) {
    let element = document.createElement("option");
    element.innerHTML = lang;
    element.setAttribute("value", lang);
    option.appendChild(element);
}