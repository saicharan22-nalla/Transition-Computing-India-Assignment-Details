
import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/Header/Header";
import './App.css'
import ProfileTabs from "./components/ProfileTabs/ProfileTabs";
import Card from "./components/Card/Card";
import Conversation from "./components/conversation/conversation";
import CaturaComponent from "./components/CaturaComponent/CaturaComponent";


const App = () => {
 


  return (
       <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <ProfileTabs/>
        <div className="App">
          <Card />
        <Conversation />
        <CaturaComponent/>
        
    
          </div>
  
        </div>
        

      </div>


  )
}

export default App