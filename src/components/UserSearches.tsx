import '../styles/App.scss'
import { Link, useParams } from 'react-router-dom'
import { users } from '../data/mockData'

const UserSearches = () => {
    const { userId } = useParams<{ userId: string }>()
    const user = users.find(u => u.id === userId)

    if (!user) {
        return (
            <div className="no-results">
                <h3>المستخدم غير موجود</h3>
            </div>
        )
    }

    return (
        <section className="search-history-list">
            <Link to={"/"} className='btn-back'>العـودة <i className="fa-solid fa-chevron-right"></i></Link>
            <div className="user-profile">
                <div className="user-profile__avatar-wrapper">
                    <img src={user.avatar} alt={user.name} className="user-profile__avatar" />
                    <span className="user-profile__status-circle"></span>
                </div>
                <h2 className="user-profile__name">{user.name}</h2>
            </div>

            <div className="search-history-list">
                {user.searchHistory
                    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
                    .map((search) => (
                        <div key={search.id} className="history-section__item user-item1">
                            <div className="user-item__content">
                                <div className="user-item__header">
                                    <span className="user-item__search-time">
                                        {new Date(search.timestamp).toLocaleDateString('ar-SA', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </span>
                                    <div className='user-section'>
                                        <span className="user-item__name">
                                            <div>
                                                <span className="user-item__search-term">{search.term}</span>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    )
}

export default UserSearches
