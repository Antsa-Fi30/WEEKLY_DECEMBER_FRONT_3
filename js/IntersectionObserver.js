if (NodeList.prototype.forEach === undefined) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0.5) {
        entry.target.classList.remove("not-visible");
        // observer.unobserve(entry.target);
      } else {
        entry.target.classList.add("not-visible");
      }
    });
  },
  {
    threshold: [0.5],
  }
);

let items = document.querySelectorAll("section");
items.forEach(function (item) {
  item.classList.add("not-visible");
  observer.observe(item);
});
