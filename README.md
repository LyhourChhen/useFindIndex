# useFindIndex
Custome Hook to find index base on row and state's data.

*This code totally breaking the Hook's rules so pls make sure disable eslint rule*

`// eslint-disable-next-line react-hooks/rules-of-hooks`

### Example 
```js
import React, { useState } from "react";
import "./App.css";

import useFindIndex from "./useFindIndex";

function App() {
  const [data] = useState([
    { id: 1, name: "Fuck" },
    { id: 2, name: "shit" },
    { id: 3, name: "asshole" }
  ]);

  const row = id => {
    console.log("row number ");
    console.log("id", id);
    let rowIndex = data.indexOf(id);
    console.log("innnnn", rowIndex);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [rowId] = useFindIndex(id, data, id);
    console.log("custome hook value", rowId);
  };

  return (
    <div className="App">
      <div>
        <h1>Hello Mother the Fucker</h1>
        {data.map(res => (
          <li onClick={() => row(res)} key={res.id}>
            {res.id} : {res.name}
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;
---------
will console base on your rowIndex :D

```
### Author : @LyhourChhen
