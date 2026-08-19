import './App.css'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Homepage/Home'
import { About } from './pages/About/About'

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isModalOpen && (
        <div className='modal-body'>
          <div className='modal-wrap'>
            <img src="./people/popup-lady.png" alt="Popup img" className='popup-lady' />
            <div className='modal-content'>
              <button className='close-btn' onClick={() => setIsModalOpen(false)}>×</button>
              <div className='modal-text-wrap'>
                <p className='modal-heading'>Subscribe to Our Newsletter</p>
                <p className='modal-info'>Subscribe to our newsletter and Save your <span className='orange-text'>20% money</span> with discount code today.</p>
              </div>
              <div className='modal-input-div'>
                <input type="email" id='modal-input' placeholder='Enter your email' />
                <button className='modal-sub-button'>Subscribe</button>
              </div>
              <div className='checkbox-wrap'>
                <input type="checkbox" id='checkbox' />
                <label htmlFor="checkbox">Do not show this window</label>
              </div>
            </div>
          </div>
        </div >
      )
      }

      <Routes>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
    </>
  )
}

export default App
