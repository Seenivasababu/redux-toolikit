import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarTotal from "./components/CarTotal";

const App = () => {
 
  
  return (
    <div>
         <CarForm/>
         <hr/>
         <CarSearch/>
         <hr/>
         <CarList/>
         <hr/>
         <CarTotal/>
    </div>
  );
};

export default App;
