# weatherdata
Use Case:
=========

This is a web application using React to fetch weather data. 
The application should consist of two pages, a login page and a home page.

Login Page
When a user first visits the site they should be presented with a login page. The login page should
consist of a form with fields for username and password and a button to submit their login request. You
do not need to implement a back-end API to handle the login request. For this example it is fine to just
hardcode the user details in the front-end and check against them on button click. We expect to login
with username ‘<Any username>’ and password ‘<Any password>’. 
Pls Note: The code has the flexibility for the validation that if the user enters the correct login details they
should be routed to the home page. If incorrect details are entered a message should be displayed and
the user should stay on the login page.

  Home Page
The home page will be used to display weather information for a list of favourite cities.
At the top of the page you should display a welcome message that includes the username of the
currently logged in user, e.g ‘Welcome to the weather app ipgautomotive’.
The home page should allow the user to add their favourite city to a list. The list of cities should be
displayed. The user should be able to remove a city from the list. The user should be able to enter a
maximum of 5 cities.
For each city in the list you should display a card that contains the current weather information for that
city. You can retrieve the weather information for a city by using the REST API
