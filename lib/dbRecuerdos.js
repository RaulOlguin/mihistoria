import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export async function obtenerRecuerdos() {
  const recuerdosCol = collection(db, 'recuerdos');
  const snapshot = await getDocs(recuerdosCol);
  
  const listaRecuerdos = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  return listaRecuerdos;
}