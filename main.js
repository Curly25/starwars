const url = "https://swapi.dev/api/species/1/?format=json";
function fetchData(url) {
  return fetch(url).then((resp) => resp.json());
}
function constructTableRow(data) {
  const row = document.createElement("tr");
  const { name, height, mass, hair_color } = data;
  
  row.appendChild(constructElement("td", name));
  row.appendChild(constructElement("td", height));
  row.appendChild(constructElement("td", mass));
  row.appendChild(constructElement("td", hair_color));
  return row;
}
function constructElement(tagName, text, cssClasses) {
  const element = document.createElement(tagName);
  const content = document.createTextNode(text);
  element.appendChild(content);
  if (cssClasses) {
    element.classList.add(...cssClasses);
  }
  return element;
}
const showTable = document
  .getElementById("show-table")
  .getElementsByTagName("tbody")[0];

fetchData("https://swapi.dev/api/people/").then((data) => {
  data.results.forEach((result) => {
    const row = constructTableRow(result);
    showTable.appendChild(row);
  });
});
