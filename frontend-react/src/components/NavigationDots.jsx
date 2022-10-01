export function NavigationDots({ active }) {
    return (
        <div className="app__navigation">
            {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((index, item) => (
                <a
                    href={`#${item}`}
                    key={item + index}
                    className="app__navigation-dot"
                    style={ active === item ? {backgroundColor: '#313BAC'} : { }}
                />
            ))}
        </div>
    )
}