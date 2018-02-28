# JSCoord  

JSCoord is a simple coordinate and map system for JS. It provides a simple API for manipulating coordinates and setting maps(limits).  

## Basic Usage  

Install JSCoord using NPM:

```
npm i jscoord --save
```

Once its installed, you can import it into your application by adding this to the top of the script:

```js
const { JSCoord } = require("jscoord")
```

Or if you use Typescript/Webpack:

```ts
import JSCoord from "jscoord";
```

Then, to create a new `JSCoord` instance, use:

```js
let coords = new JSCoord(x, y, z)
```

And there you have it! `coords` will be a new JSCoords instance. You can now mutate it using the provided methods.

## Methods

JSCoord provides some basic mutation methods. They can be used to modify the coordinate set in different ways.

#### `.incrX(amount)`, `.incrY(amount)`, `.incrZ(amount)`

Increments the specified axis by `amount`. If `amount` parameter is not provided, increments by 1.

```js
coords.incrX(10)
```

#### `.decrX(amount)`, `.decrY(amount)`, `.decrZ(amount)`

Decrements the specified axis by `amount`. If `amount` parameter is not provided, decrements by 1.

```js
coords.decrX(10)
```

#### `.setX(val)`, `.setY(val)`, `.setZ(val)`

Sets the axis value to `val`.

```js
coords.setX(20)
```

#### `.invX()`, `.invY()`, `.invZ()`

"Inverts" the number, so it becomes its negative/positive version. 3 becomes -3, -3 becomes 3 and so on.

```js
coords.invX()
```

#### `.setMap(x, y, z)`

Sets the maximum range for each axis. It sets the maximum to the provided number and the minimum to the negative of the provided number. Other methods will fail if they are out of range. This will fail if axis is above limit already.

```js
coords.setMap(100, 100, 100)
```

#### `.getObject()`

Returns the X, Y and Z axis values as an object.

```js
coords.getObject() // {x: 20, y: 0, z: 0}
```

#### `.getArray()`

Returns the X, Y and Z axis values as an array. `.getArray()[0]` contains the X axis, `.getArray()[1]` the Y axis and `.getArray()[2]` the Z axis.

```js
coords.getArray() // [X, Y, Z]
```