import React from 'react';
import { Categories, SortPopup, PizzaBlock, LoadingBlock } from '../components/index'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPizzas } from '../redux/actions/pizzas'
import { addPizzaToCart } from '../redux/actions/cart'

import { setCategory, setSortBy } from '../redux/actions/filters'

const categoryNames = [
    'Месные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
];

const sortItems = [
    {
        name: 'популярности',
        type: 'rating',
        order: 'desc'
    },
    {
        name: 'цене',
        type: 'price',
        order: 'desc'
    },
    {
        name: 'алфавиту',
        type: 'name',
        order: 'asc'
    }
];


const Home = (props) => {



    //useSelector@ nuyn connectna, dra hamar 1i argument stanuma function like, mapStateToProps
    //ete object enq stanum es tarberakov
    // const { items } = useSelector(({ pizzas, filters }) => {
    //     return {
    //         items: pizzas.items,
    //     }
    // });
    //ete massiv to es

    window.addEventListener('scroll', event => {
        let scroll = window.scrollY;
        let docHeight = document.body.offsetHeight;
        let winHeight = window.innerHeight;
        let scrollPercent = scroll / (docHeight - winHeight);
        let scrollPercentRounded = Math.round(scrollPercent * 100);
        if (scroll > 80) {
            console.log(' more than 80%')
        }
        else {
            console.log(' less than 80%')
        }
    })

    const items = useSelector(({ pizzas }) => pizzas.items);
    const cartItems = useSelector(({ cart }) => cart.items);
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
    const { category, sortBy } = useSelector(({ filters }) => filters);
    const dispatch = useDispatch();


    React.useEffect(() => {
        dispatch(fetchPizzas(category, sortBy));
    }, [category, sortBy]);

    // reactin asum enq , vor 1 angam ssilka ta es functionin, u el chpoxi erbeq, lracucich rerenderi xusapelu hamar
    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, [])

    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type));
    }, [])

    const handleAddPizzaToCart = (obj) => {
        dispatch(addPizzaToCart(obj))
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickItem={onSelectCategory}
                    items={categoryNames}
                    activeCategory={category} />
                <SortPopup items={sortItems} activeSortType={sortBy.type} onChangeSortBy={onSelectSortType} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded ? items.map(pizza => <PizzaBlock key={pizza.id} inCartCount={cartItems[pizza.id] && cartItems[pizza.id].items.length} onAddPizza={handleAddPizzaToCart} {...pizza} />) :
                    Array(12).fill(0).map((_, index) => <LoadingBlock key={index} />)
                }
            </div>
        </div>
    )
}


export default Home