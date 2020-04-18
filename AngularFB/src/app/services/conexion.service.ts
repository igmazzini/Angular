import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection ,AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Tarea { name: string; descripcion:string }

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  private tareasCollection: AngularFirestoreCollection<Tarea>;
  private tareaDoc: AngularFirestoreDocument<Tarea>;
  tareas: Observable<Tarea[]>;
  
  constructor(private db: AngularFirestore) { 
    this.tareasCollection = db.collection<Tarea>('tareas');
    this.tareas = this.tareasCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Tarea;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  /**
   * obtenerTareas
   */
  public obtenerTareas() {
    return this.tareas;
  }

  /**
   * agregarTarea
   */
  public agregarTarea(tarea:Tarea) {
    this.tareasCollection.add(tarea);
  }
  /**
   * eliminarTarea
   */
  public eliminarTarea(tarea) {
    this.tareaDoc = this.db.doc<Tarea>(`tareas/${tarea.id}`);
    this.tareaDoc.delete();
  }

  /**
   * editarTarea
tarea   */
  public editarTarea(tarea) {
    this.tareaDoc = this.db.doc<Tarea>(`tareas/${tarea.id}`);
    this.tareaDoc.update(tarea);
  }
}
