# Web Developer (ReactJS) Code Challenge

*Congratulations!*

We had a phone screen and we think you may be the next frontend/react guru who will join our team of talented developers 
working on [https://cardguru.com](https://cardguru.com). 

## The Challenge

We've tried to put together a code challenge that will test your overall knowledge of HTML5 and CSS 
as well as demonstrating mastery of some basic skills in ReactJS.

The challenge leverages a science feed from Reddit. 
I've done basic work to consume that feed with an axios client and to set that feed into state on the index page.

## How to submit your work

1. [Fork the project on github](https://help.github.com/articles/fork-a-repo/) to a public repository under your github user
2. Apply your modifications to satisfy the requirements 
3. Email the forked repository with your code modifications to [dave.maple@brandedholdings.com](mailto:dave.maple@brandedholdings.com)

## How to run the project
```bash
npm run develop
```

Then the site will be available at [http://localhost:8000/](http://localhost:8000/).

## Requirements

There are two parts to your challenge:

1. Implement a basic search feature
2. Make the news feed _attractive_ and _functional_ on desktop, tablet and mobile devices

It's our hope that this takes you only a few hours to complete. 
We realize that attractive is subjective. 
Use your best judgement.
There is not a correct answer to attractive. 

### Implement A Basic Search Feature

1. I've added an `input[id=search]` field in `index.js`. This is the field you'll be adding events to/
2. `onkeyup` you'll be modifying `redditResults`.
3. The search should match any word within `title` that begins with the letters typed into `input[type=search]`.
4. **Do not** import a node package to implement the search. Add the necessary event handlers to the project yourself.

### Implement An Attractive & Functional Layout

1. Implement a layout using the 3 fields available in a `redditResult`
2. Make sure the layout renders properly on mobile, tablet and desktop viewports.
3. Feel free to restructure the HTML in `index.js`
4. Feel free to add SCSS to `application.scss`
5. **Do not** add a CSS framework or other library to accomplish this task. 





 