export function NavigationDots({ active }) {
    return (
        <div className="app__navigation-dots">
            {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                    <a href={`#${item}`} onClick={() => setToogle(false)}>{item}</a>
                </li>
            ))}
        </div>
    )
}