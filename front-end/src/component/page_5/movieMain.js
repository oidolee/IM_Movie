import React, { Component } from 'react';
import '../../styles/page_5/movieMain.css'


const MovieList = () => {
  // 영화 데이터 배열
  const movies = [
    {imageUrl: 'https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202402/20808_103_1.jpg', id: 1, title: '파묘', time: '134'},
    {imageUrl: 'https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202402/20710_103_1.jpg',id: 2, title: '듄:파트2', time: '165'},
    {imageUrl: 'https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202402/20787_103_1.jpg', id: 3, title: '건국전쟁', time: '100'},
    {imageUrl: 'https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202401/20701_103_1.jpg', id: 4, title: '윙카', time: '116'},
    {imageUrl: 'https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202402/20782_103_1.jpg' , id: 5, title: '소풍', time: '113'},
  ];

  const movies2 = [
    {imageUrl: 'https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202403/20824_103_1.jpg', id: 5, title: '가여운 것들', time: '141'},
    {imageUrl: 'https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202403/20809_103_1.jpg',id: 6, title: '패스트 라이브즈', time: '105'},
    {imageUrl: 'https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202403/20866_103_1.jpg', id: 7, title: '벙커 게임', time: '95'},
    {imageUrl: 'https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/201707/11613_103_1.jpg', id: 8, title: '예수는 역사다', time: '113'},
    {imageUrl: 'https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202403/20676_103_1.jpg' , id: 9, title: '생츄어리2:쿼카가 너무해', time: '87'},
  ];

  const movies3 = [
    {imageUrl: 'https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202402/20782_103_1.jpg', id: 10, title: '가여운 것들', time: '141'},
    {imageUrl: 'https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202403/20827_103_1.jpg',id: 11, title: '패스트 라이브즈', time: '105'},
    {imageUrl: 'https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202401/20753_103_1.jpg', id: 12, title: '벙커 게임', time: '95'},
    {imageUrl: 'https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202402/20832_103_1.jpg', id: 13, title: '예수는 역사다', time: '113'},
    {imageUrl: 'https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202402/20828_103_1.jpg' , id: 14, title: '생츄어리2:쿼카가 너무해', time: '87'},
  ];



  return (
    <div>
      <div className="movie-list">
        <h2>현재 상영작 TOP 5</h2>
        {movies.map(movie => (
          <div key={movie.id} className="movie">
            <img src={movie.imageUrl} alt={movie.title} />
            <p>{movie.title}</p>
            <p>시간: {movie.time}분</p> 
          </div>
        ))}
      </div>

      <div className="movie-list2">
        <h2>현재 상영작 TOP 5</h2>
        {movies2.map(movie2 => (
          <div key={movie2.id} className="movie2">
            <img src={movie2.imageUrl} alt={movie2.title} />
            <p>{movie2.title}</p>
            <p>시간: {movie2.time}분</p> 
          </div>
        ))}
      </div>
</div>
  
  
  
  
  
  
  
  );
};

export default MovieList;