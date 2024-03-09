module.exports = {
    "navbar": {
        listElement: "ul",            // Change the top level tag
        listItemElement: "li",        // Change the item tag

        listClass: "flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0",
        anchorClass: "text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500",              // Add a class to the anchor
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