import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {clickhandler} from './actions';
import {useEffect} from 'react';
import {products} from './reducer/Product';

function App(props) {
  console.log(products)
  useEffect(() => {
    props.updateProduct(products);
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
const mapStateToProps = state => ({
  state
})
const mapDispatchToProps = dispatch =>  ({
  clickhandler: (data) => dispatch(clickhandler(data))
})

export default connect (mapStateToProps, mapDispatchToProps)(App);
