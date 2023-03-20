// const handleSubmit = () => {
//     const parent = document.body;
//     const selectTag = document.createElement("select");
//     const list = parent.appendChild(selectTag);
//     list.id = "list";
//     const firstOption = document.createElement('option');
//     firstOption.id = "firstOption"
//     firstOption.innerHTML = "Create new option";
//     list.appendChild(firstOption);
// };
const handleSubmit = () => {};

// When clicking create select tag its again called

const addOption = () => {
    const states = ["UP","AP","Kerala","Goa"];
    const parent = document.body;
    const selectTag = document.createElement("select");
    const list = parent.appendChild(selectTag);
    list.id = "list";

    for (let i = 0; i < states.length; i++) {
        let options = document.createElement("option");
        options.value = states[i];
        options.text = states[i];
        list.appendChild(options);
    }
};
document.getElementById("button").addEventListener("click", addOption);
