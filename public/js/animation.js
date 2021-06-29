const router = async() => {
    const routes = [
        {path: "/", view: () => console.log("my home page")},
        {path: "/devlogs", view: ()=> console.log("Viewing dev log")},
        {path: "/animation", view: () => console.log("hey this is my animation page")}

    ];

    // testing the routes
    const potentialMatches = routes.map((route)=> {
        return {
            route:route,
            isMatch: location.pathname === route.path
        }
    })
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);
    
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true, 
        }
    }
    
    console.log(match);
    
}

document.addEventListener("DOMContentLoaded", () =>{
    router();
});