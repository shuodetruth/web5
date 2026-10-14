const canvas = document.getElementById("smiley");
const ctx = canvas.getContext("2d");

// Á³
ctx.beginPath();
ctx.arc(150, 150, 100, 0, Math.PI * 2);
ctx.fillStyle = "#FFD93D";
ctx.fill();
ctx.strokeStyle = "#333";
ctx.lineWidth = 3;
ctx.stroke();

// ×óÑÛ
ctx.beginPath();
ctx.arc(115, 120, 12, 0, Math.PI * 2);
ctx.fillStyle = "#333";
ctx.fill();

// ÓÒÑÛ
ctx.beginPath();
ctx.arc(185, 120, 12, 0, Math.PI * 2);
ctx.fill();

// Î¢Ð¦£¨»¡Ïß£©
ctx.beginPath();
ctx.arc(150, 160, 50, 0, Math.PI);
ctx.strokeStyle = "#333";
ctx.lineWidth = 4;
ctx.stroke();

// ÎÄ×Ö
ctx.font = "20px Arial";
ctx.fillStyle = "#333";
ctx.textAlign = "center";
ctx.fillText("Have a nice day!", 150, 275);