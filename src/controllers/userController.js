//globalRouter
export const join = (req, res) => res.send("join");
export const login = (req, res) => res.send("login");

//userRouter
export const logout = (req, res) => res.send("logout");
export const editProfile = (req, res) => res.send("edit Profile");
export const deleteProfile = (req, res) => res.send("delete Profile");
export const seeProfile = (req, res) => res.send("see Profile");