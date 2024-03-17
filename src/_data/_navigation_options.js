module.exports = {
    "navbar": {
        listElement: "ul",            // Change the top level tag
        listItemElement: "li",        // Change the item tag

        listClass: "flex flex-col capitalize text-white lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center",
        anchorClass: "mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-yellow",              // Add a class to the anchor
        activeAnchorClass: "",        // Add a class to the current page’s anchor
        showExcerpt: false
    },
    "footer": {
        listElement: "ul",            // Change the top level tag
        listItemElement: "li",        // Change the item tag

        listClass: "flex flex-wrap justify-center -mx-5 -my-2",
        anchorClass: "px-5 py-2 text-sm text-gray-500 hover:text-blue-600",              // Add a class to the anchor
        activeAnchorClass: "text-gray-600",        // Add a class to the current page’s anchor
        showExcerpt: false
    }
}