//globalRouter
export const home = (req, res) => res.send("home");
export const search = (req, res) => res.send("search");

//videoRouter
export const see = (req, res) => res.send("see");
export const edit = (req, res) => res.send("edit Video");
export const deleteVideo = (req, res) => res.send("delete Video");
export const upload = (req, res) => res.send("upload Video");