document.getElementById("countButton").addEventListener("click", function () {
    const sentence = document.getElementById("sentenceInput").value;
    
    // Count words
    const words = sentence.trim().split(/\s+/);
    const wordCount = words.filter(word => word !== "").length;
    
    // Count alphabets
    const alphabetCount = sentence.replace(/[^a-zA-Z]/g, "").length;
  
    // Display results
    document.getElementById("result").innerHTML = `
      <p>Your word count is: <strong>${wordCount}</strong></p>
      <p>Your alphabet count is: <strong>${alphabetCount}</strong></p>
    `;
  });
  