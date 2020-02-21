import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, switchMap } from "rxjs/operators";
import { LaunchDetailsGQL } from "../services/spacexGraphql.service";
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';

@Component({
  selector: "app-launch-details",
  templateUrl: "./launch-details.component.html",
  styleUrls: ["./launch-details.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LaunchDetailsComponent {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[] = [];
  constructor(
    private readonly route: ActivatedRoute,
    private readonly launchDetailsService: LaunchDetailsGQL,
  ) {
    this.initGallery();
  }

  launchDetails$ = this.route.paramMap.pipe(
    map(params => params.get("id") as string),
    switchMap(id => this.launchDetailsService.fetch({ id })),
    map(res => res.data.launch)
  );

  private initGallery(): void {
    this.galleryOptions = [
      {
        width: "500px",
        height: "425px",
        thumbnailsColumns: 3,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      {
        breakpoint: 800,
        width: "500px",
        height: "425px",
        imagePercent: 50,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      {
        breakpoint: 400,
        width: "300px",
        preview: false
      }
    ];

    this.launchDetails$.subscribe(result => {
      if (result && result.links) {
        this.galleryImages = result.links.flickr_images.map((image: string) => {
          return this.getGalleryImages(image);
        });
      }
    });
  }

  private getGalleryImages(item: string): NgxGalleryImage {
    return {
      small: item,
      medium: item,
      big: item
    };
  }
}
