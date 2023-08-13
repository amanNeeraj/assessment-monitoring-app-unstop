import { Component, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewAssessModalComponent } from '../new-assess-modal/new-assess-modal.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class BodyComponent implements OnInit {
  constructor(private renderer: Renderer2, private dialog: MatDialog ) { }
 

  ngOnInit() {
    const frameContainer3 = document.getElementById('frameContainer3');
    const appContainer = document.getElementById('app-container');
  
    if (frameContainer3) {
      frameContainer3.addEventListener('click', () => {
        // Apply styles to simulate mobile view
        this.renderer.setStyle(document.body, 'width', '360px'); // Set your desired width
        this.renderer.setStyle(document.body, 'height', '1250px'); // Set your desired height
        this.renderer.setStyle(document.body, 'overflow', 'hidden'); // Hide scrollbars
  
        // You might need to adjust other elements' styles in your application to fit the mobile view.
      });
    }
  }
  openNewAssessmentDialog() {
    const dialogRef = this.dialog.open(NewAssessModalComponent, {
      width: '400px', // Set the desired width of the dialog
      data: {} // You can pass any data to the modal if needed
    });
  
    dialogRef.afterClosed().subscribe(result => {
      // Do something after the dialog is closed (if needed)
    });
  }
}


