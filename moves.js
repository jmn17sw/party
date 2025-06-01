const state = {
  eventList : []
}

const appDiv = document.querySelector('#app') 
appDiv.innerHTML = `<h1>Party Planner</h1>
<form>
<label>Upcoming Parties</label><input/>
<button>Sort 1</button>
<button>Sort All</button>
</form>


<h2></h2>
<output></output>

<h2></h2>
<output></output>

<h2></h2>
<output></output>
`

const getEvents = async () => {
  const response = await fetch(`https://fsa-crud-2aa9294fe819.
    herokuapp.com/api/2505-FTB-ET-WEB-FT/events`);
  const eventObject = await response.json();
  const eventBreakdown = eventObject.results;
  renderEvents();
};

const renderEvents = () => {
  state.eventList.forEach((singleEvent) => {
    const li = document.createElement('li')
    li.innerText = singleEvent.name;

    const ol = document.querySelector('ol');
      ol.appendChild('li')
  });
}
getEvents()

console.log(getEvents())