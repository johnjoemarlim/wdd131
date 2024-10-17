const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");



button.addEventListener("click", function() {

    if (input.value.trim() != "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();

    }

    // if (input.value.trim() !== "") {
    //     const listItem = document.createElement("li");
    //     listItem.textContent = input.value;

    //     const deleteBtn = document.createElement("button");
    //     deleteBtn.textContent = "❌";

    //     listItem.append(deleteBtn);

    //     list.append(listItem);

    //     deleteBtn.addEventListener("click", function() {
    //         list.removeChild(listItem);
    //         input.focus();
    //     });
    //     input.value = "";
    //     input.focus();
    // };

    // listItem.appendChild(deleteBtn);
    // list.appendChild(listItem);
});
input.focus();

let chaptersArray = getChapterList() || [];



function displayList(item) {
    const listItem = document.createElement("li");
    listItem.textContent = item;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add('delete');

    listItem.append(deleteBtn);

    list.append(listItem);

    deleteBtn.addEventListener("click", function() {
        list.removeChild(listItem);
        deleteChapter(listItem.textContent);
        input.focus();
    });
    // input.value = "";
    // input.focus();
}

function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

chaptersArray.forEach(chapter => {
    displayList(chapter);
});