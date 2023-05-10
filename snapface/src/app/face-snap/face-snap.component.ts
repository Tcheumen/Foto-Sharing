import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snape.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;

  buttonMessage!: string;
  
  constructor(private faceSnapsService: FaceSnapsService,
              private route: Router) { }

  ngOnInit() {
    this.buttonMessage = "Oh Like!"; 

  }

  
  
  onLike() {
  
    if (this.buttonMessage === "Oh Like!") {
      this.faceSnapsService.unsnapFaceSnapById(this.faceSnap.id);
      this.buttonMessage = 'Oops, unLike!';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id);
      this.buttonMessage = "Oh Like!";
    }
      
    /*
    if (this.userSnapped) {
      this.like--;
      this.userSnapped = false;
      this.buttonMessage = "Oh Like!";
    } else {
      this.like++;
      this.userSnapped = true;
      this.buttonMessage = " Oops, unLike!";
     }
      
    }  */
    
  }

  onViewFaceSnap() {

    this.route.navigateByUrl(`faceSnaps/${this.faceSnap.id}`);
  }

 
}

