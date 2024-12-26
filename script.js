const lines = [
    { text: "Welcome to the OpenMura-Developer.", color: "#ffffff" },
    { text: "Initializing system...", color: "#ffff00" },
    { text: "Loading modules: [##########] 100%", color: "#00ffff" },
    { text: "All systems operational.", color: "#00ff00" },
    { text: ":> We are looking for people to join OpenMura-Developer.", color: "#f00" },
    { text: ":> Will you join us?", color: "#f00"},
  ];
  
  const output = document.getElementById("output");
  
  function typeLine(line, index, callback) {
    const span = document.createElement("span");
    span.style.color = line.color;
    output.appendChild(span);
  
    let charIndex = 0;
    const interval = setInterval(() => {
      if (charIndex < line.text.length) {
        span.textContent += line.text[charIndex];
        charIndex++;
        output.scrollTop = output.scrollHeight;
      } else {
        clearInterval(interval);
        output.appendChild(document.createElement("br"));
        callback();
      }
    }, 50);
  }
  
  function typeLines(lines, index = 0) {
    if (index < lines.length) {
      typeLine(lines[index], index, () => typeLines(lines, index + 1));
    }
  }
  
  typeLines(lines);
  