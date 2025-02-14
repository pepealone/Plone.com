// script.js
// You can add some JavaScript here for interactivity later.
// For example, to copy the contract address to the clipboard.
document.addEventListener('DOMContentLoaded', function() {
  const contractAddress = document.getElementById('contract-address');

  contractAddress.addEventListener('click', function() {
    const address = contractAddress.innerText;
    navigator.clipboard.writeText(address)
      .then(() => {
        alert('Contract address copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy address: ', err);
        alert('Failed to copy contract address. Please try again.');
      });
  });
});