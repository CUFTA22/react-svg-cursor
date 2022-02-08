# react-svg-cursor

Use any image or SVG as a cursor in your react project.

## Installation

```
npm install --save react-svg-cursor
```

## Usage

```js index.js
import { CustomCursor } from "react-svg-cursor";

import svg from "./assets/test.svg";
// or
import png from "./assets/test.png";

ReactDOM.render(
  <>
    <App />
    <CustomCursor
      component={svg}
      isDisabled={false}
      width={20}
      height={20}
      zIndex={420}
      transform="translate(-30%, -10%) rotateZ(-22deg)"
    />
  </>,
  document.getElementById("root")
);
```

## Props

| name       | type    | default | description                                                         |
| :--------- | :------ | :------ | :------------------------------------------------------------------ |
| component  | any     | none    | Your asset to be used as cursor                                     |
| isDisabled | boolean | false   | Turn on or off your custom cursor                                   |
| width      | number  | 18      | Width                                                               |
| height     | string  | 18      | Height                                                              |
| zIndex     | number  | 999     | z-index, adjust for your app                                        |
| transform  | string  | 18      | You can use this to rotate your cursor, works exactly like css rule |

## Custom styles

You can add your styles on `.rsc-cursor` class name

## Licence

MIT-licensed. See LICENSE.
