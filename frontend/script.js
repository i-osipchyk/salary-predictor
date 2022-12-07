function gatherData() {
    const form = document.forms.mainForm;
    const dataObject = {};

    for (let input of form.elements) {
        dataObject[input.name] = input.value;
    }

    return dataObject;
}

(function () {
    let submitButton = document.getElementById("submitButton");
    submitButton.onclick = gatherData;
})()
