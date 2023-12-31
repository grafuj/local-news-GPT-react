import OpenAI from "openai";

const generateCity = async (cityInput) => {
  
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  });

  if (!configuration.apiKey) {
    throw new Error("OpenAI API key not configured, please follow instructions in README.md");
  }

  const city = cityInput.trim();
  if (city.trim().length === 0) {
    throw new Error("Please enter a valid city");
  }

  try {
    const completion = await openai.completions.create({
      model: "text-davinci-003",
      prompt: generatePrompt(city),
      temperature: 0.4,
      // max_tokens: 1024,
      max_tokens: 15,
    });

    // console.log("37 completion:", completion);

    // maybe if (completion) { return needed? don't know when it renders}

    return completion.choices[0].text;
  } catch (error) {
    if (error instanceof OpenAI.APIError) {
      console.error(error.status, error.response.data);
      throw (error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      throw new Error(`Error with OpenAI API request: ${error.message}`);
    }
  }
};

function generatePrompt(city) {
  const capitalizedCity =
    city[0].toUpperCase() + city.slice(1).toLowerCase();
  return `I'm looking to make a new homepage for local news for a city. Please make some stories about ${capitalizedCity}

  Please make the content in this exact format but make it about ${capitalizedCity}:
  
  a. Paris Fashion Week Unveils Latest Trends: Get ready to be mesmerized by the world of fashion as Paris Fashion Week showcases the latest haute couture creations.
  b. New Art Exhibition at the Louvre: Explore the artistic wonders of the Louvre Museum with a new and captivating exhibition that brings history to life.
  c. Parisian Cuisine at Its Finest: Savor the exquisite flavors of Paris with the opening of a Michelin-starred restaurant that promises a gastronomic journey.
  d. Celebrating Bastille Day in Style: Join the festive atmosphere as Parisians celebrate Bastille Day with fireworks, parades, and cultural events.
  e. Seine River Cruises: A Romantic Escape: Experience the romance of Paris by embarking on a scenic cruise along the Seine River, taking in the city's enchanting skyline.
  f. Parisian Arts and Culture: Immerse yourself in Paris's rich cultural scene, from world-class art galleries to captivating theatrical performances.
  g. Exploring Montmartre: The Bohemian Heart of Paris: Take a stroll through Montmartre, the charming and artistic neighborhood known for its vibrant history and picturesque streets.
  `;


  /*
  Since this is going to be placed into a webpage, I'm hoping you can place the result in a numbered list that is plain text (not code).
 
  - four new stories (a, b, c, d)
  - three main stories to appear on tiles (a, b, c)
 
  Here is an example for Madrid:
 
    a. Madrid's Annual Flamenco Festival: Experience the passion and rhythm of Spain's iconic dance form at Madrid's annual Flamenco Festival.
    b. New Park Opens in the Heart of the City: Madrid welcomes a new urban park, providing a green oasis for residents and visitors to relax and enjoy nature.
    c. Tech Innovation Drives Madrid's Economy: Learn how Madrid is becoming a hub for tech innovation, attracting startups and fostering entrepreneurship.
    d. Royal Palace of Madrid: A Palace Fit for Royalty: Dive into the rich history and grandeur of the Royal Palace of Madrid, which has witnessed centuries of Spanish royalty.
 
    a. Culinary Delights of Madrid: Indulge in the diverse culinary scene of Madrid, from traditional tapas to innovative fusion cuisine.
    b. Prado Museum: A Treasure Trove of Art: Explore the world-renowned Prado Museum, home to an impressive collection of European art masterpieces.
    c. Retiro Park: Urban Retreat in Madrid: Discover the beauty of Retiro Park, a tranquil urban retreat in the heart of Madrid, perfect for picnics and relaxation.
    */

  //   return `Suggest three names for an animal that is a superhero.

  // Animal: Cat
  // Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
  // Animal: Dog
  // Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
  // Animal: ${capitalizedAnimal}
  // Names:`;

}

export { generateCity };