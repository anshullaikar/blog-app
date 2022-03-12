# blog-app
For Machine Test 1

Please check `master` for first submission at 6PM on 12th March 2022, `revision` for my changes to the code if I had a few more hours.

I have also made a list of improvements which I have noticed in my own code and would like to fix. Thet can be seen on the `Issues` tab. 


Instructions to open project:

Please download as a zip and extract, or directly clone either git branch to your system. 

please run `npm i` followed by `npm start` to view the code in action.  

Notable features in `revision`:
- I have made all the components independent and reused the card component in both the Todos and Blog section after making it customisable using props.
- Have created a theme json which changes all the colours of the entire project using keywords `primary`, `secondary` or `accent`
- Made a fully independent navbar which can accept a list of strings and show them in the navbar, with the colours of choice as well. 
- Used React Query so that data is cached and there is proper validation
- Used *only* functional programming and hooks (useState, useEffect) to make code cleaner and simpler
- Routing (which was in `master` as well) using React Router
