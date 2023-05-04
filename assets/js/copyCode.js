(function(){
  const duriationButtonChange = 2000;
  const initialTimeout = 50;
  setTimeout(function(){
    const codeBlocks = document.querySelectorAll('div.highlight');

    codeBlocks.forEach(function (codeBlock) {
      let copyButton = document.createElement('button');
      copyButton.className = 'copy';
      copyButton.type = 'button';
      copyButton.ariaLabel = 'Copy code to clipboard';
      copyButton.innerText = 'Copy';

      codeBlock.prepend(copyButton);

      copyButton.addEventListener('click', function () {
        let code = codeBlock.querySelector('code').innerText.trim();
        window.navigator.clipboard.writeText(code);

        copyButton.innerText = 'Copied';
        

        setTimeout(function () {
          copyButton.innerText = 'Copy';
        }, duriationButtonChange);
      });
    });
  },initialTimeout);
})();
