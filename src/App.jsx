import Scene from './components/Scene'

function App() {

  return (
    <>
      <div className="container">
        <div className="nav">
          <h1 className="label" />
          <div />
          <span className="caption" />
          <div />
          <a href="https://t.me/gnulitskaya">
            <div className="button">CONTACT ME</div>
          </a>
          <div className="button gray">///</div>
        </div>
        <Scene style={{ borderRadius: 20 }} />
      </div>
    </>
  )
}

export default App;