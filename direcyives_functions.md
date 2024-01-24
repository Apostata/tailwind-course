# Directives and Functions
there ar 3 base layers, base, components and utilities, you can add your own layers with the @layer directive
1. base layer: styles that are applied to elements using element selectors, descendant selectors, or child selectors
2. components layer: styles that are applied to elements using class selectors
3. utilities layer: styles that are applied to elements using utility classes
   

## Directives
1. @tailwind: you can add tailwind directives to your css file
4. @layer: you can create custom styles without adding classes
5. @apply: you can apply a class to another class
6. @variants: you can create custom variants

example:

in main.css add:
```css
@layer base {
	.h1 {
		@apply text-2xl font-bold text-blue-600;
	}
}
```
## Functions

1. theme(): you can access the theme object from tailwind.config.js
2. config(): you can access the config object from tailwind.config.js
3. screen(): you can access the breakpoints from tailwind.config.js
4. min-widht(): you can access the breakpoints from tailwind.config.js
5. max-widht(): you can access the breakpoints from tailwind.config.js
6. min-height(): you can access the breakpoints from tailwind.config.js
7. max-height(): you can access the breakpoints from tailwind.config.js
8. clamp(): you can create a responsive font-size
9. calc(): you can create a responsive font-size

example:

```css
// theme function
.content-area {
	@apply bg-green-300;
	height: theme(spacing[128])
}

// screen function
@media screen(xl) {
	body {
		@apply bg-black text-white;
	}
}
```	