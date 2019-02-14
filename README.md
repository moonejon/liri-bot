# liri-bot
## UT Coding Bootcamp - Week 10 - Node.JS

Liri is a virtual assistant written using Node.js.

Using Liri, you can search music, look up details for your favorite films, and look up concert dates!

![image](https://user-images.githubusercontent.com/9158340/52765092-4a7af100-2fe8-11e9-975c-271e38ca0149.png)

### Music Search

Using the Spotify API, you can retrieve song data and a link that you can use to listen to the requested song.

![image](https://user-images.githubusercontent.com/9158340/52765154-99c12180-2fe8-11e9-867a-1811af8f2680.png)

If no input is provided, the music search value will default to one of the developer's favorite songs. XD

![image](https://user-images.githubusercontent.com/9158340/52765217-d42abe80-2fe8-11e9-8903-63d15a23dfb0.png)


### Movie Search

Using the OMDB (Open Movie Database) API, you can find detailed movie data, including a brief plot synopsis and cast list.

![image](https://user-images.githubusercontent.com/9158340/52765321-3683bf00-2fe9-11e9-9179-aeaa561376b6.png)

If no input is provided, the movie search value will default to the classic shipwreck film Titanic.

![image](https://user-images.githubusercontent.com/9158340/52765418-8febee00-2fe9-11e9-9640-b54905ca4a87.png)


### Concert Search

Using the BandsInTown API, you can retrieve a list of five upcoming shows for your band/artist of choice. 

![image](https://user-images.githubusercontent.com/9158340/52765759-ac3c5a80-2fea-11e9-9a55-0133b6eaeef4.png)

If no input is provided, the search value will default to the classic rock band Metallica.

![image](https://user-images.githubusercontent.com/9158340/52765661-5e275700-2fea-11e9-81c3-1204b231ebde.png)


### Random Search

If `do-what-it-says` is selected and you confirm your selection, you'll receive data regarding one of the greatest films of all time.

![image](https://user-images.githubusercontent.com/9158340/52765879-0e955b00-2feb-11e9-84a9-a1313f075683.png)


### Error Handling

If your query is invalid, it will log an error message stating that you should retry your search.

![image](https://user-images.githubusercontent.com/9158340/52765975-52886000-2feb-11e9-9140-183bc51588d6.png)
