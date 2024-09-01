import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import Bookmarks from './Bookmarks';
import pen from '../assets/pen.png'; // Adjust the path as needed
import bookmarksIcon from '../assets/bookmarks.png'; // Adjust the path as needed

function Notebook() {
  const [notes, setNotes] = useState([]);
  const [bookmarkedPlants, setBookmarkedPlants] = useState([]);
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [showAllNotes, setShowAllNotes] = useState(false);
  const [currentNote, setCurrentNote] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeButton, setActiveButton] = useState('none'); 

  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarkedPlants')) || [];
    setBookmarkedPlants(savedBookmarks);
  }, []);

  const openCreateNoteModal = () => {
    setCurrentNote(null); // Ensure it's a new note
    setModalOpen(true);
  };

  const viewAllNotes = () => {
    setShowAllNotes(true);
    setShowBookmarks(false);
    setActiveButton('viewNotes');
  };

  const toggleView = () => {
    setShowBookmarks(!showBookmarks);
    setActiveButton(showBookmarks ? 'none' : 'bookmarks');
    setShowAllNotes(false);
  };

  const editNote = (id) => {
    const note = notes.find(note => note.id === id);
    setCurrentNote(note);
    setModalOpen(true);
  };

  const deleteNote = (id) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      const updatedNotes = notes.filter((note) => note.id !== id);
      setNotes(updatedNotes);
      const updatedBookmarks = bookmarkedPlants.filter((note) => note.id !== id);
      setBookmarkedPlants(updatedBookmarks);
      localStorage.setItem('bookmarkedPlants', JSON.stringify(updatedBookmarks));
    }
  };

  const handleSave = (note) => {
    if (note.id) {
      const updatedNotes = notes.map(n => (n.id === note.id ? note : n));
      setNotes(updatedNotes);
    } else {
      const newNote = { ...note, id: Date.now(), date: new Date().toLocaleDateString() };
      setNotes([...notes, newNote]);
    }
    setModalOpen(false);
  };

  const viewPlantDetails = (plant) => {
    alert(`Viewing details for ${plant.name}`);
  };

  return (
    <div className="bg-[#E8F3DF] min-h-screen flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-center mb-6" style={{ color: '#375F0F' }}>
        Welcome To Your Notebook
      </h1>
      <div className="flex space-x-4 mb-8">
        <button
          className={`flex items-center px-6 py-3 rounded ${activeButton === 'viewNotes' ? 'bg-green-600 text-white' : 'bg-green-200 text-gray-600'} hover:bg-green-700`}
          onClick={viewAllNotes}
        >
          <img src={pen} alt="View All Notes" className="w-5 h-5 mr-2" />
          View All Notes
        </button>
        <button
          className={`flex items-center px-6 py-3 rounded ${activeButton === 'bookmarks' ? 'bg-blue-600 text-white' : 'bg-blue-200 text-gray-600'} hover:bg-blue-700`}
          onClick={toggleView}
        >
          <img src={bookmarksIcon} alt="View Bookmarks" className="w-5 h-5 mr-2" />
          View Bookmarks
        </button>
      </div>
      {showBookmarks ? (
        <Bookmarks
          bookmarkedPlants={bookmarkedPlants}
          onViewPlant={viewPlantDetails}
        />
      ) : showAllNotes ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full max-w-4xl">
          {notes.length === 0 ? (
            <div className="flex items-center justify-center h-64 bg-white p-4 shadow-md rounded">
              <button className="flex items-center text-3xl text-gray-500" onClick={openCreateNoteModal}>
                <img src={pen} alt="Add Note" className="w-12 h-12" />
                <span className="flex items-center">+</span>
              </button>
            </div>
          ) : (
            notes.map((note) => (
              <div key={note.id} className="bg-white p-4 shadow-md rounded">
                <h2 className="text-xl font-semibold">{note.title}</h2>
                <p className="mt-2">{note.content}</p>
                <div className="text-sm text-gray-500 mt-2">{note.date}</div>
                <div className="mt-4 flex space-x-2">
                  <button className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500" onClick={() => editNote(note.id)}>✏️</button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600" onClick={() => deleteNote(note.id)}>🗑️</button>
                </div>
              </div>
            ))
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center h-64 bg-white p-4 shadow-md rounded">
          <button className="flex items-center text-3xl text-gray-500" onClick={openCreateNoteModal}>
            <img src={pen} alt="Add Note" className="w-12 h-12" />
            <span className="flex items-center">+</span>
          </button>
        </div>
      )}
      {modalOpen && (
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} onSave={handleSave} note={currentNote} />
      )}
    </div>
  );
}

export default Notebook;
