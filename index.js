/* function codewarResult(codewarrior, opponent) {
  const allies = codewarrior.sort();
  const enemies = opponent.sort();

  const battleResults = enemies.map((enemy) => {
    let allyIndex;

    let smallestSuperiorAlly = allies.find((ally, index) => {
      allyIndex = index;
      return ally > enemy;
    });

    if (!smallestSuperiorAlly) {
      smallestSuperiorAlly = allies[allies.length - 1];
      allies.pop();
    } else {
      allies.splice(allyIndex, 1);
    }
    return smallestSuperiorAlly - enemy;
  });
  let warResult = 0;

  battleResults.map((result) => {
    if (result >= 1) warResult++;
    if (result <= -1) warResult--;
  });

  return warResult >= 1
    ? "Victory"
    : warResult <= -1
    ? "Defeat"
    : "Stalemate";
}

console.log(codewarResult([2, 4, 3, 1], [4, 5, 1, 2]));
 */

const drinksByProfession = {
  jabroni: "Patron Tequila",
  "school counselor": "Anything with Alcohol",
  programmer: "Hipster Craft Beer",
  "bike gang member": "Moonshine",
  politician: "Your tax dollars",
  papper: "Cristal",
};

const getDrinkByProfession = (param) =>
  drinksByProfession[param.toLowerCase()] || "Beer";

console.log(getDrinkByProfession("asd"));
