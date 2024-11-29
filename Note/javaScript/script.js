const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

// Event listener for adding a new note
addBtn.addEventListener("click", () => addNote());

// Function to add a new note
function addNote(noteContent = "") {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `
    <div class="tools">
      <i class="save fas fa-save"></i>
      <i class="trash fas fa-trash"></i>
    </div>
    <textarea>${noteContent}</textarea>
  `;

  // Save and delete functionality
  const saveBtn = note.querySelector(".save");
  const trashBtn = note.querySelector(".trash");
  const textarea = note.querySelector("textarea");

  // Save note on button click or text input
  saveBtn.addEventListener("click", saveNotes);
  textarea.addEventListener("input", saveNotes);

  // Delete note on trash button click
  trashBtn.addEventListener("click", () => {
    note.remove();
    saveNotes();
  });

  main.appendChild(note);
}

// Function to save all notes to localStorage
function saveNotes() {
  const notes = document.querySelectorAll(".note textarea");
  const data = Array.from(notes).map(note => note.value);

  if (data.length === 0) {
    localStorage.removeItem("notes");
  } else {
    localStorage.setItem("notes", JSON.stringify(data));
  }
}

// Function to load notes from localStorage when the page loads
function loadNotes() {
  const lsNotes = JSON.parse(localStorage.getItem("notes"));

  if (lsNotes !== null) {
    lsNotes.forEach(noteContent => addNote(noteContent));
  }
}

// Load existing notes on page load
loadNotes();
