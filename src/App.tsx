import { Routes, Route } from 'react-router-dom'
import SearchByUser from './components/SearchByUser'
import UserSearches from './components/UserSearches'
import Home from './components/Home'
import './styles/App.scss'

const App = () => {
  return (
    <div className="app-container">
      <header className="header">
        <div className="header__profile">
          <img
            src="https://storage.googleapis.com/a1aa/image/XjijLUef7splCE2khwEquxN9hWdKV4stuNUDEw9XECJZxN2TA.jpg"
            alt="User profile picture"
          />
        </div>
        <div className="header__title">
          <div>Search Filter</div>
        </div>
      </header>

      <div className="content-area">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:searchTerm" element={<SearchByUser />} />
          <Route path="/user/:userId" element={<UserSearches />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
