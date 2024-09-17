import { getAuth } from "firebase/auth";
import { collection, getFirestore, limit, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bookmarksIcon from '../assets/bookmarks.png';
import pen from '../assets/pen.png';
import Bookmarks from './Bookmarks';
import Modal from './Modal';

function Notebook() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeView, setActiveView] = useState('notes'); 
  const [bookmarkedPlants, setBookmarkedPlants] = useState([]); 

  const auth = getAuth(); // Initialize auth first
  const userId = auth.currentUser ? auth.currentUser.uid : null;  // Now you can use auth.currentUser
  const navigate = useNavigate();
  const db = getFirestore(); // Firestore reference
  const storage = getStorage(); // Firebase storage reference
 const fetchLatestNote = () => {
    if (userId) {
      const q = query(
        collection(db, 'notes'),
        where('userId', '==', userId),
        orderBy('timestamp', 'desc'),
        limit(1)
      );
  
      // Listen for real-time updates
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const notesArray = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNotes(notesArray);
      });
  
      // Clean up listener on component unmount
      return () => unsubscribe();
    }
  };
  
  useEffect(() => {
    fetchLatestNote();
  }, [userId]);


  const openCreateNoteModal = () => {
    setCurrentNote(null);
    setModalOpen(true);
  };

  const openEditNoteModal = (note) => {
    setCurrentNote(note); 
    setModalOpen(true);
  };

  const handleSave = (note) => {
    let updatedNotes = [];
    if (note.id) {
      updatedNotes = notes.map(n => (n.id === note.id ? note : n));
    } else {
      const newNote = { ...note, id: Date.now(), date: new Date().toLocaleDateString() };
      updatedNotes = [...notes, newNote];
    }
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    setModalOpen(false);
  };

  const deleteNote = (id) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      const updatedNotes = notes.filter((note) => note.id !== id);
      setNotes(updatedNotes);
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
    }
  };

  const editNote = (id) => {
    const noteToEdit = notes.find(note => note.id === id);
    if (noteToEdit) {
      openEditNoteModal(noteToEdit);
    }
  };

  const handleViewBookmarks = () => {
    setActiveView('bookmarks');
    
  };

  const handleViewNotes = () => {
    setActiveView('notes');
  };

  return (
    <div className="bg-[#E8F3DF] min-h-screen flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-center mb-6" style={{ color: '#375F0F' }}>
        Welcome To Your Notebook
      </h1>
      <div className="flex space-x-4 mb-8">
        <button
          className={`flex items-center px-6 py-3 rounded ${activeView === 'notes' ? 'bg-green-600 text-white' : 'bg-green-200 text-gray-600'} hover:bg-green-700`}
          onClick={handleViewNotes}
        >
          <img src={pen} alt="View Notes" className="w-5 h-5 mr-2" />
          View All Notes
        </button>
        <button
          className={`flex items-center px-6 py-3 rounded ${activeView === 'bookmarks' ? 'bg-blue-600 text-white' : 'bg-blue-200 text-gray-600'} hover:bg-blue-700`}
          onClick={handleViewBookmarks}
        >
          <img src={bookmarksIcon} alt="View Bookmarks" className="w-5 h-5 mr-2" />
          View Bookmarks
        </button>
      </div>
      {activeView === 'notes' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full max-w-4xl">
          <div className="flex items-center justify-center h-64 bg-white p-4 shadow-md rounded">
            <button className="flex flex-col items-center text-gray-500" onClick={openCreateNoteModal}>
              <img src={pen} alt="Add Note" className="w-12 h-12 mb-2" />
              <span className="text-xl">+</span>
              <span className="text-lg mt-2">Add New Note</span>
            </button>
          </div>
          {notes.map((note) => (
            <div key={note.id} className="bg-white p-4 shadow-md rounded">
              <h2 className="text-xl font-semibold">{note.title}</h2>
              <p className="mt-2">{note.content}</p>
              <div className="text-sm text-gray-500 mt-2">{note.date}</div>
              <div className="mt-4 flex space-x-2">
                <button className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500" onClick={() => editNote(note.id)}>✏️</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600" onClick={() => deleteNote(note.id)}>🗑️</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Bookmarks bookmarkedPlants={bookmarkedPlants} onViewPlant={(plant) => {/* Handle view plant */}} />
      )}
      
      {modalOpen && (
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} onSave={handleSave} note={currentNote} />
      )}
    </div>
  );
}

export default Notebook;
