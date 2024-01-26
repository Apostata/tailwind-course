# Utitlity classes

medidas de 1 a X = 0.25rem a Xrem (4px a X * 4px)
medidas para bordas de 2 a X = 1px a X * 1px
exempo: border-t-2 = border-top: 2px
para borda de 1px = border-t = border-top: 1px
1rem = 16px

xs = 20rem (320px)
sm = 24rem (384px)
md = 28rem (448px)
lg = 32rem (512px)
xl = 36rem (576px)
2xl = 42rem (672px)
3xl = 48rem (768px)
4xl = 56rem (896px)
5xl = 64rem (1024px)
6xl = 72rem (1152px)

Examples:

.flex = display: flex
.items-center = align-items: center
.p-6 = padding: 1.5rem (24px)
.px-6 = padding-left: 1.5rem; padding-right: 1.5rem
.max-w-sm = max-width: 24rem (384px)
.mx-auto = margin-left: auto; margin-right: auto
.bg-white = background-color: #fff
.rounded-xl = border-radius: 0.75rem (12px)
.shadow-xl = box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
.space-x-4 = childs margin -  margin-left: 1rem; margin-right: 1rem (16px)****
.mt-12 = margin-top: 3rem (48px)


## negative measures

.-p-6 = padding: -1.5rem (-24px)
.-mx-24 = margin-left: -6rem (-96px); margin-right: -6rem (-96px)


## Colors
colors shades = 50, 100, 200, 300, 400, 500, 600, 700, 800, 900
colors opacity = 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95

text-white = color: #fff
text-gray-900 = color: #111827
text-gray-50 = color: #f9fafb
bg-gray-900 = background-color: #111827
bg-gray-50 = background-color: #f9fafb	
border-gray-900 = border-color: #111827
border-gray-50 = border-color: #f9fafb
text-[#111827] = color: #111827
bg-[#427fab] = background-color: #427fab
border-[rgb(255,0,0)] = border-color: rgb(255,0,0) = border-color: red
shadow-[indigo] = box-shadow: 0 20px 25px -5px indigo, 0 8px 10px -6px indigo;

## Opacity
opacity-5 = opacity: 0.05
opacity-10 = opacity: 0.1
text-gray-900/50 = color: rgba(17, 24, 39, 0.5)

## Container & spacing

breakpoints = sm, md, lg, xl, 2xl
sm = 640px, max-width: 640px
md = 768px, max-width: 768px
lg = 1024px, max-width: 1024px
xl = 1280px, max-width: 1280px
2xl = 1536px, max-width: 1536px

**NOTE: for font-size, md is replaced by base: text-base= font-size: 1rem = 16px**

Container = max-width: 100% (640px, 768px, 1024px, 1280px, 1536px)
width: 100% (640px, 768px, 1024px, 1280px, 1536px)

## Typography

### Font family
font-sans = font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
font-serif = font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif
font-mono = font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace

### Font weight
font-extralight = font-weight: 200
font-light = font-weight: 300
font-normal = font-weight: 400
font-medium = font-weight: 500
font-bold = font-weight: 700
font-semibold = font-weight: 600
font-extrabold = font-weight: 800
font-black = font-weight: 900

### Font size
text-xs = font-size: 0.75rem (12px)
text-sm = font-size: 0.875rem (14px)
text-base = font-size: 1rem (16px)
text-lg = font-size: 1.125rem (18px)
text-xl = font-size: 1.25rem (20px)
text-2xl = font-size: 1.5rem (24px)
text-3xl = font-size: 1.875rem (30px)
text-4xl = font-size: 2.25rem (36px)
...

### Letter spacing
tracking-tighter = letter-spacing: -0.05em
tracking-tight = letter-spacing: -0.025em
tracking-normal = letter-spacing: 0em
tracking-wide = letter-spacing: 0.025em
tracking-wider = letter-spacing: 0.05em
tracking-widest = letter-spacing: 0.1em

### text-align
text-left = text-align: left
text-center = text-align: center
text-right = text-align: right
text-justify = text-align: justify

### decoration

#### decoration line
underline = text-decoration: underline
line-through = text-decoration: line-through
overline = text-decoration: overline
no-underline = text-decoration: none

#### decoration style
decoration-dotted = text-decoration-style: dotted
decoration-dashed = text-decoration-style: dashed
decoration-solid = text-decoration-style: solid
decoration-double = text-decoration-style: double
decoration-wavy = text-decoration-style: wavy

#### decoration offset
decoration-offset-0 = text-decoration-offset: 0.25em
decoration-offset-1 = text-decoration-offset: 0.5em
decoration-offset-2 = text-decoration-offset: 1em
...

#### decoration color
Like other colors, you can use the color name, hex value, rgb, rgba, and gradient colors utilities to set the text-decoration-color utility.
example:

decoraction-red-500 = text-decoration-color: #EF4444

#### decoration thickness
decoration-2 = text-decoration-thickness: 2px
decoration-4 = text-decoration-thickness: 4px
...

## Width & height

### Width
w-0 = width: 0px
w-1 = width: 0.25rem (4px)
w-2 = width: 0.5rem (8px)
...
w-96 = width: 24rem (384px)
w-auto = width: auto
w-px = width: 1px
w-1/2 = width: 50%
w-1/3 = width: 33.333333%
w-2/3 = width: 66.666667%
w-1/4 = width: 25%
w-2/4 = width: 50%
w-3/4 = width: 75%
w-1/5 = width: 20%
w-2/5 = width: 40%
...
w-11/12 = width: 91.666667%
w-full = width: 100%
w-screen = width: 100vw

### Height
h-0 = height: 0px
h-1 = height: 0.25rem (4px)
h-2 = height: 0.5rem (8px)
...
h-96 = height: 24rem (384px)
h-auto = height: auto
h-px = height: 1px
h-1/2 = height: 50%
h-1/3 = height: 33.333333%
...
h-11/12 = height: 91.666667%
h-full = height: 100%
h-screen = height: 100vh

### min and max width and height
min-w-0 = min-width: 0px
min-w-full = min-width: 100%
min-w-min = min-width: min-content
min-w-max = min-width: max-content
min-h-0 = min-height: 0px
min-h-full = min-height: 100%
min-h-screen = min-height: 100vh
max-w-0 = max-width: 0px
max-w-none = max-width: none
max-w-xs = max-width: 20rem (320px)
max-w-sm = max-width: 24rem (384px)
max-w-md = max-width: 28rem (448px)
max-w-lg = max-width: 32rem (512px)
max-w-xl = max-width: 36rem (576px)
max-w-2xl = max-width: 42rem (672px)
...
max-w-9xl = max-width: 96rem (1536px)
max-w-full = max-width: 100%
max-w-min = max-width: min-content
max-w-max = max-width: max-content
max-h-full = max-height: 100%
max-h-screen = max-height: 100vh

## Positioning

absolute = position: absolute
relative = position: relative
fixed = position: fixed
sticky = position: sticky
inset-0 = top: 0; right: 0; bottom: 0; left: 0;
inset-y-0 = top: 0; bottom: 0;
inset-x-0 = right: 0; left: 0;
top-0 = top: 0;
right-0 = right: 0;
bottom-0 = bottom: 0;
left-0 = left: 0;
...

hidden = display: none
block = display: block
inline-block = display: inline-block
inline = display: inline
flex = display: flex
inline-flex = display: inline-flex
grid = display: grid
inline-grid = display: inline-grid
table = display: table
table-caption = display: table-caption
table-cell = display: table-cell
table-column = display: table-column
table-column-group = display: table-column-group
table-footer-group = display: table-footer-group
table-header-group = display: table-header-group
table-row-group = display: table-row-group
table-row = display: table-row
flow-root = display: flow-root
grid-flow-row = grid-auto-flow: row
grid-flow-col = grid-auto-flow: column
grid-flow-row-dense = grid-auto-flow: row dense
grid-flow-col-dense = grid-auto-flow: column dense
contents = display: contents
list-item = display: list-item

z-0 = z-index: 0
z-10 = z-index: 10
z-20 = z-index: 20
z-30 = z-index: 30
...

float-right = float: right
float-left = float: left
float-none = float: none
clear-left = clear: left
clear-right = clear: right
clear-both = clear: both
clear-none = clear: none

## Shadows and backgrounds

bg-auto = background-size: auto
bg-cover = background-size: cover
bg-contain = background-size: contain

bg-no-repeat = background-repeat: no-repeat
bg-repeat = background-repeat: repeat
bg-repeat-x = background-repeat: repeat-x
bg-repeat-y = background-repeat: repeat-y
bg-repeat-round = background-repeat: round
bg-repeat-space = background-repeat: space

### gradients

#### gradient direction

bg-gradient-to-t = background-image: linear-gradient(to top, ...)
bg-gradient-to-tr = background-image: linear-gradient(to top right, ...)
bg-gradient-to-r = background-image: linear-gradient(to right, ...)
bg-gradient-to-br = background-image: linear-gradient(to bottom right, ...)
bg-gradient-to-b = background-image: linear-gradient(to bottom, ...)
bg-gradient-to-bl = background-image: linear-gradient(to bottom left, ...)
bg-gradient-to-l = background-image: linear-gradient(to left, ...)
bg-gradient-to-tl = background-image: linear-gradient(to top left, ...)

#### gradient initial color
from-transparent = background-color: transparent
from-current = background-color: currentColor
from-black = background-color: #000
from-white = background-color: #fff
from-gray-50 = background-color: #f9fafb
...

#### gradient final color
to-transparent = background-color: transparent
to-current = background-color: currentColor
to-black = background-color: #000
to-white = background-color: #fff
to-gray-50 = background-color: #f9fafb
...


## shadows

shadow-sm = box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
shadow = box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)
shadow-md = box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
shadow-lg = box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)
shadow-xl = box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)
shadow-2xl = box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)
shadow-inner = box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)
shadow-none = box-shadow: none

### shadow colors

shadow-red-500 = box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.5)
shadow-red-600 = box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.5)
shadow-red-700 = box-shadow: 0 0 0 3px rgba(185, 28, 28, 0.5)
...

## Mix Blend

mix two superposed colors

mix-blend-normal = mix-blend-mode: normal
mix-blend-multiply = mix-blend-mode: multiply
mix-blend-screen = mix-blend-mode: screen
mix-blend-overlay = mix-blend-mode: overlay
mix-blend-darken = mix-blend-mode: darken
mix-blend-lighten = mix-blend-mode: lighten


## Borders

border = border-width: 1px
border-0 = border-width: 0px
border-2 = border-width: 2px
border-4 = border-width: 4px
border-8 = border-width: 8px
...

### Border radius

#### border radius size
rounded = border-radius: 0.25rem (4px)
rounded-sm = border-radius: 0.125rem (2px)
rounded-md = border-radius: 0.375rem (6px)
rounded-lg = border-radius: 0.5rem (8px)
rounded-xl = border-radius: 0.75rem (12px)
rounded-2xl = border-radius: 1rem (16px)
...
rounded-full = border-radius: 9999px

#### border radius position

rounded-t-2xl = border-top-left-radius: 1rem (16px); border-top-right-radius: 1rem (16px)
rounded-r-2xl = border-top-right-radius: 1rem (16px); border-bottom-right-radius: 1rem (16px)
rounded-b-2xl = border-bottom-right-radius: 1rem (16px); border-bottom-left-radius: 1rem (16px)
rounded-l-2xl = border-top-left-radius: 1rem (16px); border-bottom-left-radius: 1rem (16px)
rounded-tl-2xl = border-top-left-radius: 1rem (16px)
rounded-tr-2xl = border-top-right-radius: 1rem (16px)
rounded-br-2xl = border-bottom-right-radius: 1rem (16px)
rounded-bl-2xl = border-bottom-left-radius: 1rem (16px)

## **Outline**

outline = outline-width: 2px
outline-0 = outline-width: 0px
outline-black = outline-color: #000
...
outline-transparent = outline-color: transparent
outline-offset-2 = outline-offset: 2px
outline-offset-4 = outline-offset: 4px
...


## Filters

### Blur

Works on both text and images

blur = filter: blur(0.125rem)
blur-sm = filter: blur(0.0625rem)
blur-md = filter: blur(0.25rem)
...

### Brightness

Works on both text and images

brightness-0 = filter: brightness(0)
brightness-50 = filter: brightness(0.5)
brightness-75 = filter: brightness(0.75)
brightness-90 = filter: brightness(0.9)
brightness-100 = filter: brightness(1) //default
...
brightness-200 = filter: brightness(2)

### Contrast

Works on both text and images

contrast-0 = filter: contrast(0)
contrast-50 = filter: contrast(0.5)
...
constrast-100 = filter: contrast(1) //default
...
contrast-200 = filter: contrast(2)

### grayscale

grayscale = filter: grayscale(100%)


### Sepia

sepia = filter: sepia(100%)

### Hue rotate

hue-rotate-0 = filter: hue-rotate(0deg)
hue-rotate-90 = filter: hue-rotate(90deg)
...
hue-rotate-180 = filter: hue-rotate(180deg)