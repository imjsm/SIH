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
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome To Your Notebook</h1>
      <div style={styles.actionButtons}>
        <button style={styles.button} onClick={createNote}>Create New</button>
        <button style={styles.button}>Bookmarks</button>
      </div>
      <div style={styles.notesContainer}>
        {notes.map((note) => (
          <div key={note.id} style={styles.noteCard}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <div style={styles.date}>{note.date}</div>
            <button style={styles.editButton} onClick={() => editNote(note.id)}>✏️</button>
            <button style={styles.deleteButton} onClick={() => deleteNote(note.id)}>🗑️</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notebook;
