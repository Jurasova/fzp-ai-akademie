function copyPrompt(btn) {
  const block = btn.closest('.prompt-block');
  if (!block || !navigator.clipboard) return;
  const clone = block.cloneNode(true);
  clone.querySelectorAll('.copy-btn').forEach((b) => b.remove());
  const text = clone.textContent.replace(/\s+\n/g, '\n').trim();
  navigator.clipboard.writeText(text);
  btn.textContent = 'Zkopírováno ✓';
  setTimeout(() => {
    btn.textContent = 'Kopírovat';
  }, 2000);
}
