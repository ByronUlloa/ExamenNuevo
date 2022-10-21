import { UserI } from './../models/models';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authfirebase: AngularFireAuth,public ngFireAuth: AngularFireAuth) { }

  login(correo: string, password:string){
    return this.authfirebase.signInWithEmailAndPassword(correo,password)
  }
  logut(){
    this.authfirebase.signOut();
  }
  registarUser(datos:UserI){
  return  this.authfirebase.createUserWithEmailAndPassword(datos.correo,datos.password);

  }
  stateUser(){
  return this.authfirebase.authState
  }
  PasswordRecover(passwordResetEmail) {
    return this.ngFireAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert(
          'Password reset email has been sent, please check your inbox.'
        );
      })
      .catch((error) => {
        window.alert(error);
      });
  }
}
