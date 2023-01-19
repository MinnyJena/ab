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
      <h1
        style={{
          fontSize: '4rem',
          fontFamily: '"Comic Sans MS", fantasy',
          color: '#25a5be'
        }}
      >
        {"MinnyJena's first website with emojis(*￣▽￣*)ブ"}
      </h1>
      <h2
        style={{
          fontFamily: 'Comic Sans MS',
          color: '#be2596',
          fontSize: '3rem'
        }}
      >
        >{"click the buttons below, AND DON'T JOKE!!!!🙄😏😐😙😪😪"}
      </h2>
      <h3
        style={{
          fontFamily: '"Comic Sans MS", fantasy',
          color: 'magenta',
          fontSize: '9rem'
        }}
      >
        {'Tell me about you!!Q(^-^Q)'}
      </h3>
      <h4 style={{ fontFamily: '"Comic Sans MS", fantasy', color: "blue", fontSize: '2rem' }}
     >
        {'Wow big font up there🤣🤣🤣'} 
      </h4>  
      <button
        style={{
          fontFamily: 'Comic Sans MS',
          padding: '1rem',
          fontSize: '3rem',
          background: 'red',
          color: 'white'
        }}
        onClick={() => {
          let answer = prompt('How are you doing?');
          if (answer) {
            alert('Hmm.. you had a ' + answer + ' day!! Nice to meet you!');
          } else {
            alert('Tell me about your day please');
          }
        }}
      >
        {'I had a soso day, what about you?😝😝🤭'}
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
          let name = prompt("What's your name?☺😎😎😘");
          if (name) {
            alert('Hello and nice to meet you, ' + name + '! Nice name!😋😎');
          } else {
            alert('TELL ME YOUR NAME😜😠😡');
          }
        }}
      >
        {"What's your name?☺😎😎😘"}
      </button>
      <button
        style={{
          fontFamily: 'Comic Sans MS',
          padding: '1rem',
          fontSize: '2rem',
          background: 'pink',
          color: 'magenta',
          marginTop: '2rem'
        }}
        onClick={() => {
          let answer = prompt("What do you like😄😄?");
          if (answer) {
            alert('Oh! You like ' + answer + '! Thanks for telling me!!😎');
          } else {
            alert('Are you unsure??');
          }
        }}     
      >
        {"What do you like?😄😄"}
        </button>
    </div>
  );
}

export default HomePage;
