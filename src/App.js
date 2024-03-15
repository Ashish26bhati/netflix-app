
import './App.css';
import Card from './Card';
import Header from './Header';
import Sdata from './Sdata';

function App() {

  return (
    <>
  <Header/>
    <div className="grid  md:grid-cols-6  sm:grid-cols-2 gap-4 pl-14 pr-14 pt-3">
    {/* <Card
    imgsrc={Sdata[0].imgsrc}
    title={Sdata[0].title}
    sname={Sdata[0].sname}
    link={Sdata[0].link}/> */}

    {Sdata.map((val, i)=>{
      return(
        <Card
        key={val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}/>
      )
    })}
    </div>
    </>
  );
}

export default App;
