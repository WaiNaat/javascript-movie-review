class Movie {
  template ({ poster_path, title, vote_average, backdrop_path }) {
    return `
    <li>
      <a>
        <div class="item-card">
          <img
            class="item-thumbnail"
            src="https://image.tmdb.org/t/p/w500${poster_path}"
            loading="lazy"
            alt="${title}"
          />
          <p class="item-title">${title}</p>
          <p class="item-score"><img src="./star_filled.png" alt="별점" /> ${vote_average}</p>
        </div>
      </a>
    </li>
     `;
  }
}

export default Movie;
