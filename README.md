## Application Walk-Through
Here's a walk-through of the functionality of the application:

<img src='https://i.imgur.com/TIjsyNw.gif' title='Video Walkthrough' width='' alt='Video Walkthrough'/>

GIF created with [LiceCap](http://www.cockos.com/licecap/).


## Inspiration 
We all use Twitter a lot and gain tons of entertainment from it. This all can't be free— everything comes at a cost. We wanted to raise social awareness of the environmental impacts of using the social media, and the web in general.

## What it does 
Our application scrapes your Twitter data and tells you how many grams of carbon dioxide you've generated based on a formula we found [here](https://www.treehugger.com/clean-technology/twittering-adds-how-much-to-your-carbon-footprint.html). Other information can be found [here](https://climatecare.org/infographic-the-carbon-footprint-of-the-internet/).

## How we built it 
We built the web-application using Node.js as a server side language, Express as a backend framework, a Python script to scrape the user's Twitter data, and a Javascript file as a bridge between the Python script and Node.js. We also used standard HTML for markup, SCSS/CSS for efficient styling, and Bootstrap for a responsive user-interface. We utilized Github as a version control, and then deployed to Heroku for public access.

## Challenges we ran into 
We used a Python script to scrape Twitter user data. It took us a significant amount of time to find out how to link this Python script to Node.js. We also REALLY wanted the number to be animated and visually count up, but alas, Node.js is server-side, and we could not figure out how to transfer this to the client-side. Also, we switched to this idea last minute so we made the most out of the time we had left.

## What we learned 
Learning to use Python scripts with Javascript was a big achievement for us. This was also all of our first times making a web-application and we're really happy with how it looks! :) 

## What's next for Twitter Dioxide 
We think it would be really cool if we could somehow make an application that tracks the environmental impact of your SCROLLING on Twitter, as most of our time on Twitter is spent scrolling rather than Tweeting. We definitely plan to continue iterating on this application after TreeHacks!
