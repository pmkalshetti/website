(() => {
    'use strict'

    const date = new Date(document.lastModified);

    let last_updated_div = document.getElementById('last_updated')
    // last_updated_div.setAttribute("href", "mailto:pmkalshetti@iitb.ac.in")
    last_updated_div.innerHTML = "Last updated on " + date.toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"});

})()