class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

function Main(){
    return (
        <main className="main-content">
          <h2>Main Content</h2>
          <div className="content-card">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </main>
    )
}


export default Main;