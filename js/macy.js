import Macy from "macy";

const masonry = new Macy({
  container: ".gallery",
  columns: 1,
  margin: 10,
  mobileFirst: true,
  breakAt: {
    650: 2
  }
});
