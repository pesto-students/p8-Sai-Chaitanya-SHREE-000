<!-- Functionality of Browser -->
Web browser is setup used for using internet facility. 
We can see and use web pages using browser.
The data transfered in browser using hypertext transfer protocol (http), 
which defines how transmit the text, image and video files. 
Web browser can fetch data from connected computers, 
that data written in hypertext markup language (html). 
Browser can interpret html and convert it into text, image and video files.

![alt text](https://quicklearncomputer.com/wp-content/uploads/2022/03/How-web-browser-work.png)


<!-- High Level Components of Browser -->
1.The User Interface:

The user interface is space dedicated for user interaction. 
Here we can see the address bar, bookmark option, etc..
html file also displayed here.

2.The Browser Engine: 
It is a core component of every web browser, 
which act as bridge between user interface and rendering engine.
It handles the rendering engine according to what input received from user interface.

3.The Rendering Engine:
It is responsible for rendering requested web pages.
It can interprets the html, xml, documents, images, etc..

4.Networking:
This component is responsible for managing network calls using standard protocols like HTTP or FTP. 
It also looks after security issues associated with internet communication.

4.JavaScript Interpreter:
It is responsible for parsing and executing the JavaScript code embedded in a website. 
Once the interpreted results are generated, 
they are forwarded to the rendering engine for display on the user interface.

5.UI Backend:
This component uses the user interface methods of the underlying operating system.
It is mainly used for drawing basic widgets (windows and combo boxes).

6.Data Storage/Persistence
It is a persistent layer. 
A web browser needs to store various types of data locally, for example, cookies. 
As a result, browsers must be compatible with data storage mechanisms 
such as WebSQL, IndexedDB, FileSystem, etc.

![alt text](https://miro.medium.com/max/750/1*RL0pnuf_hmLJ76oY6DViZw.webp)


<!-- Rendering Engine and Its Use -->
Once a user requests a particular document, 
the rendering engine starts fetching the content of the requested document. 
This is done via the networking layer. 
The rendering engine starts receiving the content of that specific document in chunks of 8 KBs from the networking layer. After this, 
the basic flow of the rendering engine begins.

1)The requested HTML page is parsed in chunks, including the external CSS files and in style elements, by the rendering engine. The HTML elements are then converted into DOM nodes to form a “content tree” or “DOM tree.”

2)Simultaneously, the browser also creates a render tree. 
This tree includes both the styling information as well as the visual instructions that define the order in which the elements will be displayed. 
The render tree ensures that the content is displayed in the desired order.

3)Further, the render tree goes through the layout process. 
When a render tree is created, 
the position or size values are not assigned. 
The entire process of calculating values for evaluating the desired position is called a layout process. In this process, every node is assigned the exact coordinates. 
This ensures that every node appears at an accurate position on the screen.

4)The final step is to paint the screen, wherein the render tree is traversed, and the renderer’s paint() method is invoked, which paints each node on the screen using the UI backend layer.

![alt text](https://browserstack.wpenginepowered.com/wp-content/uploads/2019/11/Screenshot-2019-11-12-at-3.26.19-PM.png)

<!-- Parsers (HTML, CSS, etc) -->
Once a user requests a particular document, 
the rendering engine starts fetching the content of the requested document. 
This is done via the networking layer.

The requested HTML page is parsed in chunks, i
ncluding the external CSS files and in style elements, by the rendering engine. 
The HTML elements are then converted into DOM nodes to form a “content tree” or “DOM tree.”

The browser parses the fetched CSS and sorts different types of selectors.
Once it finds, css should be applied.
This step happened on "Render tree"

In final step it should display in user interface.
This step called "painting"

![alt text](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_works/rendering.svg)

<!-- Script Processors -->
The script processor executes Javascript code to process an event. 
The processor uses a pure Go implementation of ECMAScript 5.1 and has no external dependencies.
The processor can be configured by embedding Javascript in your configuration file or by pointing the processor at external file(s).

<!-- Tree construction -->
Once a user requests a particular document, 
the rendering engine starts fetching the content of the requested document. 
This is done via the networking layer.

The requested HTML page is parsed in chunks, i
ncluding the external CSS files and in style elements, by the rendering engine. 
The HTML elements are then converted into DOM nodes to form a “content tree” or “DOM tree.”

The browser parses the fetched CSS and sorts different types of selectors.
Once it finds, css should be applied.
This step happened on "Render tree"

![alt text](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_works/rendering.svg)

<!-- Order of script processing -->
A script tag with async may be run as soon as it is loaded. In fact, the browser may pause the parser from whatever else it was doing and run that script. So, it really can run at almost any time.

A script tag with defer waits until the entire parser is done and then runs all scripts marked with defer in the order they were encountered. This allows you to mark several scripts that depend upon one another as defer.

<!-- Layout and Painting -->
1)Further, the render tree goes through the layout process. 
When a render tree is created, the position or size values are not assigned. 
The entire process of calculating values for evaluating the desired position is called a layout process. In this process, every node is assigned the exact coordinates. 
This ensures that every node appears at an accurate position on the screen.

2)The final step is to paint the screen, wherein the render tree is traversed, 
and the renderer’s paint() method is invoked, 
which paints each node on the screen using the UI backend layer.

![alt text](https://browserstack.wpenginepowered.com/wp-content/uploads/2019/11/Screenshot-2019-11-12-at-3.26.19-PM.png)

