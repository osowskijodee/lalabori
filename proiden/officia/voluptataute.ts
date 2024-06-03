// Define 'Hero' and 'Power' types with string union types for better type checking
type Hero = 'SpiderMan' | 'IronMan' | 'CaptainAmerica';
type Power = 'WebSlinging' | 'Flight' | 'SuperStrength';

// Create a Record type mapping each 'Hero' to their 'Power'
const superHeroes: Record<Hero, Power> = {
  SpiderMan: 'WebSlinging',
  IronMan: 'Flight',
  CaptainAmerica: 'SuperStrength'
};

// Function to get the power of a hero
function getHeroPower(hero: Hero): Power {
  return superHeroes[hero];
}

// Example usage
const spiderManPower = getHeroPower('SpiderMan');
console.log(`SpiderMan's power is: ${spiderManPower}`);
