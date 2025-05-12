# React Fast Marquee — Shadow‑DOM friendly fork

This fork removes the runtime **inline &lt;style&gt; injection** from the
original [`react-fast-marquee`](https://www.npmjs.com/package/react-fast-marquee)
and ships the stylesheet as a regular **Marquee.scss / marquee.css**
so it can be processed by your own build pipeline (e.g. MiniCssExtract +
stylesInjector into Shadow DOM). The JavaScript API is 100 % compatible
with the upstream package.

[![demogif][2]][1]

[1]: https://www.react-fast-marquee.com
[2]: https://media.giphy.com/media/6ritiN2cpvpsyz4fo6/giphy.gif "demo gif"

## Demo

Check out the demo [here](https://www.react-fast-marquee.com) and play around with some sample marquees.

## Installation

If you're using `npm`, in the command prompt run:

```sh
npm install react-fast-marquee-shadow-dom
```

If you're using `yarn`, run:

```sh
yarn add react-fast-marquee-shadow-dom
```

### Importing the stylesheet

The component no longer injects its own styles.  
Import the generated CSS **once** in your Shadow‑DOM entry (or wherever your
global styles live):

```ts
import 'react-fast-marquee-shadow-dom/marquee.css';
```

## Usage

To use the component, first import `Marquee` into your file:

```jsx
import Marquee from "react-fast-marquee-shadow-dom";
```

Then wrap the `<Marquee>` tags around any component or text you'd like to slide.

```jsx
<Marquee>
  I can be a React component, multiple React components, or just some text.
</Marquee>
```

A sample file might look like this:

```jsx
import React from "react";
import MyComponent from "../components/MyComponent";
import Marquee from "react-fast-marquee-shadow-dom";

const App = () => (
  <Marquee>
    <MyComponent />
    <MyComponent />
    <MyComponent />
  </Marquee>
);

export default App;
```

## Props

| Property          | Type                                | Default           | Description                                                                                                                                                                                          |
| :---------------- | :---------------------------------- | :---------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `style`           | `CSSProperties`                     | `{}`              | Inline style for the container div                                                                                                                                                                   |
| `className`       | `string`                            | `""`              | Name of the css class to style the container div                                                                                                                                                     |
| `autoFill`        | `boolean`                           | `false`           | Whether to automatically fill blank space in the marquee with copies of the children or not                                                                                                          |
| `play`            | `boolean`                           | `true`            | Whether to play or pause the marquee                                                                                                                                                                 |
| `pauseOnHover`    | `boolean`                           | `false`           | Whether to pause the marquee when hovered                                                                                                                                                            |
| `pauseOnClick`    | `boolean`                           | `false`           | Whether to pause the marquee when clicked                                                                                                                                                            |
| `direction`       | `"left" \| "right"\| "up"\| "down"` | `"left"`          | The direction the marquee slides <br /><br /> **Warning:** Vertical marquees are currently experimental and may be buggy. Please swap the values of the marquee's height and width when setting them |
| `speed`           | `number`                            | `50`              | Speed calculated as pixels/second                                                                                                                                                                    |
| `delay`           | `number`                            | `0`               | Duration to delay the animation after render, in seconds                                                                                                                                             |
| `loop`            | `number`                            | `0`               | The number of times the marquee should loop, 0 is equivalent to infinite                                                                                                                             |
| `gradient`        | `boolean`                           | `false`           | Whether to show the gradient or not                                                                                                                                                                  |
| `gradientColor`   | `string`                            | `white`           | The color of the gradient                                                                                                                                                                            |
| `gradientWidth`   | `number \| string`                  | `200`             | The width of the gradient on either side                                                                                                                                                             |
| `onFinish`        | `{() => void}`                      | `null`            | A callback for when the marquee finishes scrolling and stops. Only calls if loop is non-zero.                                                                                                        |
| `onCycleComplete` | `{() => void}`                      | `null`            | A callback for when the marquee finishes a loop. Does not call if maximum loops are reached (use onFinish instead).                                                                                  |
| `onMount`         | `{() => void}`                      | `null`            | A callback function that is invoked once the marquee has finished mounting. It can be utilized to recalculate the page size, if necessary.                                                           |
| `children`        | `ReactNode`                         | `null`            | The children rendered inside the marquee                                                                                                                                                             |
