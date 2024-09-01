import React, { useState } from 'react';

function Notebook() {
  const [notes, setNotes] = useState([]);

  const createNote = () => {
    const title = prompt('Enter the title of your note:');
    if (!title) return;

    const content = prompt('Enter the content of your note:');
    if (!content) return;

    const newNote = {
      id: Date.now(),
      title: title,
      content: content,
      date: new Date().toLocaleDateString(),
    };

    setNotes([...notes, newNote]);
  };

  const editNote = (id) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        const newTitle = prompt('Edit the title of your note:', note.title);
        const newContent = prompt('Edit the content of your note:', note.content);
        return { ...note, title: newTitle || note.title, content: newContent || note.content };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  const deleteNote = (id) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      const updatedNotes = notes.filter((note) => note.id !== id);
      setNotes(updatedNotes);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl mb-6">Welcome To Your Notebook</h1>
      <div className="mb-6">
        <button
          className="mr-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          onClick={createNote}
        >
          Create New
        </button>
        <button className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700">
          Bookmarks
        </button>
      </div>
      <div className="flex flex-col">
        {notes.map((note) => (
          <div key={note.id} className="border border-gray-300 rounded-md p-4 mb-4">
            <h2 className="text-xl mb-2">{note.title}</h2>
            <p className="mb-2">{note.content}</p>
            <div className="text-xs text-gray-500 mb-2">{note.date}</div>
            <button
              className="bg-orange-500 text-white px-3 py-1 rounded-md mr-2 hover:bg-orange-600"
              onClick={() => editNote(note.id)}
            >
              ✏️
            </button>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
              onClick={() => deleteNote(note.id)}
            >
              🗑️
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notebook;
