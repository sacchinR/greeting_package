const monarchCats = ["Garfield", "Felix"];

export const morningGreet = (name: string) => {
  let greet = "Good Morning ";
  if (monarchCats.includes(name)) {
    greet = "Good Morning, your MAJESTY, ";
  }
  return greet + name;
};
