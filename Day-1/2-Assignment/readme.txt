Q-1. What Each HTML Element Does

<html>: Root element that wraps the entire HTML document.

<head>: Contains meta-information like title, CSS links, and page metadata.

<title>: Sets the title of the web page shown in the browser tab.

<body>: Contains all the visible content of the web page.

<h1> to <h6>: Headings from most important (<h1>) to least (<h6>), used to organize content hierarchically.

<p>: Paragraph tag for regular text.

<a>: Anchor tag used to create hyperlinks.

<nav>: Used to wrap the main navigation links of the website.

<ul> / <li>: Unordered list and list item, typically used in navigation menus.

<form>: Wraps input elements for user input and submission.

<input>: Used for taking user input in various forms.

<label>: Describes input fields for accessibility.

<button>: Clickable button, used to submit forms or trigger actions.

<section>: Groups related content within the page.

<footer>: Contains bottom information like contact links, copyright, etc.



Q-2. Why I Chose Specific Input Types

type="text": For plain text inputs like name or address.

type="email": Validates user input to be in email format.

type="password": Masks characters for privacy while entering passwords.

type="number": Allows only numerical input (useful for age or quantity).

type="range": Creates a slider for selecting values within a range.

type="checkbox": Lets users select one or multiple options (e.g., interests).

type="radio": Allows selection of one option from a group.

type="submit": Used to submit the form to the server.

These types were selected to improve user experience, data validation, and form accuracy.




Q-3. How My Navigation Structure Works

The navigation bar is wrapped inside a <nav> tag to semantically indicate its purpose.

I used an unordered list (<ul>) to list the different links (<li><a href="#">Link</a></li>).

Each <a> tag has an href attribute pointing to either sections of the same page (#section-id) or other pages.

The structure is simple, responsive, and easy to style with CSS.

Users can easily navigate between sections like "Home", "About", "Services", and "Contact".