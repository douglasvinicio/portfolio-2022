export function NavigationDots({ active }) {
    return (
        <div className="app__navigation">
            {['home', 'work', 'about','contact'].map((item, index) => (
                <a
                    href={`#${item}`}
                    key={item + index}
                    className="app__navigation-dot"
                    style={ active === item ? {backgroundColor: '#44F24F'} : { }}
                />
            ))}
        </div>
    )
}