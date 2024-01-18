# Advanced concepts

## Apearance

appearance-none = reset the default appearance of the element (like the default appearance of a button)

works like a reset

## interactivity

hover: = {SOME_TAG_CLASS_OR_ID}:hover = afects the element when the mouse is over it
active: = {SOME_TAG_CLASS_OR_ID}:active = afects the element when the mouse is clicked over it
focus: = {SOME_TAG_CLASS_OR_ID}:focus = afects the element when the mouse is clicked over it and the mouse is over it

examples:
```html
	<button class="bg-black hover:bg-white"> // when the mouse is over the button, the background color changes to white
	<button class="bg-black active:bg-white"> // when the mouse is clicked over the button, the background color changes to white
	<button class="bg-black focus:bg-white"> // when the mouse is clicked over the button and the mouse is over it, the background color changes to white
	
```
## pseudo-elements

first: = {SOME_TAG_CLASS_OR_ID}:first 
even: = {SOME_TAG_CLASS_OR_ID}:even
odd: = {SOME_TAG_CLASS_OR_ID}:odd
last: = {SOME_TAG_CLASS_OR_ID}:last
nth-child: = {SOME_TAG_CLASS_OR_ID}:nth-child(2) = afects the second element
nth-last-child: = {SOME_TAG_CLASS_OR_ID}:nth-last-child(2) = afects the second element from the end
nth-of-type: = {SOME_TAG_CLASS_OR_ID}:nth-of-type(2) = afects the second element of the same type
nth-last-of-type: = {SOME_TAG_CLASS_OR_ID}:nth-last-of-type(2) = afects the second element of the same type from the end
not: = {SOME_TAG_CLASS_OR_ID}:not(.some-class) = afects the element that does not have the class .some-class
empty: = {SOME_TAG_CLASS_OR_ID}:empty = afects the element that does not have any children

**NOTE: like normal css, all tailwind classes have the same speficity, then the order of classes in html DOES'T count, only conts the order of the stylesheet created by Tailwind, so in the example below, the even:bg-green-200 odd:bg-orange-200 overrides the first:bg-red-200 last:bg-blue-200, causing an undesired result**

examples:
```html

<ul>
    <li class="first:bg-red-200 last:bg-blue-200 even:bg-green-200 odd:bg-orange-200">Item </li>
    <li class="first:bg-red-200 last:bg-blue-200 even:bg-green-200 odd:bg-orange-200">Item </li>
    <li class="first:bg-red-200 last:bg-blue-200 even:bg-green-200 odd:bg-orange-200">Item </li>
    <li class="first:bg-red-200 last:bg-blue-200 even:bg-green-200 odd:bg-orange-200">Item </li>
    <li class="first:bg-red-200 last:bg-blue-200 even:bg-green-200 odd:bg-orange-200">Item </li>
    <li class="first:bg-red-200 last:bg-blue-200 even:bg-green-200 odd:bg-orange-200">Item </li>
  </ul>
```

to corret this we need to make the classes first:bg-red-200 last:bg-blue-200 more specific, so we need to add the parent class to the selector, like this:

```html
<!--Working sample-->
  <ul class="[&>li:first-child]:bg-red-200 [&>li:last-child]:bg-blue-200">
    <li class="even:bg-green-200 odd:bg-orange-200">Item </li>
    <li class="even:bg-green-200 odd:bg-orange-200 ">Item </li>
    <li class="even:bg-green-200 odd:bg-orange-200 ">Item </li>
    <li class="even:bg-green-200 odd:bg-orange-200 ">Item </li>
    <li class="even:bg-green-200 odd:bg-orange-200 ">Item </li>
    <li class="even:bg-green-200 odd:bg-orange-200">Item </li>
  </ul>
```

## Cursor

cursor-wait: = {SOME_TAG_CLASS_OR_ID}:cursor-wait = changes the cursor to a wait cursor
cursor-pointer: = {SOME_TAG_CLASS_OR_ID}:cursor-pointer = changes the cursor to a pointer cursor
cursor-not-allowed: = {SOME_TAG_CLASS_OR_ID}:cursor-not-allowed = changes the cursor to a not-allowed cursor
cursor-move: = {SOME_TAG_CLASS_OR_ID}:cursor-move = changes the cursor to a move cursor
cursor-help: = {SOME_TAG_CLASS_OR_ID}:cursor-help = changes the cursor to a help cursor
cursor-text: = {SOME_TAG_CLASS_OR_ID}:cursor-text = changes the cursor to a text cursor
cursor-auto: = {SOME_TAG_CLASS_OR_ID}:cursor-auto = changes the cursor to a auto cursor
cursor-default: = {SOME_TAG_CLASS_OR_ID}:cursor-default = changes the cursor to a default cursor
cursor-crosshair: = {SOME_TAG_CLASS_OR_ID}:cursor-crosshair = changes the cursor to a crosshair cursor
cursor-col-resize: = {SOME_TAG_CLASS_OR_ID}:cursor-col-resize = changes the cursor to a col-resize cursor
cursor-row-resize: = {SOME_TAG_CLASS_OR_ID}:cursor-row-resize = changes the cursor to a row-resize cursor
cursor-ew-resize: = {SOME_TAG_CLASS_OR_ID}:cursor-ew-resize = changes the cursor to a ew-resize cursor
cursor-ns-resize: = {SOME_TAG_CLASS_OR_ID}:cursor-ns-resize = changes the cursor to a ns-resize cursor
cursor-ne-resize: = {SOME_TAG_CLASS_OR_ID}:cursor-ne-resize = changes the cursor to a ne-resize cursor
cursor-nw-resize: = {SOME_TAG_CLASS_OR_ID}:cursor-nw-resize = changes the cursor to a nw-resize cursor
cursor-se-resize: = {SOME_TAG_CLASS_OR_ID}:cursor-se-resize = changes the cursor to a se-resize cursor
cursor-sw-resize: = {SOME_TAG_CLASS_OR_ID}:cursor-sw-resize = changes the cursor to a sw-resize cursor

## scroll behavior

scroll-smooth: = {SOME_TAG_CLASS_OR_ID}:scroll-smooth = adds a smooth scroll behavior to the element

## Breakpoints

sm = 640px
md = 768px
lg = 1024px
xl = 1280px
2xl = 1536px

### Responsive design

using this breakpoints we can create responsive designs, automatic using @media-queries, for example:
Mobile first:
```html
<body class="bg-black sm:bg-blue-200 md:bg-gray-200 lg:bg-green-200 xl:bg-red-200 2xl:bg-yellow-400">
  <h1 class="sm:hidden text-white text-4xl">xs < 640px</h1>
      <h1 class="hidden sm:block md:hidden text-black text-4xl">sm >= 640px</h1>
      <h1 class="hidden md:block lg:hidden text-black text-4xl">md >= 768px</h1>
      <h1 class="hidden lg:block xl:hidden text-black text-4xl">lg >= 1024px</h1>
      <h1 class="hidden xl:block 2xl:hidden text-black text-4xl">xl >= 1280px</h1>
      <h1 class="hidden 2xl:block 3xl:hidden text-black text-4xl">2xl >= 1536px</h1>
</body>
```
in the example above, the background color of the body changes according to the screen size, and the text changes according to the screen size too. on the smallest screen (width < sm>) the text is white, and on the other screens the text is black.
note that the h1 tag will only show at the screen size that it is specified, for example, the h1 tag with the class sm:hidden will only show on screen sizes smaller than 640px, and the h1 tag with the class hidden sm:block md:hidden will only show on screen sizes between 640px and 768px.


## Columns

columns-1 = columns: 1
columns-2 = columns: 2
...
columns-xs = coluns: 20rem

gap-0 = column-gap: 0
gap-1 = column-gap: 0.25rem
gap-2 = column-gap: 0.5rem
gap-3 = column-gap: 0.75rem
gap-4 = column-gap: 1rem
...
gap-12 = column-gap: 3rem


## Aspect ratio

aspect-video = aspect-ratio: 16/9
aspect-square = aspect-ratio: 1/1
aspect-portrait = aspect-ratio: 9/16


## FLexbox

flex = display: flex
flex-row = flex-direction: row
flex-row-reverse = flex-direction: row-reverse
flex-col = flex-direction: column
flex-col-reverse = flex-direction: column-reverse
flex-wrap = flex-wrap: wrap
flex-wrap-reverse = flex-wrap: wrap-reverse
flex-nowrap = flex-wrap: nowrap

flex-1 = flex: 1 1 0%
flex-auto = flex: 1 1 auto
flex-initial = flex: 0 1 auto
flex-none = flex: none


## Grid

grid = display: grid
grid-cols-1 = grid-template-columns: repeat(1, minmax(0, 1fr))
grid-cols-2 = grid-template-columns: repeat(2, minmax(0, 1fr))
...
grid-cols-12 = grid-template-columns: repeat(12, minmax(0, 1fr))
grid-cols-none = grid-template-columns: none
grid-rows-1 = grid-template-rows: repeat(1, minmax(0, 1fr))
grid-rows-2 = grid-template-rows: repeat(2, minmax(0, 1fr))
...
grid-rows-12 = grid-template-rows: repeat(12, minmax(0, 1fr))
grid-rows-none = grid-template-rows: none
gap-0 = gap: 0
gap-1 = gap: 0.25rem
gap-2 = gap: 0.5rem
...
gap-12 = gap: 3rem
gap-x-0 = column-gap: 0
gap-x-1 = column-gap: 0.25rem
...
gap-x-12 = column-gap: 3rem
gap-y-0 = row-gap: 0
gap-y-1 = row-gap: 0.25rem
gap-y-2 = row-gap: 0.5rem
...
gap-y-12 = row-gap: 3rem
auto-cols-auto = grid-auto-columns: auto
auto-cols-min = grid-auto-columns: min-content
auto-cols-max = grid-auto-columns: max-content
auto-cols-fr = grid-auto-columns: minmax(0, 1fr)
auto-rows-auto = grid-auto-rows: auto
auto-rows-min = grid-auto-rows: min-content
auto-rows-max = grid-auto-rows: max-content
auto-rows-fr = grid-auto-rows: minmax(0, 1fr)
auto-flow-row = grid-auto-flow: row
auto-flow-col = grid-auto-flow: column
auto-flow-row-dense = grid-auto-flow: row dense
auto-flow-col-dense = grid-auto-flow: column dense

## Transition & Transform

transition-none = transition-property: none
transition-all = transition-property: all
transition = transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform
transition-colors = transition-property: background-color, border-color, color, fill, stroke
transition-opacity = transition-property: opacity
transition-shadow = transition-property: box-shadow
transition-transform = transition-property: transform

duration-75 = transition-duration: 75ms
duration-100 = transition-duration: 100ms
duration-150 = transition-duration: 150ms
duration-200 = transition-duration: 200ms
duration-300 = transition-duration: 300ms
...
duration-2000 = transition-duration: 2000ms

ease-linear = transition-timing-function: linear
ease-in = transition-timing-function: cubic-bezier(0.4, 0, 1, 1)
ease-out = transition-timing-function: cubic-bezier(0, 0, 0.2, 1)
ease-in-out = transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
ease-[cubic-bezier(0.95,0.05,0.795,0.035)] = transition-timing-function: cubic-bezier(0.95,0.05,0.795,0.035)

delay-75 = transition-delay: 75ms
delay-100 = transition-delay: 100ms
delay-150 = transition-delay: 150ms
...
delay-2000 = transition-delay: 2000ms

### Two transitions with different durations in the same element

The button below will change the background color in 0.3s and the opacity in 1s on hover

```html
<button
    class="px-8 py-2 m-24 text-white bg-blue-500 rounded [transition:background-color_.3s,opacity_1s] hover:bg-blue-700 hover:opacity-50 hover:[transition:background-color_1s,opacity_0.3s]">
    Click me
  </button>
```

the button below will change the the background color will change in 0.3s and the opacity in 5s on hover, and background color in 5s and the opacity in 1s when the mouse leaves the button, 

```html
<button
    class="px-8 py-2 m-24 text-white bg-blue-500 rounded [transition:background-color_5s,opacity_1s] hover:bg-red-700 hover:opacity-50 hover:[transition:background-color_.3s,opacity_5s]">
    Click me
  </button>
```

## Transforms

### Scale

scale-0 = transform: scale(0)
scale-50 = transform: scale(.5)
scale-75 = transform: scale(.75)
scale-90 = transform: scale(.9)
...
scale-150 = transform: scale(1.5)

scale-x-0 = transform: scaleX(0)
scale-x-50 = transform: scaleX(.5)
scale-x-75 = transform: scaleX(.75)
...
scale-x-150 = transform: scaleX(1.5)

scale-y-0 = transform: scaleY(0)
scale-y-50 = transform: scaleY(.5)
scale-y-75 = transform: scaleY(.75)
...
scale-y-150 = transform: scaleY(1.5)

### Rotate

rotate-0 = transform: rotate(0deg)
rotate-1 = transform: rotate(1deg)
rotate-2 = transform: rotate(2deg)
...
rotate-360 = transform: rotate(360deg)

### Translate

translate-x-0 = transform: translateX(0)
translate-x-1 = transform: translateX(1px)
translate-x-2 = transform: translateX(2px)
...
translate-x-96 = transform: translateX(24rem)
translate-x-px = transform: translateX(1px)
translate-x-1/2 = transform: translateX(50%)

translate-y-0 = transform: translateY(0)
translate-y-1 = transform: translateY(1px)
translate-y-2 = transform: translateY(2px)
...
translate-y-96 = transform: translateY(24rem)
translate-y-px = transform: translateY(1px)
translate-y-1/2 = transform: translateY(50%)

### Skew

skew-x-0 = transform: skewX(0deg)
skew-x-1 = transform: skewX(1deg)
skew-x-2 = transform: skewX(2deg)
...
skew-x-360 = transform: skewX(360deg)

skew-y-0 = transform: skewY(0deg)
skew-y-1 = transform: skewY(1deg)
skew-y-2 = transform: skewY(2deg)
...
skew-y-360 = transform: skewY(360deg)



## Animation

animate-none = animation: none
animate-spin = animation: spin 1s linear infinite
animate-ping = animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite
animate-pulse = animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite
animate-bounce = animation: bounce 1s infinite

### Customizing predefined animations
animate-[spin_2s_ease-in-out_infinite] = animation: spin 2s ease-in-out infinite


### Creating custom animations

```html
<html lang="en">
    <head>
      ...
      <script src="https://cdn.tailwind.com"></script>
      <script>
         tailwind.config = {
          theme: {
            extend: {
              animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
                smash: 'smash 1s ease-in-out infinite',
              },
              keyframes: {
                wiggle: {
                  '0%, 100%': { transform: 'rotate(-12deg)' },
                  '50%': { transform: 'rotate(12deg)' },
                }
              }
            }
          }
        }
      </script>
    </head>
    <body class="bg-black">
       <div class="flex items-center justify-center min-h-24 bg-slate-900">
        <svg class="w-12 text-white animate-wiggle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
          </path>
        </svg>
      </div>
    </body>
</html>
```
