// Number of leaves to generate
const numLeaves = 50; // Adjust the number of leaves
const body = document.body;

for (let i = 0; i < numLeaves; i++) {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    
    // Set random left position for each leaf
    leaf.style.left = `${Math.random() * 100}vw`;
    
    // Set random animation delay (for staggered falling)
    leaf.style.animationDelay = `${Math.random() * 5}s`;
    
    // Set random animation duration (for different speeds)
    leaf.style.animationDuration = `${5 + Math.random() * 10}s`;
    
    // Set random opacity for the leaves
    leaf.style.opacity = `${0.3 + Math.random() * 0.7}`;
    
    // Add a custom property for randomness in the nth-child selectors
    leaf.style.setProperty('--i', i);
    
    // Add the leaf to the body
    body.appendChild(leaf);
}
