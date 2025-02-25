interface SearchHistory {
  id: string;
  term: string;
  timestamp: string;
}

interface User {
  id: string;
  name: string;
  avatar: string;
  searchHistory: SearchHistory[];
}

export const users: User[] = [
  {
    id: '1',
    name: 'أحمد محمد',
    avatar: 'https://i.pravatar.cc/150?img=1',
    searchHistory: [
      { id: '1', term: 'كيف أتعلم البرمجة', timestamp: '2024-01-15T14:30:00Z' },
      { id: '2', term: 'أفضل لغات البرمجة للمبتدئين', timestamp: '2024-01-15T15:45:00Z' },
      { id: '3', term: 'دورات برمجة مجانية', timestamp: '2024-01-15T16:20:00Z' },
      { id: '4', term: 'تعلم الفوتوشوب للمبتدئين', timestamp: '2024-01-15T17:30:00Z' },
      { id: '5', term: 'أفضل الهواتف الذكية 2024', timestamp: '2024-01-15T18:15:00Z' }
    ]
  },
  {
    id: '2',
    name: 'سارة عبدالله',
    avatar: 'https://i.pravatar.cc/150?img=5',
    searchHistory: [
      { id: '6', term: 'وصفات طبخ سريعة', timestamp: '2024-01-15T10:15:00Z' },
      { id: '7', term: 'حلويات سهلة التحضير', timestamp: '2024-01-15T11:30:00Z' },
      { id: '8', term: 'أكلات صحية للرجيم', timestamp: '2024-01-15T13:45:00Z' },
      { id: '9', term: 'تعلم الفوتوشوب للمبتدئين', timestamp: '2024-01-15T14:20:00Z' },
      { id: '10', term: 'نصائح للعناية بالبشرة', timestamp: '2024-01-15T15:10:00Z' }
    ]
  },
  {
    id: '3',
    name: 'محمد العلي',
    avatar: 'https://i.pravatar.cc/150?img=3',
    searchHistory: [
      { id: '11', term: 'أخبار التقنية', timestamp: '2024-01-15T09:00:00Z' },
      { id: '12', term: 'أفضل الهواتف الذكية 2024', timestamp: '2024-01-15T10:20:00Z' },
      { id: '13', term: 'مقارنة بين آيفون وسامسونج', timestamp: '2024-01-15T11:45:00Z' },
      { id: '14', term: 'كيف أتعلم البرمجة', timestamp: '2024-01-15T12:30:00Z' },
      { id: '15', term: 'أدوات التصميم المجانية', timestamp: '2024-01-15T13:15:00Z' }
    ]
  },
  {
    id: '4',
    name: 'فاطمة الزهراء',
    avatar: 'https://i.pravatar.cc/150?img=9',
    searchHistory: [
      { id: '16', term: 'نصائح للعناية بالبشرة', timestamp: '2024-01-15T12:00:00Z' },
      { id: '17', term: 'أفضل منتجات العناية بالشعر', timestamp: '2024-01-15T14:15:00Z' },
      { id: '18', term: 'مكياج ناعم للجامعة', timestamp: '2024-01-15T16:30:00Z' },
      { id: '19', term: 'وصفات طبخ سريعة', timestamp: '2024-01-15T17:45:00Z' },
      { id: '20', term: 'حلويات سهلة التحضير', timestamp: '2024-01-15T18:30:00Z' }
    ]
  },
  {
    id: '5',
    name: 'عبدالرحمن السعيد',
    avatar: 'https://i.pravatar.cc/150?img=4',
    searchHistory: [
      { id: '21', term: 'تمارين رياضية منزلية', timestamp: '2024-01-15T08:45:00Z' },
      { id: '22', term: 'نظام غذائي لبناء العضلات', timestamp: '2024-01-15T09:30:00Z' },
      { id: '23', term: 'مكملات غذائية للرياضيين', timestamp: '2024-01-15T11:00:00Z' },
      { id: '24', term: 'أكلات صحية للرجيم', timestamp: '2024-01-15T12:15:00Z' },
      { id: '25', term: 'تمارين كارديو للمبتدئين', timestamp: '2024-01-15T13:30:00Z' }
    ]
  },
  {
    id: '6',
    name: 'نورة الحربي',
    avatar: 'https://i.pravatar.cc/150?img=8',
    searchHistory: [
      { id: '26', term: 'دورات تصميم جرافيك', timestamp: '2024-01-15T13:15:00Z' },
      { id: '27', term: 'تعلم الفوتوشوب للمبتدئين', timestamp: '2024-01-15T15:00:00Z' },
      { id: '28', term: 'أدوات التصميم المجانية', timestamp: '2024-01-15T16:45:00Z' },
      { id: '29', term: 'كيف أتعلم البرمجة', timestamp: '2024-01-15T17:30:00Z' },
      { id: '30', term: 'دورات برمجة مجانية', timestamp: '2024-01-15T18:45:00Z' }
    ]
  },
  {
    id: '7',
    name: 'خالد المطيري',
    avatar: 'https://i.pravatar.cc/150?img=7',
    searchHistory: [
      { id: '31', term: 'أفضل الوجهات السياحية', timestamp: '2024-01-15T10:45:00Z' },
      { id: '32', term: 'نصائح للسفر بميزانية محدودة', timestamp: '2024-01-15T12:30:00Z' },
      { id: '33', term: 'أماكن سياحية في السعودية', timestamp: '2024-01-15T14:00:00Z' },
      { id: '34', term: 'أفضل الهواتف الذكية 2024', timestamp: '2024-01-15T15:45:00Z' },
      { id: '35', term: 'تطبيقات مفيدة للسفر', timestamp: '2024-01-15T17:00:00Z' }
    ]
  },
  {
    id: '8',
    name: 'ريم القحطاني',
    avatar: 'https://i.pravatar.cc/150?img=6',
    searchHistory: [
      { id: '36', term: 'كتب تنمية بشرية', timestamp: '2024-01-15T09:15:00Z' },
      { id: '37', term: 'نصائح للنجاح في العمل', timestamp: '2024-01-15T11:45:00Z' },
      { id: '38', term: 'دورات إدارة الوقت', timestamp: '2024-01-15T13:30:00Z' },
      { id: '39', term: 'كيف أتعلم البرمجة', timestamp: '2024-01-15T15:20:00Z' },
      { id: '40', term: 'نصائح للعناية بالبشرة', timestamp: '2024-01-15T16:45:00Z' }
    ]
  },
  {
    id: '9',
    name: 'عبدالله الشمري',
    avatar: 'https://i.pravatar.cc/150?img=2',
    searchHistory: [
      { id: '41', term: 'استثمار في الأسهم', timestamp: '2024-01-15T08:30:00Z' },
      { id: '42', term: 'نصائح للادخار الشهري', timestamp: '2024-01-15T10:00:00Z' },
      { id: '43', term: 'أساسيات التداول للمبتدئين', timestamp: '2024-01-15T12:15:00Z' },
      { id: '44', term: 'أفضل الهواتف الذكية 2024', timestamp: '2024-01-15T14:30:00Z' },
      { id: '45', term: 'تطبيقات تداول الأسهم', timestamp: '2024-01-15T16:00:00Z' }
    ]
  },
  {
    id: '10',
    name: 'منيرة السالم',
    avatar: 'https://i.pravatar.cc/150?img=10',
    searchHistory: [
      { id: '46', term: 'ديكورات منزلية بسيطة', timestamp: '2024-01-15T14:45:00Z' },
      { id: '47', term: 'أفكار لتنظيم المنزل', timestamp: '2024-01-15T15:30:00Z' },
      { id: '48', term: 'نباتات منزلية سهلة العناية', timestamp: '2024-01-15T16:15:00Z' },
      { id: '49', term: 'وصفات طبخ سريعة', timestamp: '2024-01-15T17:45:00Z' },
      { id: '50', term: 'حلويات سهلة التحضير', timestamp: '2024-01-15T18:30:00Z' }
    ]
  }
];
