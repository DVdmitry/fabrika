import { Component } from '@angular/core';

@Component({
    selector: 'main',
    template: `
                <div class = "card img-thumbnail">
                    <ngbd-carousel-basic></ngbd-carousel-basic>
                </div>
                <site-links></site-links>
                <br>
                <video-youtube></video-youtube>
                <vk></vk>
                `
})

export class MainPageComponent {
}
