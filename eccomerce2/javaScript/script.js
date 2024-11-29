// Get references to elements
const siteNameInput = document.getElementById("sitename");
const siteUrlInput = document.getElementById("siteurl");
const addBtn = document.getElementById("addbtn");
const updateBtn = document.getElementById("updatebtn");
const tableBody = document.getElementById("row");

let bookmarks = [];
let currentEditIndex = null;

// Add a bookmark
function addBookmark() {
    const siteName = siteNameInput.value.trim();
    const siteUrl = siteUrlInput.value.trim();

    if (!siteName || !siteUrl) {
        alert("Please fill in both fields!");
        return;
    }

    const bookmark = { name: siteName, url: siteUrl };
    bookmarks.push(bookmark);
    renderBookmarks();
    clearInputs();
}

// Render bookmarks to the table
function renderBookmarks() {
    tableBody.innerHTML = "";
    bookmarks.forEach((bookmark, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td><i class="fa-solid fa-bookmark pe-2"></i>${bookmark.name}</td>
            <td><a href="${bookmark.url}" target="_blank" class="btn btn-primary">Visit</a></td>
            <td><button class="btn btn-danger" onclick="deleteBookmark(${index})">Delete</button></td>
            <td><button class="btn btn-warning" onclick="editBookmark(${index})">Update</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// Delete a bookmark
function deleteBookmark(index) {
    bookmarks.splice(index, 1);
    renderBookmarks();
}

// Edit a bookmark
function editBookmark(index) {
    currentEditIndex = index;
    const bookmark = bookmarks[index];
    siteNameInput.value = bookmark.name;
    siteUrlInput.value = bookmark.url;
    addBtn.classList.add("d-none");
    updateBtn.classList.remove("d-none");
}

// Update a bookmark
function updateBookmark() {
    const siteName = siteNameInput.value.trim();
    const siteUrl = siteUrlInput.value.trim();

    if (!siteName || !siteUrl) {
        alert("Please fill in both fields!");
        return;
    }

    bookmarks[currentEditIndex] = { name: siteName, url: siteUrl };
    currentEditIndex = null;
    renderBookmarks();
    clearInputs();
    addBtn.classList.remove("d-none");
    updateBtn.classList.add("d-none");
}

// Clear input fields
function clearInputs() {
    siteNameInput.value = "";
    siteUrlInput.value = "";
}

// Add event listeners
addBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addBookmark();
});

updateBtn.addEventListener("click", (event) => {
    event.preventDefault();
    updateBookmark();
});
