import React from 'react';
// import Greetings from './Greetings';
import NavigationBar from './NavigationBar';
import FlashMessagesList from './flash/FlashMessagesList';

// export default () => {
//   return (
//     <h1>Hello from react....!!!!</h1>
//   );
// }

// class App extends React.Component {
//   render () {
//     return (
//       <Greetings />
//     );
//   }
// }

class App extends React.Component {
  render () {
    return (
      <div className="container">
        <NavigationBar />
        <FlashMessagesList />
        {this.props.children}
      </div>
    );
  }
}

export default App;
