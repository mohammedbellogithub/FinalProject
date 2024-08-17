import React from 'react';
import {UserProvider} from './provider/AppState';
import AppNavigation from './nav';
function App(): React.JSX.Element {
  return (
    <UserProvider>
      <AppNavigation />
    </UserProvider>
  );
}

export default App;
