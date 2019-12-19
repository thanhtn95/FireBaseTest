import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Human} from './human';

@Injectable({
  providedIn: 'root'
})
export class HumanService {
  constructor(public db: AngularFirestore) {
  }

  createHuman(value) {
    return this.db.collection('humans').add({
      id: value.id,
      name: value.name,
    });
  }

  getHumanList() {
    return this.db.collection('humans').snapshotChanges();
  }

  deleteHuman(id: string) {
    return this.db.collection('humans').doc(id).delete();
  }
}
