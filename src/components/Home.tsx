import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { users } from '../data/mockData'

const Home = () => {
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

    return (
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

            {!showSuggestions && recentSearches.length > 0 && (
                <div className="recent-searches">
                    <h3>عمليات البحث الأخيرة</h3>
                    <div className="recent-searches__list">
                        {recentSearches.map((term, index) => (
                            <div
                                key={index}
                                className="recent-search-item"
                                onClick={() => handleSearch(term)}
                            >
                                <i className="fas fa-history"></i>
                                {term}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {!showSuggestions && recentSearches.length === 0 && !searchTerm && (
                <div className="recent-searches">
                    <h3>عمليات البحث الشائعة</h3>
                    <div className="recent-searches__list">
                        {[
                            'كيف أتعلم البرمجة',
                            'نصائح للعناية بالبشرة',
                            'وصفات طبخ سريعة',
                            'أفضل الهواتف الذكية 2024',
                            'تعلم الفوتوشوب للمبتدئين'
                        ].map((term, index) => (
                            <div
                                key={index}
                                className="recent-search-item"
                                onClick={() => handleSearch(term)}
                            >
                                <i className="fa-solid fa-fire"></i>
                                {term}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    )
}

export default Home
