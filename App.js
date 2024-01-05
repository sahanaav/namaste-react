const heading = React.createElement("h1", {}, "Heading from React!");
const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "heading inside 1"), 
    React.createElement("span", { id: "span1" }, "span inside 1")
]),
React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading2" }, "heading inside 2"), 
    React.createElement("h2", {}, "heading 2 inside 2"),
    React.createElement("h3", {}, "heading 3 inside 2"),
])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

