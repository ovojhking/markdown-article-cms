const dummy4 = () => ({
	subject: 'showdown-editor-markdown-to-html-converter',
	coverPhoto: "https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2091&q=80",
	created_at: "Wed, 20 Nov 2019 10:16:47 GMT",
	content: `![Showdown][sd-logo]

Showdown is a Javascript Markdown to HTML converter, based on the original works by John Gruber. It can be used client side (in the browser) or server side (with Node or io). 


# Installation

## Download tarball

You can download the latest release tarball directly from [releases][releases]

## Bower

    bower install showdown

## npm (server-side)

    npm install showdown

## CDN

You can also use one of several CDNs available: 

* rawgit CDN

        https://cdn.rawgit.com/showdownjs/showdown/<version tag>/dist/showdown.min.js

* cdnjs

        https://cdnjs.cloudflare.com/ajax/libs/showdown/<version tag>/showdown.min.js


[sd-logo]: https://raw.githubusercontent.com/showdownjs/logo/master/dist/logo.readme.png
[releases]: https://github.com/showdownjs/showdown/releases
[atx]: http://www.aaronsw.com/2002/atx/intro
[setext]: https://en.wikipedia.org/wiki/Setext

---------

# Syntax


## Table of contents

- [Introduction](#introduction)
- [Paragraphs](#paragraphs)
- [Headings](#headings)
    * [Atx Style](#atx-style)
    * [Setext style](#setext-style)
    * [Header IDs](#header-ids)
- [Blockquotes](#blockquotes)
- [Bold and Italic](#bold-and-italic)
- [Strikethrough](#strikethrough)
- [Emojis](#emojis)
- [Code formatting](#code-formatting)
    * [Inline formats](#inline-formats)
    * [Multiple lines](#multiple-lines)
- [Lists](#lists)
    * [Unordered lists](#unordered-lists)
    * [Ordered lists](#ordered-lists)
    * [TaskLists (GFM Style)](#tasklists--gfm-style-)
    * [List syntax](#list-syntax)
    * [Nested blocks](#nested-blocks)
    * [Nested lists](#nested-lists)
    * [Nested code blocks](#nested-code-blocks)
- [Links](#links)
    * [Simple](#simple)
    * [Inline](#inline)
    * [Reference Style](#reference-style)
- [Images](#images)
    * [Inline](#inline-1)
    * [Reference Style](#reference-style-1)
    * [Image dimensions](#image-dimensions)
    * [Base64 encoded images](#base64-encoded-images)
- [Tables](#tables)
- [Mentions](#mentions)
- [Handling HTML in markdown documents](#handling-html-in-markdown-documents)
- [Escaping entities](#escaping-entities)
    * [Escaping markdown entities](#escaping-markdown-entities)
    * [Escaping html tags](#escaping-html-tags)
- [Known differences and Gotchas](#known-differences-and-gotchas)

## Introduction

Showdown was created by John Fraser as a direct port of the original parser written by markdown's creator, John Gruber. Although Showdown has evolved since its inception, in "vanilla mode", it tries to follow the [original markdown spec][md-spec] (henceforth refereed as vanilla) as much as possible. There are, however, a few important differences, mainly due to inconsistencies in the original spec, which we addressed following the author's advice as stated in the [markdown's "official" newsletter][md-newsletter].

Showdown also support "extra" syntax not defined in the original spec as opt-in features. This means new syntax elements are not enabled by default and require users to enable them through options.

This document provides a quick description the syntax supported and the differences in output from the original markdown.pl implementation.

## Paragraphs

Paragraphs in Showdown are just **one or more lines of consecutive text** followed by one or more blank lines.

\`\`\`md
On July 2, an alien mothership entered Earth's orbit and deployed several dozen 
saucer-shaped "destroyer" spacecraft, each 15 miles (24 km) wide.
    
On July 3, the Black Knights, a squadron of Marine Corps F/A-18 Hornets, 
participated in an assault on a destroyer near the city of Los Angeles.
\`\`\`

The implication of the “one or more consecutive lines of text” is that Showdown supports 
“hard-wrapped” text paragraphs. This means the following examples produce the same output:

\`\`\`md
A very long line of text
\`\`\`

\`\`\`md
A very
long line
of text
\`\`\`

If you DO want to add soft line breaks (which translate to \`<br>\` in HTML) to a paragraph, 
you can do so by adding 3 space characters to the end of the line (\`  \`).

You can also force every line break in paragraphs to translate to \`<br>\` (as Github does) by
enabling the option **\`simpleLineBreaks\`**.

## Headings

### Atx Style

You can create a heading by adding one or more # symbols before your heading text. The number of # you use will determine the size of the heading. This is similar to [**atx style**][atx].

\`\`\`md
# The largest heading (an <h1> tag)
## The second largest heading (an <h2> tag)
…
###### The 6th largest heading (an <h6> tag)
\`\`\`

The space between \`#\` and the heading text is not required but you can make that space mandatory by enabling the option **\`requireSpaceBeforeHeadingText\`**.

You can wrap the headings in \`#\`. Both leading and trailing \`#\` will be removed.

\`\`\`md
## My Heading ##
\`\`\`

If, for some reason, you need to keep a leading or trailing \`#\`, you can either add a space or escape it:

\`\`\`md
# # My header # #

#\# My Header \# #
\`\`\`

### Setext style

You can also use [**setext style**][setext] headings, although only two levels are available.

\`\`\`md
This is an H1
=============
    
This is an H2
-------------
\`\`\`

**Note:**    
In live preview editors, when a paragraph is followed by a list it can cause an awkward effect.

![awkward effect][]

You can prevent this by enabling the option **\`smoothPreview\`**.

### Header IDs

Showdown generates bookmarks anchors in titles automatically, by adding an id property to an heading.

\`\`\`md
# My cool header with ID
\`\`\`

\`\`\`html
<h1 id="mycoolheaderwithid">My cool header with ID</h1>
\`\`\`

This behavior can be modified with options:

 - **\`noHeaderId\`** disables automatic id generation; 
 - **\`ghCompatibleHeaderId\`** generates header ids compatible with github style (spaces are replaced with dashes and a bunch of non alphanumeric chars are removed)
 - **\`prefixHeaderId\`** adds a prefix to the generated header ids (either automatic or custom).
 - **\`headerLevelStart\`** sets the header starting level. For instance, setting this to 3 means that \`# header\` will be converted to \`<h3>\`.

Read the [README.md][readme] for more info
	`
});

export default dummy4;
