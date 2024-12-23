// Displays the current player creature's stats
export const displayStats = (playerCreature, chosenRelic) => {
  try {
    const playerStats = [
      { label: "Name", value: playerCreature.name },
      { label: "HP", value: playerCreature.hp + chosenRelic.hpMod },
      { label: "Speed", value: playerCreature.speed + chosenRelic.speedMod },
      {
        label: "Defense",
        value: playerCreature.defense + chosenRelic.defenseMod,
      },
      {
        label: "Critical",
        value: playerCreature.critical + chosenRelic.criticalMod,
      },
      { label: "MP", value: playerCreature.mp + chosenRelic.mpMod },
      {
        label: "MP Regen",
        value: playerCreature.mpRegen + chosenRelic.mpRegenMod,
      },
      { label: "\nAttack Name", value: playerCreature.attackName },
      {
        label: "Attack",
        value: playerCreature.attack + chosenRelic.attackMod,
      },
      { label: "Attack Type", value: playerCreature.attackType },
      { label: "\nSpecial Name", value: playerCreature.specialName },
      {
        label: "Special",
        value: playerCreature.special + chosenRelic.specialMod,
      },
      { label: "Special Cost", value: playerCreature.specialCost },
      { label: "Special Type", value: playerCreature.specialType },
    ];
    const formattedStats = playerStats
      .map((stat) => `${stat.label}: ${stat.value}`)
      .join("\n");

    alert(formattedStats);
  } catch (err) {
    console.error(err);
  }
};
