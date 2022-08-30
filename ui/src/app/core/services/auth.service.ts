import { Injectable } from '@angular/core';
import { User } from '../models/auth.models';

@Injectable({ providedIn: 'root' })

/**
 * Auth-service Component
 */
export class AuthenticationService {

    user!: User;
    currentUserValue: any;

    constructor() { }

    /**
     * Performs the register
     * @param email email
     * @param password password
     */
    register(email: string, password: string) {
       
    }

    /**
     * Performs the auth
     * @param email email of user
     * @param password password of user
     */
    login(email: string, password: string) {
       
    }

    /**
     * Returns the current user
     */
    public currentUser(): any {
        
    }

    /**
     * Logout the user
     */
    logout() {
        // logout the user
        
    }

    /**
     * Reset password
     * @param email email
     */
    resetPassword(email: string) {
       
    }

}

