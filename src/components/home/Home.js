import Header from '../header/Header';
import Tours from '../tours/Tours';
import tourData from '../../data/db.json';
import Footer from '../footer/Footer';

function Home() {
  return (
    <div>
      <Header />
      
      <div className='homeCardDiv'>
      {
        tourData.map((Obj, i)=>(
          <Tours key={i} name={Obj.name} img={Obj.image}/>
        ))
      }
      </div>

      <Tours />
      <Footer />
    </div>
  );
}

export default Home;