#CSS Types Used

1-Internal CSS
Written inside a <style> tag in the <head> section of the HTML.
Used for quick or page-specific styling.

2-External CSS
Linked using <link rel="stylesheet" href="style.css">.
Helps in reusing styles across multiple pages.

3-Inline CSS (minor)
Example: style="text-decoration: underline;" inside an HTML tag.
Used for one-time or urgent styling.

#CSS Selectors Used


1-ID Selector (#id)
#logo, #hobbies
Targets a single, unique element by its id.

2-Class Selector (.class)
.writing, .image
Targets one or multiple elements with the same class.

3-Element Selector
footer, h1, p, a, img, etc.
Targets all instances of a specific HTML tag.

4-Combinator Selector
.writing p, .image img, footer a
Targets elements based on their relationship with a parent or container.

5-Pseudo-Class Selector
:hover on #logo, .writing, img, footer li, #hobbies
Adds interactive styling when the user hovers over an element.

6-Pseudo-Element Selector
::first-letter used on .writing p
Styles only the first letter of a paragraph for a decorative effect.