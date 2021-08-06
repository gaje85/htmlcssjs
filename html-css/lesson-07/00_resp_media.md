## Responsive Design & Media Queries

### What is responsive design

Historically when a website was built
- the website would either expand horizontally to fit the browser window
- Or the website would have a fixed width of a particular width size

Now both options had drawbacks
- when the website was expected to expand horizontally, it was possible that under some circumstances, there was no 
sufficient width for the elements on the page which would cause the page to appear squished
- when a website was a fixed width, we might end up with a horizontal scrollbar and the user would have to scroll in the 
horizontal direction as well
  

Responsive design as term was coined around 2010 (who coined the term is not so much important). It is not a separate technology.
Rather, it is the usage of available html/css technology in a way that a website would scale & fit as necessary for browsers running
on devices with difference screen dimensions and resolutions.

- Media queries are just one such css technique that is used to aid in getting responsive designs.
- Another basic technique to help with responsive design are declaring things like widths of elements with percentage, rather than
fixed units.
- Another aspect for things like images, we can declare the width of those images as 100% which would lead to them taking the max
width of their parent containers. When the width reduces, the image's width reduces as well.


Responsive design basically allows us to have one codebase for a website and use it to handle all various devices the website is expected to run on
- from desktop browsers
- to mobiles
- and tablets
