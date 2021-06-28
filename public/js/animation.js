const router = async() => {
    const routes = [
        {path: "/devlogs", view: ()=> console.log("Viewing dev log")},
        {path: "/", view:() => console.log("main view")}
    ];

    // testing the routes
    const potentialMatches = routes.map((route)=> {
        return {
            route:route,
            isMatch: location.pathname === route.path
        }
    })
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);
    console.log(match);
    
}

document.addEventListener("DOMContentLoaded", () =>{
    router();
});