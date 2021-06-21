export function getExistingFavs() {
    const favs = localStorage.getItem("favorites"); // get from local storage
    if (favs == null) {
      return []; // creating empty array
    } else {
    return JSON.parse(favs); // return parsed array
    }
  }
  