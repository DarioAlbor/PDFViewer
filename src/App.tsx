import PDFList from './components/PDFViewer/PDFList';
import { Data } from './components/PDFViewer/data/PDFListData';
import IPDFList from './components/PDFViewer/models/PDFList.model';
import Hero from './components/index';

function App() {
  const data: IPDFList[] = Data;

  const PDFViewer = () => {
    return (
      <div className="small-space">
       
       
       <Hero />
        <div className='container'>
          <PDFList lists={data} />
        </div>


      </div>
    );
  }

  return <PDFViewer />;
}

export default App;
