import { chipsCol } from "../gateway/firestore.js";

export const getAllChips = async () => {
  const snapshot = await chipsCol.get();
  return snapshot.docs.map((snapshot) => {
    return { ...snapshot.data(), id: snapshot.id };
  });
};
