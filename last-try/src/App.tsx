// App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './Components/NavbarFile';
import Sidebar from './Components/SidebarFile';
// import DateAndTimePicker from './SubHeadersOfReports/Date-and-Time-Picker';


const App: React.FC = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <Router>
      <>
        <Navbar handleMenu={toggleSidebar} />
        <Sidebar open={openSidebar} handleDrawerClose={toggleSidebar} />
        {/* <Route path="/passenger-details-report">
          <DateAndTimePicker />
        </Route> */}
      </>
    </Router>
  );
};

export default App;
