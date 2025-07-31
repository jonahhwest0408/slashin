function convertPath() {
      const input = document.getElementById('pathInput').value;
      const direction = document.querySelector('input[name="direction"]:checked').value;
      let output = '';

      if (direction === 'toBackslash') {
        output = input.replaceAll('/', '\\');
      } else {
        output = input.replaceAll('\\', '/');
      }

      document.getElementById('output').textContent = output;
    }