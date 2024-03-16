module.exports = {
    "navbar": {
        listElement: "ul",            // Change the top level tag
        listItemElement: "li",        // Change the item tag

        listClass: "flex flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center",
        anchorClass: "mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200",              // Add a class to the anchor
        activeAnchorClass: "",        // Add a class to the current page’s anchor
        showExcerpt: false
    },
    "footer": {
        listElement: "ul",            // Change the top level tag
        listItemElement: "li",        // Change the item tag

        listClass: "flex flex-wrap justify-center mt-6 -mx-4",
        anchorClass: "mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400",              // Add a class to the anchor
        activeAnchorClass: "",        // Add a class to the current page’s anchor
        showExcerpt: false
    }
}