console.log("This is connected correctly");


let cookieCount = 0;
let cookiesPerSecond = 0;


let gameData = {
  cookieCount: 0,
  cookiesPerSecond: 0,
};


const shopUpgradesArray = [];


const upgradesContainer = document.getElementById("upgrades-shop-container");

async function getShopUpgrades() {
  const result = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  
  const data = await result.json();
  console.log(data);


  shopUpgradesArray.length = 0;
  data.forEach(datafunction);
  function datafunction(listdata) {
    shopUpgradesArray.push(listdata);
  }
  console.log(shopUpgradesArray);
  return shopUpgradesArray;
 
}
async function renderShopUpgrades() {
    const getShopItems = await getShopUpgrades();
    console.log(getShopItems);
  
    getShopItems.forEach(function (upgrade) {
      const upgradeName = document.createElement("p");
      upgradeName.textContent = upgrade.name;
      const upgradeCost = document.createElement("p");
      upgradeCost.textContent = upgrade.cost;
      const upgradeCPSIncrease = document.createElement("p");
      upgradeCPSIncrease.textContent = upgrade.increase;
  
      const miniContainer = document.createElement("div");
      miniContainer.appendChild(upgradeName);
      miniContainer.appendChild(upgradeCost);
      miniContainer.appendChild(upgradeCPSIncrease);
  
      miniContainer.className = "minicontainerstyle";
      const button = document.createElement("button");
      button.textContent = `buy`;
      button.addEventListener("click", handleUpgradeClick);
      miniContainer.appendChild(button);
  
      upgradesContainer.appendChild(miniContainer);
    });
  }
  renderShopUpgrades();

  function handleUpgradeClick() {
  
  }
  
  setInterval(function () {

   
  }, 1000);