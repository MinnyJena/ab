function HomePage() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1 style={{ fontFamily: '"Comic Sans MS", fantasy', color: '#25a5be' }}>
        {"MinnyJena's website"}
      </h1>
      <h2
        style={{
          fontFamily: 'Comic Sans MS',
          color: '#be2596'
          }}>
      >
        {"click the buttons below"}
      </h2>
      <button
        style={{
          fontFamily: 'Comic Sans MS',
          padding: '1rem',
          fontSize: '2rem',
          background: '#69bdd2',
          color: 'white'
        }}
        onClick={() => alert('Hello there')}
      >
        Welcome
      </button>
      <button
        style={{
          fontFamily: 'Comic Sans MS',
          padding: '1rem',
          fontSize: '2rem',
          background: '#eab676',
          color: '#873e23',
          marginTop: '2rem'
        }}
        onClick={() => {
          let name = prompt("What's your name?");
          if (name) {
            alert('Nice to meet you, ' + name + '!');
          } else {
            alert('Nice to meet you, stranger');
          }
        }}
      >
        {"What's your name?"}
      </button>
    </div>
  );
}

export default HomePage;
