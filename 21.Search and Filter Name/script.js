document.getElementById("search-here").addEventListener("input", function () {
  const filter = this.value.toLowerCase();
  const rows = document.querySelectorAll("table tr"); // Get all rows including the header

  console.log("rows");
  rows.forEach((row, index) => {
    const td = row.getElementsByTagName("td");
    console.log(row);

    if (index === 0) {
      // Always show the header row
      row.style.display = "";
    } else if (index > 0) {
      const name = td[0].textContent.toLowerCase();

      if (name.includes(filter)) {
        row.style.display = ""; // Show row if it matches
      } else {
        row.style.display = "none"; // Hide row if it doesn't match
      }
    }
  });
});
//
