import React from 'react'
import PropTypes from 'prop-types'

//React memo-yi shornhiv, komponent@ rerendera linum menak en jamanak, erb propsner@ poxvel en
const Categories = React.memo(({ activeCategory, items, onClickItem }) => {


    const onSelectItem = (index) => {
        onClickItem(index)
    }

    return (
        <div className="categories">
            <ul>
                <li onClick={() => onSelectItem(null)} className={activeCategory === null ? 'active' : ''}>Все</li>
                {items && items.map((element, index) => (
                    <li className={activeCategory === index ? 'active' : ''} key={`${element}_${index}`} onClick={() => onSelectItem(index)}>{element}</li>
                ))}
            </ul>
        </div>
    );
})

Categories.propTypes = {
    // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickItem: PropTypes.func

};

Categories.defaultProps = {
    activeCategory: null,
    items: [],
}
export default Categories;