import './App.css';
import Header from './components/Header/Header';
import Feature from './components/Feature/Feature';

function App() {
  const featureDef = [
    {src: 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png', heading: 'Declarative', sub: 'React makes it painless to create interactive UIs'},
    {src: 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png', heading: 'Components', sub: 'Build encapsulated components that manage their state'},
    {src: 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png', heading: 'Single-Way', sub: 'A set of immutable values are passed to the components'},
    {src: 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png', heading: 'JSX', sub: 'Statistically-typed designed to run on modern browswers.'}
  ]
  return (
    <div className="App">
      <Header />
      <div className="Features">
        {featureDef.map( featureDef => {
          return <Feature src={featureDef.src} heading={featureDef.heading} sub={featureDef.sub} />
        })}
      </div>
    </div>
  );
}

export default App;