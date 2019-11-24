const dummy5 = () => ({
	subject: 'this-is-a-simple-markdown-demo-from-live-markdown-web',
	coverPhoto: "https://images.unsplash.com/photo-1570273586646-d2f3e8a5a587?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
	created_at: "Thu, 21 Nov 2019 10:16:47 GMT",
	content: `# Live demo
Changes are automatically rendered as you type.

## Table of Contents

* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!

## HTML block below

<blockquote>
	This blockquote will change based on the HTML settings above.
</blockquote>

## How about some code?

\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');
React.render(
	<Markdown source="# Your markdown here" />,
	document.getElementById('content')
);
\`\`\`

Pretty neat, eh?

## Tables?

| Feature   | Support |
| --------- | ------- |
| tables    | ✔ |
| alignment | ✔ |
| wewt      | ✔ |
## More info?
Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)

---------------

A component by [Espen Hovlandsdal](https://espen.codes/)`
});

export default dummy5;
