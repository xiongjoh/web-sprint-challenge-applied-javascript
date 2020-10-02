// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

axios.get('https://lambda-times-api.herokuapp.com/topics')
.then(res => {
    // debugger
    res.data.topics.forEach((topic) => {
        const topicTab = newTab(topic)
        document.querySelector('.topics').appendChild(topicTab)
    })
    console.log(res.data.topics)
})
.catch(err => {
    console.log(err)
    // debugger
})


// component to make new tab
function newTab(topic) {

    const tab = document.createElement('div')
    tab.classList.add('tab')
    tab.textContent = topic

    return tab
}