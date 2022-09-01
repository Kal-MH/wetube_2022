//globalRouter

const fakeUser = {
    name : "kal",
    isLoggedIn : true
}

const fakeVideos = [
    {
        title: "First Video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 1,
    },
    {
        title: "Second Video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 1,
    },
    {
        title: "Third Video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 1,
    }
]

export const home = (req, res) => res.render("home", {pageTitle : "Home", fakeUser, videos : fakeVideos});
export const search = (req, res) => res.render("search", {pageTitle : "Search", fakeUser});

//videoRouter
export const see = (req, res) => res.send("see");
export const edit = (req, res) => res.send("edit Video");
export const deleteVideo = (req, res) => res.send("delete Video");
export const upload = (req, res) => res.send("upload Video");