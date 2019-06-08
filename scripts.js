const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.append(logo);
app.append(container);

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://ghibliapi.herokuapp.com/films');

xhr.onload = function () {
  const data = JSON.parse(this.response);

  if (xhr.status >= 200 && xhr.status < 400) {
    data.forEach(movie => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = movie.title;

      const p = document.createElement('p');
      movie.description = movie.description.slice(0, 300);
      p.textContent = `${movie.description}...`;

      card.append(h1, p);
      container.append(card);
    })
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.append(errorMessage);
  };

};

xhr.send();
