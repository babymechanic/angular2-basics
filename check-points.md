## Check points
### Step 1
  - Clean up code
    - rename variables to something descriptive 
    - making injected values readonly
    - get rid of comments
    - get rid of commented out code 
    - encapsulation 
    - feature rich objects
  - Issues
    - test only tests at a much higher level will be difficult as more objects are introduced
### Step 2  
  - How to add more tests
    - Add a spec file for each file we want to test
    - add tests for each of the methods that the class exposes
  - Issues
    - It looks like we are retesting the code which is already tested
    - getting difficult to write a test for some thing which depends on another class
### Step 3
  - in testing how do we?
    - prevent retesting existing code which has tests
    - make it easier to test classes with dependencies
  - issues
    - writing tests makes after the code is written is a little harder
    - might not have context on existing code
### Step 4
  - We want to be able to select from a list of available products to make it a bit more interesting
  - lets try TDD
  - the service returns a promise which is used heavily in javascript
  -Issues
    - The code is a little harder to read with the `then` chain
    - adding more chaining would make it hard to read
### Step 5
  - Async Await
    
   
