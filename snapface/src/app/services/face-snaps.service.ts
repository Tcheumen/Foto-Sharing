import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snape.model";

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService {

    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: "Archibald",
            description: "Mon meilleur ami",
            imageUrl: "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
            createdDate: new Date(),
            like: 250,
            location: "Gießen"
        },
        {
            id: 2,
            title: "Bulbasur",
            description: "Mon Pokedex",
            imageUrl: "https://img.pokemondb.net/artwork/large/bulbasaur.jpg",
            createdDate: new Date(),
            like: 0,
            location: "Franfurt"
        },
        {
            id: 3,
            title: "Charmander",
            description: "Mon Pokemon",
            imageUrl: "https://img.pokemondb.net/artwork/large/charmander.jpg",
            createdDate: new Date(),
            like: 0,

        }
    ];
    
    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    snapFaceSnapById(faceSnapId: number): void {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (faceSnap) {
            faceSnap.like++;
        } else {
            throw new Error('FaceSnap not found!');
        }
    }

    unsnapFaceSnapById(faceSnapId: number): void {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (faceSnap) {
            faceSnap.like--;
        } else {
            throw new Error('FaceSnap not found!');
        }
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found');
        } else {
            return faceSnap;
        }
    }
}