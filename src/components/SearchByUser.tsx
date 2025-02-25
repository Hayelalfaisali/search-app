import '../styles/App.scss'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { users } from '../data/mockData'

const SearchByUser = () => {
    const { searchTerm: urlSearchTerm } = useParams<{ searchTerm: string }>()
    const [searchTerm, setSearchTerm] = useState('')
    const [showSuggestions, setShowSuggestions] = useState(false)
    const [suggestions, setSuggestions] = useState<string[]>([])
    const [recentSearches, setRecentSearches] = useState<string[]>([])
    const [error, setError] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const savedSearches = localStorage.getItem('recentSearches')
        if (savedSearches) {
            setRecentSearches(JSON.parse(savedSearches))
        }
    }, [])

    const validateInput = (input: string) => {
        // Allow English letters, Arabic letters, numbers, spaces, and basic punctuation
        const validPattern = /^[\u0600-\u06FFa-zA-Z0-9\s.,!?-]*$/
        return validPattern.test(input)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        if (validateInput(newValue)) {
            setSearchTerm(newValue)
            setError('')
        } else {
            setError('فضلاً استخدم الحروف العربية والإنجليزية والأرقام فقط')
        }
    }

    useEffect(() => {
        if (searchTerm) {
            const allSearchTerms = users.flatMap(user =>
                user.searchHistory.map(search => search.term)
            )

            const filtered = allSearchTerms
                .filter(term =>
                    term.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .slice(0, 5)

            setSuggestions(filtered)
            setShowSuggestions(true)
        } else {
            setSuggestions([])
            setShowSuggestions(false)
        }
    }, [searchTerm])

    const handleSearch = (term: string) => {
        if (!term.trim()) return
        if (!validateInput(term)) {
            setError('فضلاً استخدم الحروف العربية والإنجليزية والأرقام فقط')
            return
        }

        const newRecentSearches = [term, ...recentSearches.filter(s => s !== term)].slice(0, 5)
        setRecentSearches(newRecentSearches)
        localStorage.setItem('recentSearches', JSON.stringify(newRecentSearches))

        setSearchTerm('')
        setShowSuggestions(false)
        setError('')
        navigate(`/search/${encodeURIComponent(term)}`)
    }

    // Get all users who have searched for the term
    const matchingUsers = users.filter(user =>
        user.searchHistory.some(search =>
            search.term.toLowerCase().includes(urlSearchTerm?.toLowerCase() || '')
        )
    ).map(user => {
        const matchingSearches = user.searchHistory.filter(search =>
            search.term.toLowerCase().includes(urlSearchTerm?.toLowerCase() || '')
        )
        return {
            ...user,
            matchingSearch: matchingSearches[0]
        }
    })

    return (
        <>
            <section className="search-section">
                <div className="search-section__container">
                    <input
                        type="text"
                        className="search-section__input"
                        placeholder="ابحث عن أي شيء"
                        value={searchTerm}
                        onChange={handleInputChange}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !error) {
                                handleSearch(searchTerm)
                            }
                        }}
                    />
                    <i className="fa-solid fa-magnifying-glass search-section__icon"
                        onClick={() => !error && handleSearch(searchTerm)}></i>
                    {error && <div className="search-section__error">{error}</div>}
                </div>

                {showSuggestions && suggestions.length > 0 && (
                    <div className="suggestions-list">
                        {suggestions.map((suggestion, index) => (
                            <div
                                key={index}
                                className="suggestion-item"
                                onClick={() => handleSearch(suggestion)}
                            >
                                {suggestion}
                                <i className="fa-solid fa-clock-rotate-left"></i>
                            </div>
                        ))}
                    </div>
                )}


            </section>

            <section className="search-history-list">
                <h2 className="history-section__title">المستخدمين الذين بحثوا عن: {decodeURIComponent(urlSearchTerm || '')}</h2>
                <div className="search-history-list">
                    {matchingUsers.length > 0 ? (
                        matchingUsers.map((user) => (
                            <div
                                key={user.id}
                                className="history-section__item user-item"
                                onClick={() => navigate(`/user/${user.id}`)}
                            >
                                <div className="user-item__content">
                                    <div className="user-item__header">
                                        {user.matchingSearch && (
                                            <span className="user-item__search-time">
                                                {new Date(user.matchingSearch.timestamp).toLocaleDateString('ar-SA', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}
                                            </span>
                                        )}
                                        <div className='user-section'>
                                            <span className="user-item__name">
                                                <div>
                                                    {user.name}
                                                </div>
                                                {user.matchingSearch && (
                                                    <div>
                                                        <span className="user-item__search-term">{user.matchingSearch.term}</span>
                                                    </div>
                                                )}
                                            </span>
                                            <div className="user-item__avatar-wrapper">
                                                <img src={user.avatar} alt={user.name} className="user-item__avatar" />
                                                <span className="user-item__status-circle"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="no-results">
                            <div className="no-results__icon">
                                <i className="fa-solid fa-file-magnifying-glass"></i>
                            </div>
                            <h3>لا يوجد نتائج بحث</h3>
                            <p>لم نتمكن من العثور على أي مستخدم بحث عن "{decodeURIComponent(urlSearchTerm || '')}"</p>
                            <div className="no-results__suggestions">
                                <p>يمكنك المحاولة:</p>
                                <ul>
                                    <li> التأكد من كتابة جميع الكلمات بشكل صحيح<i className="fa-solid fa-check"></i></li>
                                    <li> استخدام كلمات مختلفة<i className="fa-solid fa-arrows-left-right"></i></li>
                                    <li> البحث عن مصطلحات أكثر شيوعاً<i className="fa-solid fa-star"></i></li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default SearchByUser
