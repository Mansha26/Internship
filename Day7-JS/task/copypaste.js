// Store the text externally to demonstrate the onchange logic
      let syncedText = "";
      let lastPastedText = null; 

      const sourceBox = document.getElementById("sourceBox");
      const destinationBox = document.getElementById("destinationBox");
      const copyBtn = document.getElementById("copyBtn");
      const pasteBtn = document.getElementById("pasteBtn");
      const clearPasteBtn = document.getElementById('clearPasteBtn');
     
      let activeTextarea = destinationBox; 

        sourceBox.addEventListener('focus', function() {
            activeTextarea = this;
        });

        destinationBox.addEventListener('focus', function() {
            activeTextarea = this;
        });
 // 1. Using onchange() and the 'this' keyword
      // The onchange event fires when the textarea loses focus after being modified
      sourceBox.onchange = function () {
        syncedText = this.value;
      };

      // 2. Copy Button Logic
      copyBtn.onclick = async function () {
        if (!syncedText) {
          sourceBox.onchange.call(sourceBox);
        }

        await navigator.clipboard.writeText(syncedText);
        lastPastedText = null;
      };

      // 3. Paste Button Logic
      pasteBtn.onclick = async function () {
        const text = await navigator.clipboard.readText();

        if (text === lastPastedText && text !== "") {
        
          return; // Stop execution here
        }

        destinationBox.value += text;
        lastPastedText = text; // Update the tracker
        activeTextarea.value = text;
        activeTextarea.focus();
      };

      //4.clear and paste
      clearPasteBtn.onclick = async function () {
        const text = await navigator.clipboard.readText();
        activeTextarea.value = text;
        activeTextarea.focus();
      };