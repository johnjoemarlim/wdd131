const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");



button.addEventListener("click", function() {
    if (input.value.trim() !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = input.value;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";

        listItem.append(deleteBtn);

        list.append(listItem);

        deleteBtn.addEventListener("click", function() {
            list.removeChild(listItem);
            input.focus();
        });
        input.value = "";
        input.focus();
    };
    // listItem.appendChild(deleteBtn);
    // list.appendChild(listItem);
});
input.focus();
