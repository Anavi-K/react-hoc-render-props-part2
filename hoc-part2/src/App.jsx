import './App.css';
import RenderPropsComponent from './components/RenderProps';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <RenderPropsComponent
          render={(value, increase) => <LikePost value={value} increase={increase} />}
        />
        <RenderPropsComponent
          render={(value, increase) => <LikeImage value={value} increase={increase} />}
        />
      </div>
    </div>
  );
}

export default App;