export function getErrorMessage(message: string, retMessage: string) {

  if (message.includes('llave duplicada viola restricción de unicidad')) {
    return retMessage;
  } else message;
}
