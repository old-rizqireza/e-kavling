export const copyToClipboard = (textValue: string) => {
  const textField = document.createElement('input');
  textField.value = textValue;
  document.body.appendChild(textField);
  textField.select();
  if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
    const el: any = textField;
    const editable = el.contentEditable;
    const readOnly = el.readOnly;
    el.contentEditable = true;
    el.readOnly = false;
    const range = document.createRange();
    range.selectNodeContents(el);
    el.setSelectionRange(0, 999999);
    el.contentEditable = editable;
    el.readOnly = readOnly;
  }
  document.execCommand('copy');
  document.body.removeChild(textField);
};
