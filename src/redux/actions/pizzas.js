import axios from 'axios'


export const setLoaded = val => ({
    type: 'SET_LOADING',
    payload: val,
})


export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
});



//fetch obrasheniye k serveru 
//fetchSmth get smth from server
export const fetchPizzas = (category, sortBy) => (dispatch) => {
    // fetch("http://localhost:3000/db.json")
    //   .then((resp) => resp.json())
    //   .then(json => {
    //     setPizzas(json.pizzas)
    //   })

    dispatch(setLoaded(false))
    axios.get(`/pizzas?${category !== null ? `category=${category}` : ``}&_sort=${sortBy.type}&_order=${sortBy.order}`)
        .then(({ data }) => {
            dispatch(setPizzas(data));
        })
};


