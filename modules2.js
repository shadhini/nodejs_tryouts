// module.exports is an object
// every file you create, it actually has a module that exports object by default
// so whenever you create a module, what nodejs does is it throws this module.exports behind the scene and set it to an blank object
// module.exports = {};
// thus rather than writing functions and then exporting them one by one,
// it's efficient to write functions and variables to be exported directly inside this object
// it is just like JSON object (key, value)
module.exports = {

    printAvatar: function () {
        console.log("Avatar")
    },

    printChappie: function () {
        console.log("Chappie")
    },

    favMovie: "The Matrix"
};
