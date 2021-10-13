function insertTextInMessage(
  sourceText: string,
  insertedText: string,
  index: number
) {
  return (
    '' +
    sourceText.substring(0, index) +
    insertedText +
    sourceText.substring(index)
  );
}

export default insertTextInMessage;
