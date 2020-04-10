### NgRx

State management library for angular based on Redux and rxjs

- Why State management?
- Why not RxJs Subjects?


#### Components


![](https://ngrx.io/generated/images/guide/store/state-management-lifecycle.png)

- Store
    - Single source of truth that manages the entire app state
    - sends and recives state

- Action 
    - how change in state is transpiled
    
- Reducer 
    - js function make a copy of state and payload and make change
    - return old state and new state
    - changes have to be immutable
- Side Effects 
    -   http request
