import PastaActionTypes from "./pasta.types";

export const choosePasta = (pastaId) => ({
  type: PastaActionTypes.CHOOSE_PASTA,
  payload: pastaId,
});
