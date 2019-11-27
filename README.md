> This project is ARCHIVED. You can still fork it, but to clone the latest version, or to submit issues or propose changes, go to https://github.com/cfpaige/get-the-ushe/ instead.

# The Ushe \[t͟hə ˈyüzh]

The one-stop app for all your meal trains, office coffee runs, and "can I get you something on the way?" requests, and getting every one of them right, every time.

Save your favorites, share, and discover. 

#### _With The Ushe, you don't have to be a regular to get the usual!_

------------------------------------

## Y tho?

We've all been there: You've tried your best, but somebody's not getting what they wanted anyway. Or a friend was being thoughtful when you were sick, and brought in a meal... That you cannot eat. Or you're somewhere you've been before, where you had that thing you liked a lot, but cannot remember where exactly or what it was. Or you're in a new place, the menu's a confusing mess, and you just want to know what's people's favorite there so you can play it cool.

![Still from The Devil Wears Prada with Anne Hathaway talking on the phone and carrying a tray of four coffees](/devil-prada-coffee-run.jpg)

The Ushe has got your back. Keep track of your favorite places and orders, share with friends, pool orders, check out what's most popular in your area. 

#### _Give what they really like, get what you ordered._

------------------------------------

## Structure

#### Home page

  Displays the app name, tagline, and the option to either `Login` or `Register`:

![Screenshot of The Ushe Home page](/the-ushe-home.png)

  During registration, a new user can add their allergies (or dislikes) to the profile:

![Screenshot of The Ushe Registration modal](/the-ushe-registration.png)


#### Profile

  Displays the user's list of favorites and lets them add new ones:

![Screenshot of The Ushe user profile page](/the-ushe-profile.png)

  Clicking `ADD A NEW USHE` opens a modal over the user's profile page:

![Screenshot of The Ushe user profile page with the new ushe modal open](/the-ushe-new-order.png)


#### Feed

  Displays a list of latest favorites from all users:

![Screenshot of The Ushe feed showing a list of favorite orders from various users](/the-ushe-feed.png)


<div>
  <details>
   <summary>Additional features</summary>
<br>

This version of the app is a proof of concept and was archived in the form in which it was presented. At that time, it was missing several necessary features:

- authentication rules to redirect logged-in users to the local feed instead of login/registration view of the Home page (no automatic user logout)
- profile functionality (ability to edit or delete one's favorites or profile, ability to log out)
- sorting own favorites by location or type
- feed filtering by location or type
- social functionality (linking with friends, creating order pools, liking others' orders, chat/commenting)
- About/Contact page
- Search

To see the latest version, go to https://github.com/cfpaige/get-the-ushe.

</details>
</div>

------------------------------------

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

<div>
  <details>
   <summary><b>Prerequisites</b></summary>
<br>
The app has been tested on and is compatible with IE 11, Edge 18, Firefox 66, Safari =< 11 12, Opera 60, Chrome 74, iOS =< 10 11 12, and Android =< 3 4*.

\* Most Android devices from 4.4 onwards use Chrome as the default browser, older versions use the original Android stock browser.

Standard system requirements for installation:

|  | Windows requirements | Mac requirements | Linux requirements |
|:---|:---:|:---:|:---:|
|**Operating system**|Windows 7 or later|Mac OS X Yosemite 10.10 or later 64-bit|Ubuntu 12.04+, Debian 8+, openSUSE 12.2+, or Fedora Linux 17+|
|**Processor**|Intel Pentium 4 or later	Intel|Intel Pentium 3 / Athlon 64 or later|
|**Memory**|2 GB minimum, 4 GB recommended|
|**Screen resolution**|1280x1024 or larger|
|**Application window size**|1024x680 or larger|
|**Internet connection**|Required|
</details>
</div>

<div>
  <details>
   <summary><b>Installation</b></summary>
<br>
This repository has been archived. You can still fork it as is here, or clone the latest version from https://github.com/cfpaige/get-the-ushe:

![The Ushe GitHub repository page screencap](/the-ushe-installation.png)

The app's dependencies are:

- apollo-boost
- apollo-server-express
- bcrypt
- body-parser
- concurrently
- cors
- express
- graphql
- graphql-tools
- jwt-decode
- react
- react-apollo
- react-dom
- react-router-dom
- react-scripts
- nodemon

All of them are available as packages that can be installed with `npm` or `bower`, or added with `yarn`. Check out npm documentation for specific instructions. (E.g. for `apollo-boost`: https://www.npmjs.com/package/apollo-boost).

</details>
</div>

<div>
  <details>
   <summary><b>Deployment</b></summary>
<br>

You can deploy within [GitHub](https://pages.github.com/), with [Heroku](https://devcenter.heroku.com/categories/deployment), or on your preferred server. To do the latter, you will need to:

- have access to DNS record management or know the people to contact;
- set up the DNS records and make sure that all the settings are correct;
- set up and test the website on the production server (where it will live);
- set up email;
- back up any old site BuddyApp would be replacing (if applicable) and deploy the new one;

</details>
</div>

<div>
  <details>
   <summary><b>Contributing</b></summary>
<br>
This repository has been archived. To suggest changes or fixes, go to the latest version of the app and use the Issues feature of GitHub there: https://github.com/cfpaige/get-the-ushe

![GitHub Issues menu screencap](/the-ushe-issues.png)

</details>
</div>

#### Built With [![Build Status](https://travis-ci.com/cfpaige/the-ushe.svg?branch=alltogether)](https://travis-ci.com/cfpaige/the-ushe)

[Visual Studio Code](https://code.visualstudio.com/)

#### Authors

- **cfpaige** - https://github.com/cfpaige?tab=repositories
- **jacobprimehd** - https://github.com/jacobprimehd?tab=repositories
- **christinmd** - https://github.com/christinmd?tab=repositories
- **jessicahuynh19** - https://github.com/jessicahuynh19?tab=repositories
- **evepsmith15** - https://github.com/evepsmith15?tab=repositories

#### License

Licensed under GNU General Public License v3.0 (https://choosealicense.com/licenses/gpl-3.0/).
