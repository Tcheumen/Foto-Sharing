import { Component,  OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snape.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;

  buttonMessage!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.buttonMessage = "Oh Like!";
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
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
 

}