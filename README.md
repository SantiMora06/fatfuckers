# FitnessFitHub

![IronHack logo](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

## Table of Contents

### Introduction

- [Introduction](#introduction)
- [The Team](#the-team)
- [Project organization](#project-organization)
- [React features](#react-features)
- [Set it up](#set-it-up)
- [Submit it to revision](#submit-it-to-revision)
- [Contributing to FitnessFitHub](#contributing-to-fitnessfithub)

FitnessFitHub is our SPA recipe website made with:
- React
- Node.js
- CSS + Mantine library
- HTML

We seeked to build a functional, reliable and user friendly webpage to anyone who would like to wants to do exercise and how to execute its movements. You can filter for categories, as muscle groups, and gy gym or bodyweight. You can add your own exercises and delete some others that you have done! You can also go into details of a fully description of the exercise itself.

### The Team

![Omid Jahromi](https://ca.slack-edge.com/T074M2WGPDY-U0759SZ1A4Q-cc123341a63b-512)
![Santiago Mora](https://ca.slack-edge.com/T074M2WGPDY-U074EEGFVPY-bef7c3816adb-512)

### Project organization

Serving the well practice purpose, we first create folders for the corresponding uses. First, the assets, where the data and images will be imported from. In here we will retrieve the images, logos or data that will be displayed later on. After all, just the about us, the logo and the images from the main page where storage on the frontend.

Then, we kept in mind the importance of dividing "components" inside a folder, so we create one and add inside it the about us, body exercises, delete handler, edit form, gym exercises, intro cards, main navbar, footer, form, list, the item list, navbar and the toggle navbar. In this way the webpage will display the needed components.

Inside the pages, we want to display different kind of content and serving different purposes. About, Add exercise, Edit exercise, Home, Not found, Bodyweight, Gym, Exercise details and Workouts are the different pages you'll encounter.

We made use of the Routes, Route and Link for giving access to different pages on the web, with these, we can interconect them and avoid reloading the page. Then, in the App.jsx, we add every element from the components and their paths to the desired pages.

Finally, in the main.jsx we can see the App.jsx element, encapsulated on the Router. In each case, we imported the necessary elements.

We have some functionalities as adding an exercise (as a form) or editing an exercise. Also, we can navigate back to the main page by clicking on the navbar, show and hide the menu through a click and accessing any category of exercises, by clicking on it, delete it with the delete <button> or see the details depending on the kind of exercise we want more information about.

### React features

- Router, Routes, Route and Link
- Asynchronous promises
- Functions and callbacks
- Forms
- useParams()
- useState()
- useEffect()
- HOF(.filter().map())



#### Contributing to FitnessFitHub

First time contributing to FitnessFitHub?

##### Set it up

- Fork this repo
- Clone this repo
- Open this repo and start!

> cd FitnessFitHub
> npm i
> npm run dev (to watch the visual result of your code, copy and paste the url provided after this code runs)


##### Submit it to revision

Remeber the steps!

> git add .
> git commit -m " (What you did modify) "
> git push origin master

Now is the time for creating a Pull Request, wait until our team checks the changes and for us to thank you for your time!

- Fork our repository from GitHub
- Clone the repository
- Once you have it, make the changes you think it can improve the web
- Remember to use git add <file name> or git add .
- Rememeber to commit the changes
- Finally write: git push main/origin
- Once you have done it, navigate to your repository on GitHub and make a pull request, our team will be happy to see and apply the suggestions you made!