import React from 'react';

import { Header } from './components'
import { Home, Cart } from './pages/index'
import { Route } from 'react-router-dom'


function App() {

  //mapDispatchToPropsi -i poxaren hookerum es en ogtagorcum) 


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
      </div>
    </div>
  );
}

export default App;

// class App extends React.Component {

//   componentDidMount() {
//     axios.get("http://localhost:3000/db.json")
//       .then(({ data }) => {
//         this.props.savePizzas(data.pizzas);
//       });
//   }

//   render() {
//     console.log(this.props)
//     return (
//       <div className="wrapper">
//         <Header />
//         <div className="content">
//           <Route path="/" exact render={() => <Home pizzasList={this.props.items} />} />
//           <Route path="/cart" exact component={Cart} />
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     // items: et uxaki emr hamar cankacac anun, isk kox@ te vortexic
//     //state poxancvox obj, pizzas reducerna, items propertin
//     items: state.pizzas.items
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     //savePizzas Dispatchit anuna, u function@ vor kanchuma et dispatch@
//     savePizzas: (items) => dispatch(setPizzasAction(items)),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
