# Modal

## Install

Install using `npm i modal-virginie`

## Usage

In a React app, use the Modal components:
`import { Modal } from 'modal-virginie'`


## Modal props

| Name        | Description      
| ----------- | -----------      
| background    | Boolean (optional)           
| btnClose    | Boolean (optional)           
| onClose     | function
| close     | function            
| isOpen      | Boolean          


## Example

```js
import React, { useState } from "react";
import { Modal } from "modal-virginie";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <main>
        <button className="btn-click" onClick={toggleModal}>
          CLICK ME
        </button>
     
          <Modal  isOpen={isOpenModal} background close onClose={toggleModal}>
            <p>Your Message here !</p>
          </Modal>
        
      </main>
    </>
  );
}

export default App;
```
