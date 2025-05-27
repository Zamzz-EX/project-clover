document.getElementById("saveBtn").addEventListener("click", () => {
    const fields = document.querySelectorAll(".editable");
    let profileData = {};
  
    fields.forEach((field, index) => {
      profileData[`field${index}`] = field.innerText.trim();
    });
  
    console.log("Saved Data:", profileData);
  
    const msg = document.getElementById("saveMessage");
    msg.textContent = "✅ Profile saved successfully!";
    setTimeout(() => msg.textContent = "", 3000);
  });