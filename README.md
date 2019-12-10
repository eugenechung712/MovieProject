# MovieProject

Author: Eugene chung

A simple web application which allows user to search for a movie title based upon an existing movie API. The search then returns a list of movies which the user can then select. This in turn returns a detailed description of the movie selected. 

## Time spent
 * Tutorials, research: around 10 hours
 * Coding required stories: 2 hours
 * Optional and extras: 2 hours

## User stories

### Required
 * [x] User can search for movies. 
 * [x] On page load, user can see 3-5 pre-selected movies.
 * [x] User can click on movie to see a detail page with more information (e.g. ratings, descriptions, author)

### Optional

 * [ ] Fade in the poster images
 * [ ] Have a toggle which switches the search layout between a "grid" view and a "table" style view
 * [ ] Have an error message if the API fails to load.
 * [ ] Show a loading state when fetching for a movie
 * [x] Have a pagination mechanism that allows the user to see more results. Show the total number of results.
 * [ ] Add a light/dark color theme toggle on the page
 * [ ] Page is optimized for the viewport/browser size (i.e. scales to mobile & desktop sizes)

### Extra

 * Navbar is in a component.
 
![](movieprojet.gif)
GIF created with [LiceCap](https://www.cockos.com/licecap/).

## Notes & shoutouts

 Putting navbar in a component was challenging due to limitations that came about. Functions such as transitionToRoute could not be used directly in the component because it must be used in the controller.
