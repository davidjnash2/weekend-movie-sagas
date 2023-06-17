# Project Name

WEEKEND MOVIE SAGAS
## Description

Full-stack, full-CRUD MVC SPA movie app. 

Creating SQL database of multiple tables to store movie data. Retrieving data via server requests, serving to client side to be held in state and rendered to DOM.

Technologies used:
    Node
    Express
    Axios
    React
    React-Redux
    Redux-Saga
    Redux-Logger
    Javascript
    PostgreSQL
    Postico
    Postman
    VSCode


:::PARTS TO BUILD:::

FRONT END:
    -INDEX
        -add sagas
            -add to root saga
                x-fetchDetails
                -
        -add reducers
            -add to store
                -details
                -
    -APP/HOME VIEW
        x-route to '/details' view
        x-add import for MovieDetails component
        x-route to '/add' view
        -add import for AddMovie component
        -comment
        -format
    x-MovieList
        x-refactor item data to MovieListItem component
        x-comment
        x-format
    x-MovieListItem
        x-new component
        x-on poster click:
            x-bring to '/details'
            x-GET
                x-SQL query for details data
        x-comment
        x-format
    -'/details' VIEW
        x-own component
                -render data
                x-return to main view button 
                    x- route to home '/'
                -?load on refresh?
    



BACK END:
    SERVER:
        x-finish genre router GET
        x-GET for specific movie details
        -comment and format files as needed
        

    DATABASE:
        x-Create database
        x-Create tables
        x-Write SQL queries

